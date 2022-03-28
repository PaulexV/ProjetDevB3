import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Invoice } from '../invoices/invoices.schema';

export type UserDocument = user & mongoose.Document;

@Schema()
export class user {
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

export const UserSchema = SchemaFactory.createForClass(user);
