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
        name: '이주희',
        gender: 'F',
        dateOfBirth: 971125,
        disease: '심장질환',
        bodyParts: ['가슴'],
      },
      {
        name: '방우현',
        gender: 'M',
        dateOfBirth: 970227,
        disease: '골관절염',
        bodyParts: ['팔', '다리'],
        notes: '팔을 너무 아파함',
      },
      {
        name: '이성균',
        gender: 'M',
        dateOfBirth: 910528,
        disease: '감기',
        bodyParts: ['코', '목'],
      },
      {
        name: '김영희',
        gender: 'F',
        dateOfBirth: 880403,
        disease: '고혈압',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '박철수',
        gender: 'M',
        dateOfBirth: 930712,
        disease: '당뇨병',
        bodyParts: ['다리', '발'],
      },
      {
        name: '이지영',
        gender: 'F',
        dateOfBirth: 900826,
        disease: '심부전증',
        bodyParts: ['가슴', '배'],
        notes: '배가 아파 많이 아파 ㅠ',
      },
      {
        name: '오현주',
        gender: 'F',
        dateOfBirth: 950205,
        disease: '천식',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '박성준',
        gender: 'M',
        dateOfBirth: 970320,
        disease: '골관절염',
        bodyParts: ['손', '다리'],
      },
      {
        name: '송미경',
        gender: 'F',
        dateOfBirth: 910629,
        disease: '요통',
        bodyParts: ['귀', '목'],
      },
      {
        name: '이영호',
        gender: 'M',
        dateOfBirth: 920811,
        disease: '치매',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '김민석',
        gender: 'M',
        dateOfBirth: 940414,
        disease: '고지혈증',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '정수진',
        gender: 'F',
        dateOfBirth: 970112,
        disease: '심장질환',
        bodyParts: ['가슴', '배'],
      },
      {
        name: '박영철',
        gender: 'M',
        dateOfBirth: 910727,
        disease: '감기',
        bodyParts: ['귀', '목'],
        notes: '배가 아파 많이 아파 ㅠ',
      },
      {
        name: '이민호',
        gender: 'M',
        dateOfBirth: 940624,
        disease: '고혈압',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '김미나',
        gender: 'F',
        dateOfBirth: 930526,
        disease: '당뇨병',
        bodyParts: ['다리', '발'],
      },
      {
        name: '신현우',
        gender: 'M',
        dateOfBirth: 970203,
        disease: '심부전증',
        bodyParts: ['가슴', '배'],
        notes: '배가 아파 많이 아파 ㅠ',
      },
      {
        name: '이지수',
        gender: 'F',
        dateOfBirth: 950123,
        disease: '천식',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '박진영',
        gender: 'M',
        dateOfBirth: 920926,
        disease: '골관절염',
        bodyParts: ['손', '다리'],
        notes: '배가 아파 많이 아파 ㅠ',
      },
      {
        name: '김미영',
        gender: 'F',
        dateOfBirth: 900727,
        disease: '요통',
        bodyParts: ['귀', '목'],
      },
      {
        name: '정준호',
        gender: 'M',
        dateOfBirth: 940830,
        disease: '치매',
        bodyParts: ['머리', '눈'],
      },
      {
        name: '김지원',
        gender: 'M',
        dateOfBirth: 960212,
        disease: '고지혈증',
        bodyParts: ['머리', '눈'],
        notes: '배가 아파 많이 아파 ㅠ',
      },
      {
        name: '송미란',
        gender: 'F',
        dateOfBirth: 900517,
        disease: '심장질환',
        bodyParts: ['가슴', '배'],
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
