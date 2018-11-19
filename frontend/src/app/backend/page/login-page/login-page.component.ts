import {Component, OnInit} from '@angular/core';
import {ElMessageService} from 'element-angular'
import {BackendService} from "../../service/backend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public account: string;

  public password: string;

  public captchaCode: string;

  constructor(private message: ElMessageService,
              private backendService: BackendService,
              private router: Router) { }

  ngOnInit() {
  }

  public login(): void {
    let requestBody = "account=" + this.account + "&password=" + this.password + "&captchaCode=" + this.captchaCode;
    this.backendService.post("/login", requestBody)
      .subscribe((data) => {
        if (data.code == 11) {
          this.message['success']("登录成功！");
          this.router.navigateByUrl("/manage/console");
        } else {
          this.message['error']("登录失败！" + data.msg);
        }
      });
  }

}
