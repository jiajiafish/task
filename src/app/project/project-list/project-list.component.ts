import { Component, OnInit, HostBinding, } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from "../../anims/router.anim";
import { listAnimation } from "../../anims/list.anim";
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnimation
  ]
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  projects = [
    {
      "id": 1,
      "name": "企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/covers/0.jpg"

    },
    {
      "id": 2,
      "name": "自动化测试项目",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/covers/1.jpg"
    }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef =
      this.dialog.open(NewProjectComponent, {
        // width:"100px",
        // height:"100px"
        // position:{
        //   left:"200px",
        //   top:"200px"
        // }
        data: {
          title: "新增项目"
        }
      })
    dialogRef.afterClosed().subscribe(result =>{
      this.projects = [...this.projects, {
        id: 3, name: '一个新的项目', "desc": "这是一个企业内部项目",
        "coverImg": "assets/covers/7.jpg"
      },
      {
        id: 4, name: '一个新的项目', "desc": "这是一个企业内部项目",
        "coverImg": "assets/covers/8.jpg"
      },
      {
        id: 5, name: '一个新的项目', "desc": "这是一个企业内部项目",
        "coverImg": "assets/covers/9.jpg"
      }]
    })

  }
  launchInviteDialog() {
    const dialogRef =
      this.dialog.open(InviteComponent)
  }
  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        title: "编辑项目"
      }
    })
  }
  launchConfirmDialog(project) {
    const dialogRef =
      this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: "删除项目",
          content: "您确认删除该项目吗？"
        }
      })
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p=>p.id!==project.id)
    })
  }
}
