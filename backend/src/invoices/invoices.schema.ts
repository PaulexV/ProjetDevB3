import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../products/products.schema';

export type InvoiceDocument = Invoice & mongoose.Document;

@Schema()
export class Invoice {
  @Prop()
  issueDate: string;

  @Prop()
  paid: boolean;

  @Prop()
  paymentDate: string;

  @Prop()
  total: number;

  @Prop()
  ProductInOrder: Product;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
