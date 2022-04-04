import * as mongoose from 'mongoose';
import { Invoice } from './invoices.schema';
export declare type UserDocument = User & Document;
export declare class User {
    first_name: string;
    last_name: string;
    email: string;
    creationDate: Date;
    invoice: Invoice[];
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<User, any, any>, mongoose.Model<mongoose.Document<User, any, any>, any, any, any>, {}, {}>;
