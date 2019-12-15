import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../test1';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-urf',
  templateUrl: './register-urf.component.html',
  styleUrls: ['./register-urf.component.css']
})
export class RegisterUrfComponent implements OnInit {

  // data:Test[] = [];
  // headers = new HttpHeaders({
  //   "Content-Type": "application/json,charset=utf-8",
  //   "access-control-allow-origin": "*",
  //   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  //   "access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"

  //  });
  constructor(private http:HttpClient) { }

  userForm:FormGroup = new FormGroup({
    uname:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
    uemail:new FormControl(null),
    ucontact:new FormControl(null)
  })

  register(){
    console.log(this.userForm.value);
  }
  ngOnInit() {
    // this.fetchData()
  }

  // fetchData(){
  //   this.http.get<Test[]>('http://localhost/anmol/users',{headers:this.headers})
  //   .subscribe(
  //     res => {
  //       this.data = res['data'];
  //       console.log(this.data);
  //     }
  //   )
  // }

}
