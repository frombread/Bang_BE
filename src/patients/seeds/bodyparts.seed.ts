import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BodyPart, BodyPartDocument } from '../schemas/bodypart.schema';

@Injectable()
export class BodyPartsSeedService {
  constructor(
    @InjectModel(BodyPart.name)
    private readonly bodyPartModel: Model<BodyPartDocument>,
  ) {}

  public async populateBodyParts() {
    const bodyPartsNames = [
      '머리',
      '눈',
      '코',
      '입',
      '귀',
      '목',
      '팔',
      '손',
      '다리',
      '발',
      '가슴',
      '배',
    ];

    for (const name of bodyPartsNames) {
      const bodyPartExists = await this.bodyPartModel.findOne({ name: name });
      if (!bodyPartExists) {
        const newBodyPart = new this.bodyPartModel({ name });
        await newBodyPart.save();
      }
    }
  }
}
