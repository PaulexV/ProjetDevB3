import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { user, UserDocument } from './users.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(user.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<user> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<user[]> {
    return this.userModel.find().exec();
  }
}
