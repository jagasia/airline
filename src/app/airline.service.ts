import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  //reactive extension to js

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  url:string='https://api.instantwebtools.net/v1/airlines';
  constructor(private http:HttpClient) { }

  getAllAirlines():Observable<Object>
  {
    return this.http.get(this.url);
  }

  findAirlineById(id:number)
  {
    return this.http.get(this.url+"/"+id);
  }

  addAirline(airline:any)
  {
    return this.http.post(this.url,airline);
  }
}
