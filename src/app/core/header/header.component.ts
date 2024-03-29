import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<Boolean>()
  constructor() {

  }

  ngOnInit() {
  }
  openSidebar(){
    this.toggle.emit();
  }
  onChange(checked:boolean){
    this.toggleDarkTheme.emit(checked)
  }
}
