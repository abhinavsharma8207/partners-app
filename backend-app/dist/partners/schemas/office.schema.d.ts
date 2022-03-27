/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type OfficeDocument = Office & Document;
export declare class Office {
    objectId: string;
    location: string;
    address: string;
    lat: number;
    lon: number;
}
export declare const OfficeSchema: import("mongoose").Schema<Document<Office, any, any>, import("mongoose").Model<Document<Office, any, any>, any, any, any>, any, any>;
