import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private _url:string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>{
    // return [
    //   {"id":1,"name":"Panchashil","age":27},
    //   {"id":2,"name":"Anmol","age":25},
    //   {"id":3,"name":"Rupesh","age":23},
    //   {"id":4,"name":"Balu","age":26},
    // ];
    return this.http.get<IEmployee[]>(this._url);
  }
}
