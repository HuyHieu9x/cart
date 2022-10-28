import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Company } from "../module/company.module";

@Injectable()
export class InfoCompanyService{
    constructor(private http: HttpClient){}

    getInfoCompany(): Observable<Company>{
        return this.http.get('https://63380813132b46ee0be9267d.mockapi.io/api/v1/infoCompany')
        .pipe(
            map((response: any) => response)
        )
    }
}