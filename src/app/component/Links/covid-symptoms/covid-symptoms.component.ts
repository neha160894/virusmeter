import { Component, OnInit } from '@angular/core';
import{Router} from'@angular/router'
@Component({
  selector: 'app-covid-symptoms',
  templateUrl: './covid-symptoms.component.html',
  styleUrls: ['./covid-symptoms.component.css']
})
export class CovidSymptomsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onActivate(event) {
    window.scroll(0,0);
}
onBack(): void {
  this.router.navigate(['']);
}
}
