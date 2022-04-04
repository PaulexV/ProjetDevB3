import { invoicesModule } from './../invoices/invoices.module';
import { productsModule } from './../products/products.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/ProjetDev'),
    UsersModule,
    productsModule,
    invoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
