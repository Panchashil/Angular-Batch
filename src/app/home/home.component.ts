import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

     imgName:string;
   imgPath:string;
   toggle:boolean = false;
   order:string;
   
   constructor() { }

    ngOnInit() {
    this.imgName = "Koala";
     this.imgPath = "../../assets/images/Koala.jpg";
    this.order = "Empty";
  }

  changeImage(){
    this.toggle = !this.toggle;
    // console.log(this.toggle);
    if(this.toggle){
      this.imgName = "Penguins";
      this.imgPath = "../../assets/images/Penguins.jpg";
    }
    else{
      this.imgName = "Koala";
      this.imgPath = "../../assets/images/Koala.jpg";
    }
  }

 

}
