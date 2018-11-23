import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public account: string;

  public password: string;

  public captchaCode: string;


  constructor(private message: NzMessageService,
              private backendService: BackendService,
              private router: Router) { }

  ngOnInit() {
  }

  /**
   * 用户登录
   */
  public login(): void {

    let requestBody = "account=" + this.account + "&password=" + this.password + "&captchaCode=" + this.captchaCode;
    this.backendService.post("/login", requestBody)
      .subscribe((data) => {
        if (data['code']%2) {
          this.message.create("success", data.msg);
          this.router.navigateByUrl("/manage/console");
        } else {
          this.message.create("error","登录失败！" + data.msg);
        }
      });
  }

}
