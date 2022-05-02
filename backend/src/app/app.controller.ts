import { Controller, Get } from '@nestjs/common';
import { DatabaseCreator } from 'src/Helpers/DatabaseCreator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mongo: DatabaseCreator,
  ) {}

  @Get('all')
  findAll(): string {
    return this.appService.findAll();
  }

  @Get()
  home(): string {
    return this.appService.home();
  }

  @Get('tests')
  tests(): string {
    this.mongo.getCollections();
    return this.appService.tests();
  }
}
