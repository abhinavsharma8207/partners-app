import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { Partner } from './schemas/partner.schema';
import { PartnerListQueryParamDto } from './dto/partner-list-query-param.dto';
export declare class PartnersController {
    private readonly partnersService;
    constructor(partnersService: PartnersService);
    filterByRange(queryDto: PartnerListQueryParamDto): Promise<Partner[]>;
    create(createPartnerDto: CreatePartnerDto): Promise<Partner>;
    findAll(): Promise<Partner[]>;
}
