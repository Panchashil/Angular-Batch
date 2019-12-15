import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeCrudService } from 'src/app/shared/service/employee-crud.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/classes/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empService:EmployeeCrudService,private router:Router) { }

  @ViewChild('frm') myForm:NgForm;
  ngOnInit() {
  }

  addEmployee(employee:Employee){
    let empObj = {
      empName:employee.empName,
      empPost:employee.empPost,
      empSalary:employee.empSalary
    }
    this.empService.addEmployee(empObj)
      .subscribe( () => {
        alert('Add Successfully');
        this.myForm.reset();
        this.router.navigate(['/employee-crud']);
      })
  }
}
