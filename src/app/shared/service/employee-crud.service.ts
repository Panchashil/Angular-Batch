import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  baseURL: string = "http://localhost:8888/employees"; 

  constructor(private _http: HttpClient) { }

  getEmployees() {
    return this._http.get<Employee[]>(this.baseURL);
  }

  getSingleEmployee(id:number){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.get<Employee>(apiURL);
  }

  addEmployee(employee: Employee) {
    return this._http.post(this.baseURL, employee);
  }

  editEmployee(employee: Employee) {
    const apiURL = `${this.baseURL}/${employee.id}`;
    return this._http.put(apiURL, employee);
  }

  deleteEmployee(id: number) {
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.delete(apiURL);
  }
}
