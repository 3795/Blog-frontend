import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NzMessageService, UploadFile} from "ng-zorro-antd";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userInfo: object = {};

  private url: string = "/user";

  public isVisible: boolean = false;

  constructor(private httpService: HttpService,
              private msg: NzMessageService) { }

  ngOnInit() {
    this. httpService.get(this.url + "/detail")
      .subscribe((data) => {
        if (data.code%2) {
          this.userInfo = data.data;
        } else {
          this.msg.create('error', data.msg);
        }
      });
  }

  /**
   * 文件上传前的校验
   * @param {File} file
   * @returns {boolean}
   */
  beforeUpload = (file: File) => {
    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
    if (!isJPG) {
      this.msg.error('图片格式错误');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('图片大于2M');
    }
    return isJPG && isLt2M;
  };

  /**
   * 图片上传成功后的回调
   * @param {{file: UploadFile}} info
   */
  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'done') {
      this.msg.success("图片上传成功");
      this.userInfo['avatar'] = info.file.response.data;
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    let body: string = "username=" + this.userInfo['username']
      + "&phone=" + this.userInfo['phone']
      + "&email=" + this.userInfo['email']
      + "&signature=" + this.userInfo['signature'];

    this.httpService.put(this.url + "/info", body)
      .subscribe((data) => {
        if (data.code % 2) {
          this.msg.success("信息修改成功");
        } else {
          this.msg.error(data.msg);
        }
      });

    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
