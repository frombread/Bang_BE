import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient, PatientDocument } from './schemas/patient.schema';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async createPatient(createPatientDto: CreatePatientDto) {
    const createdPatient = new this.patientModel(createPatientDto);
    return await createdPatient.save();
  }

  async find(name: string, birthday: number, gender: string) {
    const query = {
      ...(name && { name }),
      ...(birthday && { birthday }),
      ...(gender && { gender }),
    };
    return await this.patientModel.find(query).exec();
  }

  async update(
    name: string,
    gender: string,
    birthday: number,
    updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientModel.updateOne(
      { name, gender, birthday },
      updatePatientDto,
    );
  }

  async remove(name: string, gender: string, birthday: number) {
    return this.patientModel.findOneAndRemove({ name, gender, birthday });
  }
}
