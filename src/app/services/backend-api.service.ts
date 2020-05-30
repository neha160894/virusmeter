import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private subject = new BehaviorSubject('https://api.covid19api.com/summary');

 // url="https://api.covid19api.com/summary";
  storedUrl = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  getSummary() {
    //this.storedUrl = this.subject.asObservable();
    return this.storedUrl;
  }

  
  // getSummary(){
  //  return this.http.get(this.url);
  // }

}
