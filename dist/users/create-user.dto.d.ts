import { Invoice } from '../invoices/invoices.schema';
export declare class CreateUserDto {
    first_name: string;
    last_name: string;
    email: string;
    creationDate: Date;
    invoice: Invoice[];
}
