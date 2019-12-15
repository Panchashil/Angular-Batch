import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeCrudService } from 'src/app/shared/service/employee-crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/classes/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id:number;
  empObj:Employee;
  constructor(private empService:EmployeeCrudService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe(
        params => {
          this.id = parseInt(params.get('id'));
          // console.log(this.id);
        }
      );
      this.empService.getSingleEmployee(this.id)
        .subscribe( res => {
          this.empObj = res;
        })
  }

  editEmployee(employee:Employee){
    let empObj = {
      id:this.id,
      empName:employee.empName,
      empPost:employee.empPost,
      empSalary:employee.empSalary
    }
    this.empService.editEmployee(empObj)
      .subscribe( () => {
        alert('Updated Successfully');
        this.router.navigate(['/employee-crud']);
      })
  }

}
