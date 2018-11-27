import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {Router} from "@angular/router";

@Component({
  selector: 'app-backend-header',
  templateUrl: './backend-header.component.html',
  styleUrls: ['./backend-header.component.css']
})
export class BackendHeaderComponent implements OnInit {

  public avatar: string;
  public username: string;

  private url: string = "/user";

  constructor(private backendService: BackendService,
              private messageService: NzMessageService,
              private router: Router,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.backendService.get(this.url + "/brief")
      .subscribe((data) => {
        if (data.code%2) {
          this.avatar = data.data['avatar'];
          this.username = data.data['username'];
        } else {
          this.messageService.create('error', data.msg);
        }
      });
  }

  logout(): void {
    this.modalService.confirm({
      nzTitle     : '是否退出登录?',
      nzOkText    : '退出',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        this.backendService.get(this.url + "/logout")
          .subscribe((data) => {
            if (data.code%2) {
              this.messageService.create('success', data.msg);
              this.router.navigateByUrl("/manage/login");
            } else {
              this.messageService.create('error', data.msg);
            }
          });
      },
      nzCancelText: '取消',
      nzOnCancel  : () => {}
    });
  }

}
