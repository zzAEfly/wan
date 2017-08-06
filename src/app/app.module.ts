import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

//import {MaterialModule} from '@angular/material'; //引入 angular material2所有模块

// import {MdButtonModule,MdCheckboxModule} from '@angular/material';//引入需要使用的模块


//创建单独的NgModule模块引入需要使用的模块，方便在任意地方使用组件
// @NgModule({
//   imports:[MdButtonModule,MdCheckboxModule],
//   exports:[MdButtonModule,MdCheckboxModule],
// })
// export class MyOwnCustomMaterialModule{ }  /*********/

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
