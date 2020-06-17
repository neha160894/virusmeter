import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError,retry,shareReplay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

private url="https://api.covid19api.com/summary";
private url2 = "https://api.covid19api.com/dayone/country/";
  

constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(this.url).pipe(
      retry(3),
      shareReplay()
    )
  }

  getDetail(id: string) {
    return this.http.get(this.url2 + id);
  }
  
  url1="https://api.covid19api.com/dayone/country/india"
  getIndiaInfo()
  {
    return this.http.get(this.url1)
  }

  }