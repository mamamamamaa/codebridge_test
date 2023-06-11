import { Inject, Injectable } from '@nestjs/common';
import { Dog } from './dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogService {
  constructor(@Inject('DOGS_REPOSITORY') private dogsRepository: typeof Dog) {}

  async findAll() {
    return this.dogsRepository.findAll();
  }

  async createDog(dto: Omit<CreateDogDto, 'id'>) {
    return this.dogsRepository.create(dto);
  }
}
