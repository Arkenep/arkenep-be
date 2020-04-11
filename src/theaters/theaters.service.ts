import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Theater } from './interfaces/theater.interface';

@Injectable()
export class TheatersService {
  constructor(@InjectModel('Theater') private readonly theaterModel: Model<Theater>) {}

  async findAll(): Promise<Theater[]> {
      return this.theaterModel.find().exec();
  }
}
