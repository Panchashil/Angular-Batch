import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {


  public employees=[];
  constructor( private _emp:EmployeeService) { }

  ngOnInit() {
    this._emp.getEmployees().subscribe(
      (res) => {
        this.employees = res;
      }
    );
  }

}
