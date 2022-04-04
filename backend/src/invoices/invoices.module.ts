import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { invoicesController } from './invoices.controller';
import { invoicesService } from './invoices.service';
import { Invoice, InvoiceSchema } from './invoices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  controllers: [invoicesController],
  providers: [invoicesService],
})
export class invoicesModule {}
