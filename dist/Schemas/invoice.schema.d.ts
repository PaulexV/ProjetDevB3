/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type InvoiceDocument = Invoice & Document;
export declare class Invoice {
    name: string;
    age: number;
    breed: string;
}
export declare const InvoiceSchema: import("mongoose").Schema<Document<Invoice, any, any>, import("mongoose").Model<Document<Invoice, any, any>, any, any, any>, {}, {}>;
