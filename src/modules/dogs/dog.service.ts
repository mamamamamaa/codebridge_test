import { Inject, Injectable } from '@nestjs/common';
import { Dog } from './dog.entity';

@Injectable()
export class DogService {
  constructor(
    @Inject('DOGS_PROVIDER')
    private dogsModel: typeof Dog,
  ) {}

  async findAll() {
    return this.dogsModel.findAll();
  }
}
