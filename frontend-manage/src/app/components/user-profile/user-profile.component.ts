import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NzMessageService, UploadFile} from "ng-zorro-antd";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userInfo: object = {};

  private userInfoUrl: string = "/user";

  public isVisible: boolean = false;

  public unreadMsgCount: number = 0;

  public messageUrl: string = "/message";

  // 消息列表
  public messages: object = [1, 2, 3, 4, 5, 6, 7];

  constructor(private httpService: HttpService,
              private msg: NzMessageService) { }

  ngOnInit() {
    this.getUserInfo();
    this.getUnreadMsgCount();
    this.getMessages();
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

  /**
   * 获取用户信息
   */
  getUserInfo(): void {
    this. httpService.get(this.userInfoUrl + "/detail")
      .subscribe((data) => {
        if (data.code%2) {
          this.userInfo = data.data;
        } else {
          this.msg.create('error', data.msg);
        }
      });
  }

  /**
   * 显示修改信息的模态框
   */
  showModal(): void {
    this.isVisible = true;
  }

  /**
   * 更新信息
   */
  handleOk(): void {
    let body: string = "username=" + this.userInfo['username']
      + "&phone=" + this.userInfo['phone']
      + "&email=" + this.userInfo['email']
      + "&signature=" + this.userInfo['signature'];

    this.httpService.put(this.userInfoUrl + "/info", body)
      .subscribe((data) => {
        if (data.code % 2) {
          this.msg.success("信息修改成功");
        } else {
          this.msg.error(data.msg);
        }
      });

    this.isVisible = false;
  }

  /**
   * 取消修改信息
   */
  handleCancel(): void {
    this.isVisible = false;
  }

  /**
   * 获取未读消息的数量
   */
  getUnreadMsgCount(): void {
    let params = new HttpParams().set("status", "0");
    this.httpService.getWithParams(this.messageUrl + "/count", params)
      .subscribe((data) => {
        this.unreadMsgCount = data['data'];
      });
  }

  /**
   * 获取消息列表
   */
  getMessages(): void {
    this.httpService.get(this.messageUrl)
      .subscribe((data) => {
        if (data['code']%2) {
          // this.messages = data['data'];
        }
      });
  }




}
