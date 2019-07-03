import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
items = [
  {
    id:1,
    name:"jiaxiaole"
  },
  {
    id:2,
    name:"jiaxiaole2"
  },
  {
    id:3,
    name:"jiaxiaole3"
  },
]
  constructor() { }

  ngOnInit() {
  }
  displayUser(user:{id:String;name:String}){
    return user? user.name:""
  }

}
// export interface User{
//   id:String;name:String
// }
