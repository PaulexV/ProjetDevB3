import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../Controllers/app.controller';
import { AppService } from '../Services/app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/ProjetDev')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
