import {Component, ApplicationRef} from '@angular/core';
declare var $: any;

import { 
         OnInit, 
         ViewChild, 
         ComponentFactoryResolver,
         ViewContainerRef } from '@angular/core';
         
         import { ExpComponent } from './exp-component/exp-component.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  @ViewChild('parent', { read: ViewContainerRef })
   container: ViewContainerRef;

   color : string;

   constructor(private _cfr: ComponentFactoryResolver , private appRef: ApplicationRef) { }
   ngOnInit(){ }

   setColor(event){
    console.log("click event occur");
    console.log(this.color);
    
   }
   mouseUp(event){
    this.color = event.target.style.backgroundColor;
     this.addComponent() ; 
     console.log("mouse up up up ");
    }
   ngAfterViewInit() {
     $(".sticker").draggable({
       start: (event, ui) => {
       //var StickyColor = $(this.).css("background-color");
       // console.log("hi from members mmmmmmmmmmmmmmm"+ this.StickyColor);
    //   this.addComponent() ;
       // this.createSticky(this.StickyColor) ;
       },
       revert: true,
       opacity: 0.5,
       revertDuration: 330,
       //    stack: ".head",
       distance: 0,
       // appentTo :
     });
    }

  addComponent(){    
      var comp = this._cfr.resolveComponentFactory(ExpComponent);
      var expComponent = this.container.createComponent(comp);
    //  this.appRef.attachView(expComponent.hostView);
      expComponent.instance._ref = expComponent;
      expComponent.instance._StickyColorr = this.color;
  }
}
