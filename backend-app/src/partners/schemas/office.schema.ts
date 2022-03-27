import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectID } from 'bson';

export type OfficeDocument = Office & Document;

@Schema()
export class Office {
  @Prop({ type: Types.ObjectId, required: true, default: () => new ObjectID() })
  objectId: string;

  @Prop()
  location: string;

  @Prop()
  address: string;

  @Prop()
  lat: number;

  @Prop()
  lon: number;
}

export const OfficeSchema = SchemaFactory.createForClass(Office);
