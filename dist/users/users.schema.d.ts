import * as mongoose from 'mongoose';
import { Invoice } from '../invoices/invoices.schema';
export declare type UserDocument = user & mongoose.Document;
export declare class user {
    first_name: string;
    last_name: string;
    email: string;
    creationDate: Date;
    invoice: Invoice[];
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<user, any, any>, mongoose.Model<mongoose.Document<user, any, any>, any, any, any>, {}, {}>;
