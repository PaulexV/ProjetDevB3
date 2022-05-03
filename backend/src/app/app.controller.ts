import { Controller, Get, Param } from '@nestjs/common';
import { Document } from 'mongodb';
import { DatabaseCreator } from 'src/Helpers/DatabaseCreator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mongo: DatabaseCreator,
  ) {}

  @Get()
  home(): string {
    return this.appService.home();
  }

  @Get('create/collection/:dbName')
  newCollection(@Param('dbName') dbName: string) {
    this.mongo.createCollection(dbName);
  }

  @Get('delete/collection/:dbName')
  removeCollection(@Param('dbName') dbName: string) {
    this.mongo.deleteCollection(dbName);
  }

  @Get('create/document/:dbName')
  newDocument(@Param('dbName') dbName: string, props: Document) {
    this.mongo.createDocument(dbName, props);
  }

  @Get('get/documents/:dbName')
  getDocuments(@Param('dbName') dbName: string) {
    this.mongo.getDocuments(dbName);
  }

  @Get('update/document/:dbName')
  updateDocument(
    @Param('dbName') dbName: string,
    query: Document,
    props: Document,
  ) {
    this.mongo.updateDocument(dbName, query, props);
  }

  @Get('delete/document/:dbName')
  deleteDocument(@Param('dbName') dbName: string, props: Document) {
    this.mongo.deleteDocument(dbName, props);
  }
}
