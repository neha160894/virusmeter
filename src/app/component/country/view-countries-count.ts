import { Component, OnInit } from '@angular/core';

import { BackendApiService } from '../../services/backend-api.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
    selector: 'app-view-countries-count',
    templateUrl: './view-countries-count.html',
    styleUrls: ['./view-countries-count.css']
})

export class ViewCountriesCount implements OnInit {
    pageTitle = 'List of Countries';
    countryList: [];
    searchText: string;
    totalCases: number;
    totalConfirmed: number;
    totalDeaths: number;
    totalRecovered: number;
    newConfirmed: number;
    newDeaths:number;
    newRecovered: number;

    constructor(private countries: BackendApiService) {
                    
                }
    ngOnInit() {    
        this.getCountryList();
        this.getGlobalList();

        // $(document).ready(function() {
        //     $('#table').DataTable();
        // } );
    }

    getCountryList() {
        this.countries.getSummary().subscribe((data) => {
            let result = data['Countries'];
            this.countryList = result.filter((el:any) => {
                return el;
            })
        })
    }

    getGlobalList() {
        this.countries.getSummary().subscribe((data) => {
            this.totalCases= data["Global"];
            this.newConfirmed = this.totalCases["NewConfirmed"];
            this.totalConfirmed=this.totalCases["TotalConfirmed"];
            this.newDeaths=this.totalCases["NewDeaths"];
            this.totalDeaths=this.totalCases["TotalDeaths"];
            this.totalRecovered=this.totalCases["TotalRecovered"];
            this.newRecovered=this.totalCases["NewRecovered"]
        })
    }

    ascNumberSort = true;
    TotalConfirmed;
    sortNumberColumn() {
    this.ascNumberSort = !this.ascNumberSort;
    if(this.ascNumberSort) {
        this.TotalConfirmed.sort((a, b) => a - b); // For ascending sort
    } else {
        this.TotalConfirmed.sort((a, b) => b - a); // For descending sort
    }
}

}