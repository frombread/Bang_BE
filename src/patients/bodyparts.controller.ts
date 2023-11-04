import { Controller, Get } from '@nestjs/common';
import { BodyPartsService } from './bodyparts.service';
import { BodyPart } from './schemas/bodypart.schema';

@Controller('bodyparts')
export class BodyPartsController {
  constructor(private readonly bodyPartsService: BodyPartsService) {}

  @Get()
  async findAll(): Promise<BodyPart[]> {
    return this.bodyPartsService.findAll();
  }
}
