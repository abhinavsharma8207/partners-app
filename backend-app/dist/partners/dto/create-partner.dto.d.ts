export declare class CreateOfficeDto {
    location: string;
    address: string;
    lat: number;
    lon: number;
}
export declare class CreatePartnerDto {
    urlName: string;
    organization: string;
    customerLocations: string;
    willWorkRemotely: boolean;
    website: string;
    services: string;
    offices: CreateOfficeDto;
}
