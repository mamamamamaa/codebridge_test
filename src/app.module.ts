import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { DogModule } from './modules/dogs/dog.module';

@Module({
  imports: [DatabaseModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
