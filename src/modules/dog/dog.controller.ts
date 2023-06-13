import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogQueryParamsDto } from './dto/dog-query-params.dto';

@Controller()
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('dogs')
  findAll(@Query() query: DogQueryParamsDto) {
    return this.dogService.findAll(query);
  }

  @Post('dog')
  createDog(@Body() dto: CreateDogDto) {
    return this.dogService.createDog(dto);
  }
}
