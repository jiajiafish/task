import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
// import { MatGridListModule } from "@angular/material";
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from "./login-routing.module";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    // MatGridListModule
  ]
})
export class LoginModule { }
