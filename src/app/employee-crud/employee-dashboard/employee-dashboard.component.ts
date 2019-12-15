import { Component, OnInit } from '@angular/core';
import { EmployeeCrudService } from 'src/app/shared/service/employee-crud.service';
import { Employee } from 'src/app/shared/classes/employee';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  employees: Employee[] = [];
  searchKey: any = "";
  p: number = 1;
  itemsCount:number = 3;
  constructor(private empService: EmployeeCrudService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.empService.getEmployees()
      .subscribe(res => {
        this.employees = res;
      });
  }

  deleteEmp(id: number) {
    if (confirm('Are you sure to delete this employee?')) {
      this.empService.deleteEmployee(id)
        .subscribe(() => {
          this.fetchEmployees();
        })
    }
  }

}
