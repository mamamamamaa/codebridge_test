import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ping')
  getHello(): string {
    return 'Dogshouseservice.Version1.0.1';
  }
}
