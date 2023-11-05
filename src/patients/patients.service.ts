import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const createdPatient = new this.patientModel(createPatientDto);
    return createdPatient.save();
  }

  async findAll(
    page: number,
    pageSize: number,
  ): Promise<{ data: Patient[]; pageNum: number }> {
    const skip = (page - 1) * pageSize;
    const data = await this.patientModel
      .find()
      .skip(skip)
      .limit(pageSize)
      .exec();
    const total = await this.patientModel.countDocuments();
    const pageNum = Math.ceil(total / pageSize);
    return { data, pageNum };
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id).exec();
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    const updatedPatient = await this.patientModel
      .findByIdAndUpdate(id, updatePatientDto, { new: true })
      .exec();
    if (!updatedPatient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return updatedPatient;
  }

  async remove(id: string): Promise<Patient> {
    const deletedPatient = await this.patientModel.findByIdAndRemove(id).exec();
    if (!deletedPatient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return deletedPatient;
  }
}
