import { Component, OnInit ,ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import * as elementResizeDetectorMaker from '.../../element-resize-detector';

// firebase firestore
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection} from 'angularfire2/firestore';
import { AuthService } from '../auth.service';


//
declare var $: any;

interface Sticky {
  sdata: string;
  top: string;
  left?: string;
  x?: string;
  y?: string;
}
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
  pText:string ;
   liveText:string = "li";
   userid: string ;

  constructor(private _cfr: ComponentFactoryResolver,
              private afs: AngularFirestore,
              private auth :AuthService)
              
            {

              this.auth.user
              .subscribe(user => {
                if (user) {
                  this.userid = user.uid;
                     }
              })
            }


  deleteSticky() {
    this._ref.destroy();
  }
  save() {
    alert('Saved Successfully!');
  }

  setss(event){
     //  this.ss = event.target.innerHTML;
  }
 

  ngOnInit() {
    console.log("h i from ngonit ");
    this.liveText = "abcd";
  }

  mouseUp(event){
   // this.color = event.target.style.backgroundColor;
    this._topLeft = {
      left: event.target.getBoundingClientRect().left + window.scrollX,
      top: event.target.getBoundingClientRect().top + window.scrollX,
    }

    const collection: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userid}/userData/sticky`);
    collection.update({
      "top": this._topLeft.top,
      "left": this._topLeft.left }
    )
    .then(function() {
      console.log("Document successfully updated!");
  });
    
  }

  textChanged(event){
    this.pText=event.target.innerHTML;
    const stickyRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userid}/userData/sticky`);
    
    

    stickyRef.update({
      "sdata": this.pText}
    )
    .then(function() {
      console.log("Document successfully updated!");
  });


  }

  ngAfterViewInit() {
    console.log(`style top  :  ${this._topLeft.top}`);
    console.log(`style left  :  ${this._topLeft.left}`);

   
    $(".head").draggable({
      start: (event, ui) => {

        //this.sticky = document.createElement("app-sticky-component");


        //     this.stickyCompo  = "<p>aaaaaaaaaaaa</p>";

      },
      opacity: 0.3,
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

setInputBehavior(){

  $('.paragraphClass').on('input', function() {
  /*  //   alert(this.value);
    console.log("iiiiiiinput:"+ this.id);
   // this.parentNode.append("<img src='Ripple.svg/>'");

    // var values = document.getElementById('#parag'+26).id;
    //  var values =  this.getAttribute('data-value');
    var id = this.id;
    var fatherID = this.parentNode.parentNode.parentNode;

/*
   // if ( $("#"+fatherID).children(".loading").length ) {}else{
       if (typing ) {

       } else{
           $("#"+fatherID.id).append("<img class ='loading' src='Cube.svg'/>");
    }
    typing=true;
    //  alert( fatherID.id);
    //  updateTyping(fatherID.id,  $(this).text());
    updateTyping(fatherID.id, $(this).html());*/
});
}
}