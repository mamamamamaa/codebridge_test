import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get()
  findAll() {
    return this.dogService.findAll();
  }

  @Post()
  createDog(@Body() dto: CreateDogDto) {
    return this.dogService.createDog(dto);
  }
}
