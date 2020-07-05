import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Chart } from 'chart.js';
declare var $: any;
@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
<<<<<<< HEAD
    styleUrls:['./country-detail.component.css']
=======
    providers: [DatePipe]

>>>>>>> 56048f6060f642cc854088804a488ea3e68b26bb
})

export class CountryDetailComponent implements OnInit {
    list:any;
    id: any;
    totalList: any;
<<<<<<< HEAD
    isLoading = false;
=======
    
  chart: [];
  complaint: any[];
  chartdate = [];
   active= [];
   
>>>>>>> 56048f6060f642cc854088804a488ea3e68b26bb

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: BackendApiService,
                private backendservice: BackendApiService,
              private datePipe: DatePipe,
              ) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.getDetail();
        this.initializeItems();
    }

    getDetail() {
        this.isLoading = true;
        this.service.getDetail(this.id).subscribe(data => {    
            this.isLoading = false;
            this.list = data;
            this.totalList = this.list.slice(-1).pop();
        });
    }


    onBack(): void {
        this.router.navigate(['']);
    }
    initializeItems() {
  
        this.service.getDetail(this.id).subscribe((data: any) => {
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
  
   
  openModal(){
    $("#customerModal").modal('show');
  }
}