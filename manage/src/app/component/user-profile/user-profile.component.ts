import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {NzMessageService, NzModalService, UploadFile} from "ng-zorro-antd";
import {HttpService} from "../../service/http.service";

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
  public messages: Array<any> = [];

  constructor(private httpService: HttpService,
              private msg: NzMessageService,
              private modalService: NzModalService) { }

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
        this.unreadMsgCount = data.data;
      });
  }

  /**
   * 获取消息列表
   */
  getMessages(): void {
    this.httpService.get(this.messageUrl)
      .subscribe((data) => {
        if (data.code%2) {
          this.messages = data.data;
        }
      });
  }

  /**
   * 将该消息标记为已读
   * @param {number} id
   */
  read(id: number): void {
    for (let message of this.messages) {
      if (message.id == id) {
        message.status = 1;
        break;
      }
    }
    this.unreadMsgCount -= 1;

    this.httpService.patchWithOutBody(this.messageUrl + "/" + id)
      .subscribe((data) => {
        if (!(data.code%2)) {
          this.msg.error(data.msg);
        }
      });
  }

  /**
   * 删除该消息
   * @param {number} id
   */
  delete(id: number): void {
    for (let index in this.messages) {
      if (this.messages[index].id == id) {
        this.messages.splice(parseInt(index), 1);
        break;
      }
    }

    this.httpService.delete(this.messageUrl + "/" + id)
      .subscribe((data) => {
        if (!(data.code%2)) {
          this.msg.error(data.msg);
        }
      });
  }

  clearMessage(): void {
    this.modalService.confirm({
      nzTitle     : '确认删除清空所有已读消息吗?',
      nzOkText    : '确认',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        let tmp: Array<any> = [];
        for (let message of this.messages) {
          if (message.status == 0) {
            tmp.push(message);
          }
        }
        this.messages = tmp;

        this.httpService.post(this.messageUrl + "/empty", "")
          .subscribe((data) => {
            if (!(data.code%2)) {
              this.msg.error(data.msg);
            }
          });
      },
      nzCancelText: '取消',
      nzOnCancel  : () => {}
    });
  }

}
