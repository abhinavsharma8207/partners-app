import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { Partner } from './schemas/partner.schema';
import { PartnerListQueryParamDto } from './dto/partner-list-query-param.dto';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post("/filterByRange")
  async filterByRange(@Body() queryDto: PartnerListQueryParamDto): Promise<Partner[]> {
    console.log(queryDto);
    return this.partnersService.findPartnersByRange(queryDto.lon, queryDto.lat, queryDto.kms);
  }

  @Post()
  async create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  async findAll(): Promise<Partner[]> {
    return this.partnersService.findAll();
  }

}
