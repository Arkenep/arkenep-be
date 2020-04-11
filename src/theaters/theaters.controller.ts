import { Controller, Get } from '@nestjs/common';
import { Theater } from './interfaces/theater.interface';
import { TheatersService } from './theaters.service';

@Controller('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Get()
  async findAll(): Promise<Theater[]> {
      return this.theatersService.findAll();
  };
}
