import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiryform } from '../model/enquiryform';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  getdata():Observable<Enquiryform[]>
  {
    return this.http.get<Enquiryform[]>("http://localhost:8081/getalldata");
  }

  update(b:Enquiryform):Observable<Enquiryform>
  {
    return this.http.put<Enquiryform>("http://localhost:8081/update",b);
  }
}
