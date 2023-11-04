import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: ['M', 'F'], default: 'M' })
  gender: string;

  @Prop({ required: true })
  dateOfBirth: number;

  @Prop({ required: true })
  disease: string;

  @Prop({ type: [{ type: String }] })
  bodyParts: string[];

  @Prop()
  notes?: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);