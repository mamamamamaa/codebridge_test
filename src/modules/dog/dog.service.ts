import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Dog } from './models/dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { FindOptions } from 'sequelize';
import { DogQueryParamsDto } from './dto/dog-query-params.dto';
import { DOG_PROVIDER } from '../../consts/dog';

@Injectable()
export class DogService {
  constructor(@Inject(DOG_PROVIDER) private dogsRepository: typeof Dog) {}

  async findAll(query: DogQueryParamsDto) {
    try {
      const pageNumber = parseInt(String(query.pageNumber), 10);
      const pageSize = parseInt(String(query.pageSize), 10);

      const findOptions: FindOptions = {
        order:
          query.attribute && query.order
            ? [[query.attribute, query.order]]
            : undefined,
        offset: pageNumber ? (pageNumber - 1) * pageSize : undefined,
        limit: pageSize,
      };

      return await this.dogsRepository.findAll(findOptions);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createDog(dto: Omit<CreateDogDto, 'id'>) {
    try {
      return await this.dogsRepository.create(dto);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new HttpException('Name must be unique', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
