import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {y
  welcome:string="Welcome to Angular";
  constructor() { }

  click(){
    alert("Bye bye");
  }

  


  ngOnInit() {
      
  }

}
