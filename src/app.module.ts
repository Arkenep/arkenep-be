import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { TheatersModule } from './theaters/theaters.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_HOST),
    CatsModule,
    TheatersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
