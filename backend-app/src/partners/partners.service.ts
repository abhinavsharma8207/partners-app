import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { Office } from './schemas/office.schema';
import { Partner, PartnerDocument } from './schemas/partner.schema';

@Injectable()
export class PartnersService {
  constructor(
    @InjectModel(Partner.name)
    private readonly partnerModel: Model<PartnerDocument>,
  ) {}

  async create(createPartnerDto: CreatePartnerDto): Promise<Partner> {
    const createdPartner = await this.partnerModel.create(createPartnerDto);
    return createdPartner;
  }

  async findAll(): Promise<Partner[]> {
    return this.partnerModel.find().exec();
  }

  async findPartnersByRange(lon1: number, lat1: number, kms: number):Promise<Partner[]> {
   var partnersResult =  await this.partnerModel.find().exec()
   let partnerFilteredArray: Array<Partner> = new Array();
   for (const partner of partnersResult) {
       for(const office of partner.offices){
         const distance = this.calculateDistance(lat1, lon1, office.lat, office.lon)
         if(distance <= kms)
         {
          //partnerFilteredArray.push(partner)
          let existPartner = partnerFilteredArray.find( filteredPartner => filteredPartner['organization'] === partner['organization'] );
          if (existPartner)
          {
            existPartner.offices.push(office);
          }
          else{
           let objPartner = new Partner()
           objPartner.urlName = partner.urlName;
           objPartner.customerLocations = partner.customerLocations;
           objPartner.organization = partner.organization;
           objPartner.website = partner.website;
           objPartner.services = partner.services;
           objPartner.willWorkRemotely = partner.willWorkRemotely;
           objPartner.offices = new Array<Office>(office);
           partnerFilteredArray.push(objPartner);

          }
        }
       }

   }
   partnerFilteredArray.sort((a, b) => (a.organization > b.organization) ? 1 : -1)
   return partnerFilteredArray;
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    // named toRadians which converts from
    // degrees to radians.
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;

    // Haversine formula
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    const c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    const r = 6371;

    // calculate the result
    return c * r;
  }
}
