import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { BackendApiService } from '../../../services/backend-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reuseablechart',
  templateUrl: './reuseablechart.component.html',
  styleUrls: ['./reuseablechart.component.css'],
    providers: [DatePipe]
})
export class ReuseablechartComponent  {

  chart: [];
  totalCases: number;
  confirmedCases: number;
  totaldeath: number;
  totalRecovered: number;
  complaint: any[];
  chartdate = [];
   active= [];
  today = new Date();
  date = new Date(this.datePipe.transform(this.today.setDate(this.today.getDate() - 1), 'yyyy-MM-dd')).toISOString();

  selectedData;
  constructor(private backendservice: BackendApiService,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    console.log();
    this.initializeItems();
  }

  initializeItems() {

    this.backendservice.getIndiaInfo().subscribe((data: any) => {
      this.complaint = data;
    let a;
   
    for(a in this.complaint){
      this.active.push(this.complaint[a].Active)
      this.chartdate.push(this.complaint[a].Date)
    
    }
    console.log(this.chartdate);
    console.log(this.active);
    let x= this.chartdate
    let y=this.active
      this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels:this.chartdate, 
     datasets: [{
            label: 'Today Active Cases',
            borderColor: 'rgb(255, 99, 132)',
            data: this.active
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'right'
        },
        title: {
          display: true,
          text: 'Custom Chart ',
          position: 'top',
          fontSize: 10,
          padding: 10,
          fontStyle: 'bold'
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
    });


    });
  }
}
