import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

    title="This is Angular Tutorial";
   mycar:object={
        name:'BMW',
        model:123
   }
   date=new Date();
  num:number[]=[11,18,12,13,15];

  constructor() { }

  ngOnInit() {
  }

}
