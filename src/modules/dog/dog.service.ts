import { Inject, Injectable } from '@nestjs/common';
import { Dog } from './models/dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { FindOptions } from 'sequelize';
import { DogQueryParamsDto } from './dto/dog-query-params.dto';

@Injectable()
export class DogService {
  constructor(@Inject('DOGS_REPOSITORY') private dogsRepository: typeof Dog) {}

  async findAll(query: DogQueryParamsDto) {
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

    return this.dogsRepository.findAll(findOptions);
  }

  async createDog(dto: Omit<CreateDogDto, 'id'>) {
    return this.dogsRepository.create(dto, {});
  }
}
