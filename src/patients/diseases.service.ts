import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Disease, DiseaseDocument } from './schemas/disease.schema';

@Injectable()
export class DiseasesService {
  constructor(
    @InjectModel(Disease.name) private diseaseModel: Model<DiseaseDocument>,
  ) {}

  async findAll(): Promise<Disease[]> {
    return this.diseaseModel.find().exec();
  }
}
