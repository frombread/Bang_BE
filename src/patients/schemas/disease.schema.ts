import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiseaseDocument = Document & Disease;

@Schema()
export class Disease {
  @Prop({ required: true })
  name: string;
}

export const DiseaseSchema = SchemaFactory.createForClass(Disease);
