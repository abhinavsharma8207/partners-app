"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const partners_controller_1 = require("./partners.controller");
const partners_service_1 = require("./partners.service");
const partner_schema_1 = require("./schemas/partner.schema");
let PartnersModule = class PartnersModule {
};
PartnersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: partner_schema_1.Partner.name, schema: partner_schema_1.PartnerSchema }]),
        ],
        controllers: [partners_controller_1.PartnersController],
        providers: [partners_service_1.PartnersService],
    })
], PartnersModule);
exports.PartnersModule = PartnersModule;
//# sourceMappingURL=partners.module.js.map