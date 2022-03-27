"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const partner_schema_1 = require("./schemas/partner.schema");
let PartnersService = class PartnersService {
    constructor(partnerModel) {
        this.partnerModel = partnerModel;
    }
    async create(createPartnerDto) {
        const createdPartner = await this.partnerModel.create(createPartnerDto);
        return createdPartner;
    }
    async findAll() {
        return this.partnerModel.find().exec();
    }
    async findPartnersByRange(lon1, lat1, kms) {
        var partnersResult = await this.partnerModel.find().exec();
        let partnerFilteredArray = new Array();
        for (const partner of partnersResult) {
            for (const office of partner.offices) {
                const distance = this.calculateDistance(lat1, lon1, office.lat, office.lon);
                if (distance <= kms) {
                    let existPartner = partnerFilteredArray.find(filteredPartner => filteredPartner['organization'] === partner['organization']);
                    if (existPartner) {
                        existPartner.offices.push(office);
                    }
                    else {
                        let objPartner = new partner_schema_1.Partner();
                        objPartner.urlName = partner.urlName;
                        objPartner.customerLocations = partner.customerLocations;
                        objPartner.organization = partner.organization;
                        objPartner.website = partner.website;
                        objPartner.services = partner.services;
                        objPartner.willWorkRemotely = partner.willWorkRemotely;
                        objPartner.offices = new Array(office);
                        partnerFilteredArray.push(objPartner);
                    }
                }
            }
        }
        partnerFilteredArray.sort((a, b) => (a.organization > b.organization) ? 1 : -1);
        return partnerFilteredArray;
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        lon1 = (lon1 * Math.PI) / 180;
        lon2 = (lon2 * Math.PI) / 180;
        lat1 = (lat1 * Math.PI) / 180;
        lat2 = (lat2 * Math.PI) / 180;
        const dlon = lon2 - lon1;
        const dlat = lat2 - lat1;
        const a = Math.pow(Math.sin(dlat / 2), 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
        const c = 2 * Math.asin(Math.sqrt(a));
        const r = 6371;
        return c * r;
    }
};
PartnersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(partner_schema_1.Partner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PartnersService);
exports.PartnersService = PartnersService;
//# sourceMappingURL=partners.service.js.map