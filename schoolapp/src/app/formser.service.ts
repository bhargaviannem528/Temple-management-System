import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormserService {

  constructor(private http:HttpClient) { }
  public reg(user:any):Observable<any>{
    console.log(user)
    return this.http.post("http://localhost:5000/registerapi",user)
    
  }
}
