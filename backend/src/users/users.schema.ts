import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Invoice } from '../invoices/invoices.schema';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  creationDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' })
  invoice: Invoice[];
}

export const UserSchema = SchemaFactory.createForClass(User);
