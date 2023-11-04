import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BodyPartDocument = Document & BodyPart;

@Schema()
export class BodyPart {
  @Prop({ required: true })
  name: string;
}

export const BodyPartSchema = SchemaFactory.createForClass(BodyPart);
