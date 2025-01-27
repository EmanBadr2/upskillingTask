import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

Observable
@Injectable({
  providedIn: 'root'
})
export class RegistService {
  constructor(private _HttpClient:HttpClient) { }

  handelRegister(userData:any):Observable<any> {
    return this._HttpClient.post('http://upskilling-egypt.com:3001/contact' , userData )
  }

}
