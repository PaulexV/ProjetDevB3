import { Controller, Get } from '@nestjs/common';
import { user } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<user[]> {
    return this.usersService.findAll();
  }
}
