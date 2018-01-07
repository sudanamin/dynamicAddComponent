import { Component, OnInit, HostBinding } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import { AuthService } from '../auth.service';
//import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // animations: [moveIn()],
 // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,private router: Router) {

     
   
  }
  

  ngOnInit() {
    if(this.auth.user ){
      this.router.navigate(['/members']);
    }
  }

  ngAfterViewInit() {
  //  document.querySelector('body').classList.add('blue');
    document.body.style.backgroundImage = "url(../../assets/stickies-background.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
 //   document.body.style.backgroundPosition = "center"; 

}
ngOnDestroy(): void {
    document.body.style.backgroundImage = "";
}

}
