import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { FindOptions } from 'sequelize';
import { DogQueryParamsDto } from './dto/dog-query-params.dto';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get()
  findAll(@Query() query: DogQueryParamsDto) {
    return this.dogService.findAll(query);
  }

  @Post()
  createDog(@Body() dto: CreateDogDto) {
    return this.dogService.createDog(dto);
  }
}
