import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {
  currentDate = new Date();
  
  constructor(private router: Router) {
 
   }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['']);
}
}
