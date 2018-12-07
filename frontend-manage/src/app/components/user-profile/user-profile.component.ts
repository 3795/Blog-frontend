import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public account: string;
  public username: string;
  public avatar: string;
  public createTime: string;

  private url: string = "/user";

  constructor(private httpService: HttpService,
              private messageService: NzMessageService) { }

  ngOnInit() {
    this. httpService.get(this.url + "/detail")
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
