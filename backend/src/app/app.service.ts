import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll(): string {
    return 'Returns all data';
  }

  home(): string {
    return 'This is the home page.';
  }

  createCollection(dbName: string) {
    this.createCollection(dbName);
    return 'collection created';
  }
}
