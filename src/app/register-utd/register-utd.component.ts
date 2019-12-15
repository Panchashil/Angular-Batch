import { Component, OnInit } from '@angular/core';
import { User } from './User';


@Component({
  selector: 'app-register-utd',
  templateUrl: './register-utd.component.html',
  styleUrls: ['./register-utd.component.css']
})
export class RegisterUtdComponent implements OnInit {

  user:User;
  gender:string[];
  constructor() { }

  ngOnInit() {
    this.gender = ['male','female','transgender'];
    this.user = new User({uname:'',password:{pwd:'',cpwd:''},gender:this.gender[1],terms:true});
  }

  register(frm:User){
    this.user = frm;
    console.log(this.user);
  }

}
