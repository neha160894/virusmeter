import { Component, OnInit, Input } from '@angular/core';

import { BackendApiService } from '../../services/backend-api.service';

@Component({
    selector: 'app-view-countries-count',
    templateUrl: './view-countries-count.html',
    styleUrls: ['./view-countries-count.css']
})

export class ViewCountriesCount implements OnInit {
    pageTitle = 'List of Countries';
    countryList: any[];
    searchText: string;
    totalCases: number;
    totalConfirmed: number;
    totalDeaths: number;
    totalRecovered: number;
    newConfirmed: number;
    newDeaths:number;
    newRecovered: number;

    constructor(private service: BackendApiService) {}

  
    ngOnInit() {    
        this.getList(); 
        
    }

    getList() {
        this.service.getSummary().subscribe((data) => {
        this.totalCases = data['Global'];
        let result = data['Countries'];
            this.newConfirmed = this.totalCases["NewConfirmed"];
            this.totalConfirmed=this.totalCases["TotalConfirmed"];
            this.newDeaths=this.totalCases["NewDeaths"];
            this.totalDeaths=this.totalCases["TotalDeaths"];
            this.totalRecovered=this.totalCases["TotalRecovered"];
            this.newRecovered=this.totalCases["NewRecovered"]
        this.countryList = result.filter((el:any) => {
            return el;
        });
        this.countryList = this.countryList.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed) ? -1 : 1)
        
      })
    }
}
    

