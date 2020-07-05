import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
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
  complaint: any[];
  chartdate = [];
   active= [];
   id: any;
  constructor(private backendservice: BackendApiService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
                private router: Router,
                ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initializeItems();
  }

  initializeItems() {

    this.backendservice.getIndiaInfo().subscribe((data: any) => {
      this.complaint = data;
    let a;
   
    for(a in this.complaint){
      this.active.push(this.complaint[a].Active)
      this.chartdate.push((this.datePipe.transform(this.complaint[a].Date,'yyyy-dd-MM')))
    }
      this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels:  this.chartdate, 
     datasets: [{
            label: 'Active Cases',
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
          text: 'Covid-19 Chart ',
          position: 'top',
          fontSize: 20,
          padding: 20,
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
