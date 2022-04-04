import * as mongoose from 'mongoose';
import { Product } from './products.schema';
export declare type InvoiceDocument = Invoice & Document;
export declare class Invoice {
    issueDate: string;
    paid: boolean;
    paymentDate: string;
    total: number;
    ProductInOrder: Product[];
}
export declare const InvoiceSchema: mongoose.Schema<mongoose.Document<Invoice, any, any>, mongoose.Model<mongoose.Document<Invoice, any, any>, any, any, any>, {}, {}>;
