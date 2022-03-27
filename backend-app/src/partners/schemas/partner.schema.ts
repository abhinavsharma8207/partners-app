import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Office, OfficeSchema } from './office.schema';

export type PartnerDocument = Partner & Document;

@Schema()
export class Partner {
  @Prop()
  urlName: string;

  @Prop()
  organization: string;

  @Prop()
  customerLocations: string;

  @Prop()
  willWorkRemotely: boolean;

  @Prop()
  website: string;

  @Prop()
  services: string;

  @Prop({ type: [OfficeSchema] })
  offices: Office[];
}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
