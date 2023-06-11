import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from '../database/database.module';
import { DogModule } from '../dog/dog.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    DogModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
  ],
  controllers: [AppController],
})
export class AppModule {}
