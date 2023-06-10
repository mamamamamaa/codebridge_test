import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { dogsProviders } from './dog.providers';

@Module({
  controllers: [DogController],
  providers: [DogService, ...dogsProviders],
})
export class DogModule {}
