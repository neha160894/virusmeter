import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  url="https://api.covid19api.com/summary";
  constructor(private http: HttpClient) { }
  getSummary(){
   return this.http.get(this.url);
  }
  
  url1="https://api.covid19api.com/dayone/country/india"
  getIndiaInfo()
  {
    return this.http.get(this.url1)
  }

}
