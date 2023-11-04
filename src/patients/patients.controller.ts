import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('/create')
  async create(@Body() createPatientDto: CreatePatientDto) {
    return await this.patientsService.create(createPatientDto);
  }
  @Get('/')
  async getAllPatient() {
    return await this.patientsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.patientsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return await this.patientsService.update(id, updatePatientDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.patientsService.remove(id);
  }
}