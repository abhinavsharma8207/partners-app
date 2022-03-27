import { Model } from 'mongoose';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { Partner, PartnerDocument } from './schemas/partner.schema';
export declare class PartnersService {
    private readonly partnerModel;
    constructor(partnerModel: Model<PartnerDocument>);
    create(createPartnerDto: CreatePartnerDto): Promise<Partner>;
    findAll(): Promise<Partner[]>;
    findPartnersByRange(lon1: number, lat1: number, kms: number): Promise<Partner[]>;
    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
}
