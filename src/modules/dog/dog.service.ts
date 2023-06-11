import { Inject, Injectable } from '@nestjs/common';
import { Dog } from './dog.entity';

@Injectable()
export class DogService {
  constructor(@Inject('DOGS_REPOSITORY') private dogsRepository: typeof Dog) {}

  async findAll() {
    return this.dogsRepository.findAll();
  }
}
