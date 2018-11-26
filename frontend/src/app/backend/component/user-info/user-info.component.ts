import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public account: string;
  public username: string;
  public avatar: string;
  public createTime: string;

  private url: string = "/user";

  constructor(private backendService: BackendService,
              private messageService: NzMessageService) { }

  ngOnInit() {
    this.backendService.get(this.url + "/detail")
      .subscribe((data) => {
        if (data.code%2) {
          this.account = data.data['account'];
          this.username = data.data['username'];
          this.avatar = data.data['avatar'];
          this.createTime = data.data['createTime'];
        } else {
          this.messageService.create('error', data.msg);
        }
      });
  }

}
