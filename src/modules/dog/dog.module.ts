import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { dogsProviders } from './dogs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DogController],
  providers: [DogService, ...dogsProviders],
})
export class DogModule {}
