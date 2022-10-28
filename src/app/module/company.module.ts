export class Company{
    companyID: number;
    name: string;
    country: string;

    constructor( companyID: number, name: string, country: string){
        this.companyID = companyID;
        this.name = name;
        this.country = country;
    }
}