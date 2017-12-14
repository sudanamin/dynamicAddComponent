import { Component, OnInit ,ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import * as elementResizeDetectorMaker from '.../../element-resize-detector';

declare var $: any;
@Component({
  selector: 'app-exp',
  templateUrl: './exp-component.component.html',
  styleUrls: ['./exp-component.component.css']
})
export class ExpComponent {
  _ref: any;
  _top: string = "300";
  _StickyColorr: string;
  _topLeft: any;
  _container: ViewContainerRef;

  constructor(private _cfr: ComponentFactoryResolver ) { }


  deleteSticky() {
    this._ref.destroy();
  }
  save() {
    alert('Saved Successfully!');
  }

  ngOnInit() {
    console.log("h i from ngonit ")
  }

  ngAfterViewInit() {
    console.log(`style top  :  ${this._topLeft.top}`);
    console.log(`style left  :  ${this._topLeft.left}`);
    $(".head").draggable({
      start: (event, ui) => {

        //this.sticky = document.createElement("app-sticky-component");


        //     this.stickyCompo  = "<p>aaaaaaaaaaaa</p>";

      },
      opacity: 0.5,
      handle: ".spec",
      stack: ".head",
      distance: 0
    });

    let _elementResizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll'
    });

    _elementResizeDetector.listenTo(document.getElementsByClassName('sticker2'), function (element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      console.log("Size: " + width + "x" + height + "element id is " );
    })
  }

  addSticky(event){    
    var comp = this._cfr.resolveComponentFactory(ExpComponent);
    var expComponent = this._container.createComponent(comp);
  //  this.appRef.attachView(expComponent.hostView);
    expComponent.instance._ref = expComponent;
    expComponent.instance._StickyColorr = this._StickyColorr;

    var __topLeft = {
      left: event.target.getBoundingClientRect().left + window.scrollX +35,
      top: event.target.getBoundingClientRect().top + window.scrollX +35,
    }
    expComponent.instance._topLeft = __topLeft  ;


    expComponent.instance._container = this._container;
    

}
}