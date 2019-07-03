import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CoreModule } from "./core/core.module";
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule} from './login/login.module'
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MatSidenavModule,
    // AppRoutingModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    // BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
