import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  //private subject = new Subject<any>();

  url="https://api.covid19api.com/summary";
  url2 = "https://api.covid19api.com/dayone/country/";
  //storedUrl = this.subject.asObservable();
  

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(this.url);
  }

  // getSummary() {
  //   this.storedUrl = this.subject.asObservable();
  //   return this.storedUrl;
  // }
  getDetail(id: string) {
    return this.http.get(this.url2 + id);
  }

  }