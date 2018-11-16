import {Component, OnInit} from '@angular/core';
import {ElMessageService} from 'element-angular'
import {BackendService} from "../../service/backend.service";

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
              private backendService: BackendService) { }

  ngOnInit() {
  }

  public login(): void {
    let requestBody = {
      "account": this.account,
      "password": this.password,
      "captchaCode": this.captchaCode
    };
    console.log(JSON.stringify(requestBody));
    this.backendService.post("/login", JSON.stringify(requestBody))
      .subscribe((data) => {
        console.log(data);
      });
  }

}
