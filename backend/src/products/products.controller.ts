import { Controller, Get } from '@nestjs/common';
import { Product } from './products.schema';
import { productsService } from './products.service';

@Controller('products')
export class productsController {
  constructor(private readonly productsService: productsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
