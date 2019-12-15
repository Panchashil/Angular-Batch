import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


  cars: string[] = ["Honda", "Toyota", "Jaguar", "Tata"];
  bikes: string[] = ["Suzuki", "Bajaj", "Honda", "Tvs"];
  priceList: number[] = [20000, 50000, 80000, 30000, 120000, 95000, 65000, 55000];
num:number[]=[1,2,3,4,5,6,7,8,9,10];

  students: object[] = [
    { id: 1, name: "Suraj", course: "Angular" },
    { id: 2, name: "Akash", course: "FullStack" },
    { id: 3, name: "Mayur", course: "Java" },
    { id: 4, name: "Rahul", course: "Testing" }
  ];

  isCars: boolean = true;
  choice: string = "";
  myClass: string;
  myStyle: object;
  isStyle: boolean = true;
  democond:boolean=true;
  choice1: string = "";
  item:string = "";
  n:any;
  constructor(private route:ActivatedRoute) { }
  

  ngOnInit() {
    console.log(this.displayCars());
    this.myClass = "success";
    this.myStyle = {
      color: 'green',
      fontSize: '16px',
      fontWeight: '500'
    }
    this.route.paramMap.subscribe(
      param => {
        this.item = param.get('item');
      }
    )
    if(this.item){
      this.choice = this.item;
    }
    else{
      this.choice = "";
    }
  }

  displayCars() {
    this.isCars = true;
  }
  displayBikes() {
    this.isCars = false;
  }

  getItem(item: string) {
    this.choice = item;
  }
  changeClass() {
    if (this.myClass == 'success') {
      this.myClass = 'danger';
    } else {
      this.myClass = 'success';
    }
  }
  changeStyle() {
    this.isStyle = !this.isStyle;
    this.myStyle = {
      color:this.isStyle ? 'green' : 'red',
      fontSize:this.isStyle ? '16px' : '12px',
      fontWeight:this.isStyle ? '500' : '400'
    }
    // if (this.isStyle) {
    //   this.myStyle = {
    //     color: 'green',
    //     fontSize: '16px',
    //     fontWeight: '500'
    //   }
    // }
    // else {
    //   this.myStyle = {
    //     color: 'red',
    //     fontSize: '16px',
    //     fontWeight: '500'
    //   }
    // }
  }
  getCars(item1:string)
  {
    this.choice1=item1;
  }
 
  even = this.num.filter(
    this.n= ()=>{
       return this.n%2==0;
        }
  )
}
