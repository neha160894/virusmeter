import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../../services/backend-api.service'
import { Chart } from 'chart.js';
@Component({
  selector: 'app-covid-graph',
  templateUrl: './covid-graph.component.html',
  styleUrls: ['./covid-graph.component.css']
})
export class CovidGraphComponent implements OnInit {
  graphData: any = {
    totalcasesCount: 0,
    totaldeathCount: 0,
    totalrecoveredCount: 0
  };
  totalCases: any;
  confirmedCases: any;
  totaldeath: any;
  totalRecovered: any;
  newConfirmed: any;
  newDeaths: any;
  newRecovered: any;
  chart:[];
  countData:any={
    confirm:0,
    death:0,
    recover:0
  };
  constructor(private backend: BackendApiService) { }

  ngOnInit(): void {
    this.allcountData();
    // this.chartData();
  }

  allcountData() {
    this.backend.getSummary().subscribe(
      data => {
        this.totalCases = data["Global"]
        this.confirmedCases = this.totalCases["TotalConfirmed"];
        console.log("Total confirmedCases",this.confirmedCases)
        this.totaldeath = this.totalCases["TotalDeaths"]
        console.log("Total Deaths",this.totaldeath)
        this.totalRecovered = this.totalCases["TotalRecovered"]
        console.log("Total Recovered",this.totalRecovered)
        this.newConfirmed=this.totalCases["NewConfirmed"]
        console.log("new Confirmed:",this.newConfirmed)
        this.newDeaths=this.totalCases["NewDeaths"]
        console.log("new Deaths:",this.newDeaths)
        this.newRecovered=this.totalCases["NewRecovered"]
        console.log("new Recovered:",this.newRecovered)
      })
  // }
    // chartData(){
      this.chart=new Chart('canvas',{
        type:'pie',
        data:{
          labels:[" Total Confirmed "," Total Deaths","TotalRecovered"],
          datasets:[
          {
            data:[this.confirmedCases,this.totaldeath,this.totalRecovered],
                     borderColor: 'yellow',  
                  backgroundColor: [  
                    "Orange",  
                    "red",  
                    "green",  
                  ],
                  fill :true
          }
          ]
        },
        options:{
          legend:{
            display:true,
            position:'right'
          },
          title: {
            display: true,
            text: 'Total Cases  ',
            position:'bottom',
            fontSize:20,
            padding:20,
            fontStyle:'bold'
        }
        },
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      })
    }
}
