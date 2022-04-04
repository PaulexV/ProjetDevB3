import { Model } from 'mongoose';
import { user, UserDocument } from './users.schema';
import { CreateUserDto } from './create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<user>;
    findAll(): Promise<user[]>;
}
