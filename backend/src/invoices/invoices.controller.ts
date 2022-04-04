import { Controller, Get } from '@nestjs/common';
import { Invoice } from './invoices.schema';
import { invoicesService } from './invoices.service';

@Controller('invoices')
export class invoicesController {
  constructor(private readonly invoicesService: invoicesService) {}

  @Get()
  async findAll(): Promise<Invoice[]> {
    return this.invoicesService.findAll();
  }
}
