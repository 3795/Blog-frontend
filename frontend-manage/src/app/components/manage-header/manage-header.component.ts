import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-header',
  templateUrl: './manage-header.component.html',
  styleUrls: ['./manage-header.component.css']
})
export class ManageHeaderComponent implements OnInit {

  public avatar: string;
  public username: string;

  private url: string = "/user";

  constructor(private httpService: HttpService,
              private messageService: NzMessageService,
              private router: Router,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.httpService.get(this.url + "/brief")
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
        this.httpService.get(this.url + "/logout")
          .subscribe((data) => {
            if (data.code%2) {
              this.messageService.create('success', data.msg);
              this.router.navigateByUrl("/login");
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
