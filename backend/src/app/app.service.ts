import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  tests(): string {
    return 'This is the tests page.';
  }
  findAll(): string {
    return 'Returns all data';
  }

  home(): string {
    return 'This is the home page.';
  }
}
