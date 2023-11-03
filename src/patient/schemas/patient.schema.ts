import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Patient extends Document{
  @Prop()
  id: number;
  // .....
}
