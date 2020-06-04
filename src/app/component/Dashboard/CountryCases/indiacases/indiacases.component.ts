import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../../../services/backend-api.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-indiacases',
  templateUrl: './indiacases.component.html',
  styleUrls: ['./indiacases.component.css'],

  providers: [DatePipe]
})
export class IndiacasesComponent implements OnInit {
  totalCases: number;
  confirmedCases: number;
  totaldeath: number;
  totalRecovered: number;
  complaint: any[];
  today = new Date()
  date = new Date(this.datePipe.transform(this.today.setDate(this.today.getDate() - 1), "yyyy-MM-dd")).toISOString()

  selectedData;

  constructor(private backendservice: BackendApiService,
    private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    console.log();
    this.initializeItems()


  }

  initializeItems() {
    this.backendservice.getIndiaInfo().subscribe((result: any) => {
      this.complaint = result;

      // console.log(this.complaint)
      this.selectedData = this.complaint.filter((el) => {
        return new Date(el.Date).toISOString() === this.date
      })
      // console.log(this.selectedData)
    })
  }



}
