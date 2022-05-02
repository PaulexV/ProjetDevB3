import { Injectable } from '@nestjs/common';
import { DatabaseCreator } from 'src/Helpers/DatabaseCreator';

@Injectable()
export class AppService {
  mongo: DatabaseCreator;

  home(): string {
    return 'This is the home page.';
  }
}
