import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp-component.component.html',
  styleUrls: ['./exp-component.component.css']
})
export class ExpComponent {
  _ref:any;   
  _StickyColorr:string ;
  removeObject(){
    this._ref.destroy();
  }   
  save(){
    alert('Saved Successfully!');
  }

  ngOnInit() {
       console.log("h i from ngonit ")
  }
}