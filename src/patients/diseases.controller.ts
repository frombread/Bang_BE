import { Controller, Get } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { Disease } from './schemas/disease.schema';

@Controller('diseases')
export class DiseasesController {
  constructor(private readonly diseasesService: DiseasesService) {}

  @Get()
  async findAll(): Promise<Disease[]> {
    return this.diseasesService.findAll();
  }
}
