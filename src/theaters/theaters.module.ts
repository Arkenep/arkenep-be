import { Module } from "@nestjs/common";
import { TheatersController } from "./theaters.controller";
import { TheatersService } from "./theaters.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TheaterSchema } from "./schemas/theater.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Theater', schema: TheaterSchema}])],
    controllers: [TheatersController],
    providers: [TheatersService],
})
export class TheatersModule {}