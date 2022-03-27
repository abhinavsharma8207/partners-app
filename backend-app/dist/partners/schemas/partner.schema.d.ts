/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { Office } from './office.schema';
export declare type PartnerDocument = Partner & Document;
export declare class Partner {
    urlName: string;
    organization: string;
    customerLocations: string;
    willWorkRemotely: boolean;
    website: string;
    services: string;
    offices: Office[];
}
export declare const PartnerSchema: import("mongoose").Schema<Document<Partner, any, any>, import("mongoose").Model<Document<Partner, any, any>, any, any, any>, any, any>;
