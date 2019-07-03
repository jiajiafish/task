import { Component, OnInit ,HostBinding} from '@angular/core';
// import { TaskListComponent } from '../task-list/task-list.component';
import { MatDialog } from "@angular/material";
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from "../../anims/router.anim";
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一：去星巴克买咖啡。hhaha",
          completed:true,
          priority:3,
          owner: {
            id: 1,
            name: "张三",
            avatar: "avatars:svg-11"
          },
          dueDate: new Date(),
          reminder:new Date()
        },
        {
          id: 2,
          desc: "任务二：去星巴克买的咖啡。",
          completed:false,
          priority:2,
          owner: {
            id: 2,
            name: "李四",
            avatar: "avatars:svg-3"
          },
          dueDate: new Date()
        },
        {
          id: 3,
          desc: "任务三：去星巴克买咖啡。",
          completed:false,
          priority:1,
          owner: {
            id: 1,
            name: "王五",
            avatar: "avatars:svg-1"
          },
          dueDate: new Date()
        },
      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          desc: "任务一：去星巴克买咖啡。",
          completed:false,
          priority:3,
          owner: {
            id: 1,
            name: "张三",
            avatar: "avatars:svg-11"
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: "任务二：去星巴克买的咖啡。",
          completed:false,
          priority:1,
          owner: {
            id: 2,
            name: "李四",
            avatar: "avatars:svg-3"
          },
          dueDate: new Date()
        }, {
          id: 3,
          desc: "任务三：去星巴克买咖啡。",
          completed:false,
          priority:2,
          owner: {
            id: 1,
            name: "王五",
            avatar: "avatars:svg-1"
          },
          dueDate: new Date()
        },
      ]
    }
  ]
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  launchNewTaskDialog(){
    this.dialog.open(NewTaskComponent,{
      data:{
        title:"新建任务",
      }
    });
  }
  launchCopyTaskDialog(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{
      data:{
        lists:this.lists
      }
    })
  }
  launchUpdateTaskDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent,{
      data:{
        title:"修改任务",
        task
      }
    })
  }
  launchConfirmDialog(){
    const dialogRef =
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title:"删除任务列表",
        content:"您确认删除该任务列表吗？"
      }
    })
    dialogRef.afterClosed().subscribe(result=>console.log(result))
  }
  launchEditListDialog(){
    const dialogRef =
    this.dialog.open(NewTaskListComponent, {
      data: {
        title:"更改列表名称",
      }
    })
    dialogRef.afterClosed().subscribe(result=>console.log(result))
  }
  launchNewListDialog(){
    const dialogRef =
    this.dialog.open(NewTaskListComponent, {
      data: {
        title:"新建列表名称",
      }
    })
    dialogRef.afterClosed().subscribe(result=>console.log(result))
  }
}
