import { Component, OnInit } from '@angular/core';
import { InfoCompanyService } from 'src/app/services/InfoCompanyService';

@Component({
  selector: 'app-prduct-item02',
  templateUrl: './prduct-item02.component.html',
  styleUrls: ['./prduct-item02.component.css']
})

export class PrductItem02Component implements OnInit {
  company: any;

  constructor(private infoCompanyService:InfoCompanyService) { }

  ngOnInit(): void {
    this.infoCompanyService.getInfoCompany().subscribe(res => this.company = res)
  }

}
