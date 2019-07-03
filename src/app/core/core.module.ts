import { NgModule ,SkipSelf ,Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatToolbarModule,MatIconModule,MatButtonModule}from "@angular/material"
import {SharedModule} from '../shared/shared.module';
import { MatSlideToggleModule } from "@angular/material";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http'
import {MatIconRegistry} from '@angular/material'
import {DomSanitizer} from '@angular/platform-browser'
import {loadSvgResources} from '../utils/svg.util';
import "hammerjs"
// core module在系统中只加载一次
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[
    HeaderComponent, FooterComponent, SidebarComponent,AppRoutingModule,BrowserAnimationsModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
  ir:MatIconRegistry,ds:DomSanitizer){
    if (parent) {
      throw new Error("模块已经存在，不能再次加载");

    }
    loadSvgResources(ir,ds)
  }
 }
