import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations:[
  //   trigger(
  //     'square',[
  //       state('green',style({'background-color':'green'})),
  //       state('red',style({'background-color':'red'})),
  //       transition("green=>red",animate(200)),
  //       transition("red=>green",animate(1000)),

  //     ]
  //   )
  // ]
})
export class AppComponent {
  darkTheme = false;
  squareState:String;
  switchTheme(dark){
    this.darkTheme = dark;
  }
  // onClick(){
  //   this.squareState = this.squareState==='red' ? 'green' : 'red'
  // }
}
