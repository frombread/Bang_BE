import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;
@Schema()
export class Patient extends Document {
  @Prop()
  name: string;

  @Prop({ enum: ['M', 'F'], default: 'M' })
  gender: string;

  @Prop()
  birthday: number;

  @Prop()
  conditions: string;

  @Prop({ type: [String], default: [] })
  painAreas: string[];

  @Prop()
  etc?: string | null; // null 값 허용
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
