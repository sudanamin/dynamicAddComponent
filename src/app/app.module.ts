import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExpComponent } from './exp-component/exp-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExpComponent]
})
export class AppModule { }
