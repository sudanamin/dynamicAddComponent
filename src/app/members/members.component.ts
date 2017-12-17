import {Component, ApplicationRef} from '@angular/core';
declare var $: any;

import { 
         OnInit, 
         ViewChild, 
         ComponentFactoryResolver,
         ViewContainerRef } from '@angular/core';
         
         import { ExpComponent } from '../exp-component/exp-component.component';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  topLeft: any;
  
    @ViewChild('parent', { read: ViewContainerRef })
     container: ViewContainerRef;
  
     color : string;
  
     constructor(private _cfr: ComponentFactoryResolver ,
     public auth :AuthService
     ) { }


     ngOnInit(){ }
  
    /* setColor(event){
     // console.log("click event occur");
    //  console.log(this.color);
      
     }*/
     mouseUp(event){
      this.color = event.target.style.backgroundColor;
      this.topLeft = {
        left: event.target.getBoundingClientRect().left + window.scrollX,
        top: event.target.getBoundingClientRect().top + window.scrollX,
      }
  
       this.addComponent() ; 
  
    //   console.log("mouse up up up ");
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
         opacity: 0.7,
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
        expComponent.instance._topLeft = this.topLeft;
        expComponent.instance._container = this.container;
        
  
    }
  
    /* getOffset(el) {
      el = el.getBoundingClientRect();
      return {
          left: el.left + window.scrollX,
          top: el.top + window.scrollY
        }*/
  }
  