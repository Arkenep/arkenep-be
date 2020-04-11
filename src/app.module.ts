import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { TheatersModule } from './theaters/theaters.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://arkenep:retCxOAg2HwVTL1l@arkenepdb-dgarn.mongodb.net/sample_mflix?retryWrites=true&w=majority',
    ),
    CatsModule,
    TheatersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
