import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    return await this.patientService.createPatient(createPatientDto);
  }

  @Get()
  async find(
    @Query('name') name?: string,
    @Query('birthday') birthday?: number,
    @Query('gender') gender?: string,
  ) {
    return await this.patientService.find(name, birthday, gender);
  }

  @Patch()
  async update(
    @Query('name') name: string,
    @Query('gender') gender: string,
    @Query('birthday') birthday: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return await this.patientService.update(name, gender, birthday, updatePatientDto);
  }

  @Delete()
  async remove(
    @Query('name') name: string,
    @Query('gender') gender: string,
    @Query('birthday') birthday: number,
  ) {
    return await this.patientService.remove(name, gender, birthday);
  }
}
