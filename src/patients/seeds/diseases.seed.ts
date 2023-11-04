import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Disease, DiseaseDocument } from '../schemas/disease.schema';

@Injectable()
export class DiseasesSeedService {
  constructor(
    @InjectModel(Disease.name)
    private readonly diseaseModel: Model<DiseaseDocument>,
  ) {}

  public async populateDiseases() {
    const diseasesNames = [
      '고혈압',
      '당뇨병',
      '심부전증',
      '감기',
      '천식',
      '골관절염',
      '요통',
      '치매',
      '고지혈증',
      '심장질환',
    ];

    // 배열 내의 모든 이름에 대해 반복하여 검사 및 추가
    for (const name of diseasesNames) {
      const diseaseExists = await this.diseaseModel.findOne({ name: name });
      if (!diseaseExists) {
        const newDisease = new this.diseaseModel({ name });
        await newDisease.save();
      }
    }
  }
}
