import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {Router} from "@angular/router";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public account: string;

  public password: string;

  public captchaCode: string;

  // 获取验证码的模态框
  public confirmVisible: boolean = false;

  // 输入验证码的模态框
  public captchaVisible: boolean = false;

  // 手机号
  public phone: string;

  public phoneToken: string;

  // 短信验证码
  public phoneCaptchaCode: string;

  public getCaptchaLoading: boolean = false;

  constructor(private message: NzMessageService,
              private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
  }

  /**
   * 用户登录
   */
  public login(): void {

    let requestBody = "account=" + this.account + "&password=" + this.password + "&captchaCode=" + this.captchaCode;
    this.httpService.post("/login", requestBody)
      .subscribe((data) => {
        if (data['code']%2) {
          this.message.create("success", data.msg);
          this.router.navigateByUrl("/console");
        } else if (data['code'] == 52) {
          this.phone = data['data'][0];
          this.phoneToken = data['data'][1];
          this.confirmVisible = true;
        } else {
          this.message.create("error","登录失败！" + data.msg);
        }
      });
  }

  /**
   * 获取手机验证码
   */
  getCaptcha(): void {
    this.getCaptchaLoading = true;
    let body: string = "phoneToken=" + this.phoneToken;
    this.httpService.utilPost("/sms", body)
      .subscribe((data) => {
        if (data['code']%2) {
          this.getCaptchaLoading = false;
          this.message.success(data.msg);
          this.captchaVisible = true;
        } else if (data['code'] == 54) {
          this.getCaptchaLoading = false;
          this.captchaVisible = true;
        } else {
          this.message.error(data.msg)
        }
      });
  }

  /**
   * 放弃获取验证码
   */
  cancel(): void {
    this.confirmVisible = false;
  }

  /**
   * 输入手机验证码，
   * 完成异地登录验证
   */
  handleOk(): void {
    let requestBody = "account=" + this.account
      + "&password=" + this.password
      + "&captchaCode=" + this.captchaCode
      + "&phoneCaptchaCode=" + this.phoneCaptchaCode;
    this.httpService.post("/login", requestBody)
      .subscribe((data) => {
        if (data['code']%2) {
          this.message.create("success", data.msg);
          this.router.navigateByUrl("/console");
        } else {
          this.message.create("error","登录失败！" + data.msg);
        }
      });
  }

  /**
   * 放弃异地登录验证
   */
  handleCancel(): void {
    this.captchaVisible = false;
  }

}
