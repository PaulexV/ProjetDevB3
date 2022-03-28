import { Controller, Get } from '@nestjs/common';
import { AppService } from '../Services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  default(): string {
    return 'Here is the default route';
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  findAll(): string {
    return this.appService.findAll();
  }
}
