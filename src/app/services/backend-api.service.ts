import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,EMPTY, Observable, Subject } from 'rxjs';
import {catchError,retry,shareReplay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  //private subject = new Subject<any>();

 private url="https://api.covid19api.com/summary";
 private url2 = "https://api.covid19api.com/dayone/country/";
  //storedUrl = this.subject.asObservable();
  

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(this.url).pipe(
      retry(3),
      shareReplay()
    )
  }

  // getSummary() {
  //   this.storedUrl = this.subject.asObservable();
  //   return this.storedUrl;
  // }
  getDetail(id: string) {
    return this.http.get(this.url2 + id);
  }
  
  url1="https://api.covid19api.com/dayone/country/india"
  getIndiaInfo()
  {
    return this.http.get(this.url1)
  }

  }