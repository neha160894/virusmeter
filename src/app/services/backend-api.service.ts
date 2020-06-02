import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  //private subject = new Subject<any>();

  url="https://api.covid19api.com/summary";
  //storedUrl = this.subject.asObservable();
  countryList:any;
  totalCases: number;
    totalConfirmed: number;
    totalDeaths: number;
    totalRecovered: number;
    newConfirmed: number;
    newDeaths:number;
    newRecovered: number;

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(this.url);
  }

  // getSummary() {
  //   this.storedUrl = this.subject.asObservable();
  //   return this.storedUrl;
  // }

  }