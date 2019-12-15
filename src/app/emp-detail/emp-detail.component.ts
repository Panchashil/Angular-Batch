import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees=[];
  constructor(private _emp:EmployeeService) { }

  ngOnInit() {
    // this.employees=this._emp.getEmployees();
    this._emp.getEmployees()
.subscribe(data=>this.employees=data);
  }

}
