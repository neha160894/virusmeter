import { Component, OnInit } from '@angular/core';

import { BackendApiService } from '../../services/backend-api.service';
import { TotalCountComponent } from '../dashbord/total-count/total-count.component';
import { CompileMetadataResolver } from '@angular/compiler';

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

    constructor(private countries: BackendApiService) {}

    ngOnInit() {    
        this.getList(); 
        $(function() {
            (<any>$("#table")).tablesorter();
          });
    }

    getList() {
        this.countries.getSummary().subscribe((data) => {
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

    sortTable(){
    //     if(this.countryList != null) {
    //         this.countryList.sort((a, b)=> {
    //             if(a === '' || a === null || typeof a === undefined) {
    //                 return 1;
    //             }
    //             if(b === '' || b === null || typeof b === undefined) {
    //                 return -1;
    //             }
    //             if(a<b) {
    //                 return -1;
    //             }
    //             else if (a>b) {
    //                 return 1;
    //             }
    //             else {
    //                 return 0;
    //             }
        
        
        
    //     });
    // 
    //this.countryList.sort((a,b) => {
    //     return -1;
    // })
    this.countryList.sort((a, b) => {
        if(a.TotalConfirmed > b.TotalConfirmed) {
            return -1;
        }
    })
    }
  
}
    

