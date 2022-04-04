import { Product } from 'src/products/products.schema';

export class CreateinvoiceDto {
  issueDate: string;
  paid: boolean;
  paymentDate: string;
  total: number;
  ProductInOrder: Product[];
}
