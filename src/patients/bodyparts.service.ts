import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BodyPart, BodyPartDocument } from './schemas/bodypart.schema';

@Injectable()
export class BodyPartsService {
  constructor(
    @InjectModel(BodyPart.name) private bodyPartModel: Model<BodyPartDocument>,
  ) {}

  async findAll(): Promise<BodyPart[]> {
    return this.bodyPartModel.find().exec();
  }
}
