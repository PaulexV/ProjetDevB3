import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productsController } from './products.controller';
import { productsService } from './products.service';
import { Product, ProductSchema } from './products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [productsController],
  providers: [productsService],
})
export class productsModule {}
