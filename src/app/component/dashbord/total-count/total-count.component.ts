import { Component, OnInit } from '@angular/core';
import { BackendApiService} from '../../../services/backend-api.service'
@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.css']
})
export class TotalCountComponent implements OnInit {
  totalCases:number
  confirmedCases:number
  totaldeath:number
  totalRecovered:number
  currentDate =new Date();
  lastUpdated:Date;
  isLoading = false;

  constructor(private backendservice:BackendApiService) {}

  ngOnInit(): void {
    this.totalcases();
  }

  totalcases(){
    this.isLoading = true;
    this.backendservice.getSummary().subscribe(
      data => {
        this.isLoading = false;
        this.totalCases= data["Global"];
        this.confirmedCases=this.totalCases["TotalConfirmed"];
        this.totaldeath=this.totalCases["TotalDeaths"];
        this.totalRecovered=this.totalCases["TotalRecovered"];
        this.lastUpdated=data["Date"];
    })
  }
}
