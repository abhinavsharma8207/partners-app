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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerSchema = exports.Partner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const office_schema_1 = require("./office.schema");
let Partner = class Partner {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partner.prototype, "urlName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partner.prototype, "organization", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partner.prototype, "customerLocations", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Partner.prototype, "willWorkRemotely", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partner.prototype, "website", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Partner.prototype, "services", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [office_schema_1.OfficeSchema] }),
    __metadata("design:type", Array)
], Partner.prototype, "offices", void 0);
Partner = __decorate([
    (0, mongoose_1.Schema)()
], Partner);
exports.Partner = Partner;
exports.PartnerSchema = mongoose_1.SchemaFactory.createForClass(Partner);
//# sourceMappingURL=partner.schema.js.map