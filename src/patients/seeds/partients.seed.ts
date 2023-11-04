import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from '../schemas/patient.schema';

@Injectable()
export class PatientsSeedService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  public async populatePatients() {
    const testPatients = [
      {
        name: '방주희',
        gender: 'F',
        dateOfBirth: 19910528,
        disease: '심장질환',
        bodyParts: ['가슴'],
      },
      {
        name: '방우현',
        gender: 'M',
        dateOfBirth: 19970227,
        disease: '감기',
        bodyParts: ['코', '머리'],
        notes: '코감기, 두통',
      },
    ];

    for (const patientData of testPatients) {
      const patientExists = await this.patientModel.findOne({
        name: patientData.name,
        dateOfBirth: patientData.dateOfBirth,
      });
      if (!patientExists) {
        const newPatient = new this.patientModel(patientData);
        await newPatient.save();
      }
    }
  }
}
