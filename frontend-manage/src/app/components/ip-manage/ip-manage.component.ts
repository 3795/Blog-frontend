import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-ip-manage',
  templateUrl: './ip-manage.component.html',
  styleUrls: ['./ip-manage.component.css']
})
export class IpManageComponent implements OnInit {

  public ipData: any[] =  [];

  public pageNum: number = 1;

  public total: number = 1;

  public tableTitle: string = "IP管理";

  private url: string = "/ipRecord";

  constructor(private httpService: HttpService,
              private message: NzMessageService,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.initData();
  }

  /**
   * 初始化信息
   */
  initData(): void {
    this.httpService.get(this.url)
      .subscribe((data) => {
        if (data['code']%2) {
          this.ipData = data['data']['list'];
          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        } else {
          this.message.create('error', data.msg);
        }
      });
  }

  /**
   * 更新信息
   * @param {HttpParams} params
   */
  updateData(params: HttpParams): void {
    this.httpService.getWithParams(this.url, params)
      .subscribe((data) => {
        if (!(data['code']%2)) {
          this.message.create('error', data['msg']);
        } else {
          this.ipData = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  /**
   * 删除IP
   * @param id
   */
  delete(id: number): void {
    this.modalService.confirm({
      nzTitle     : '确认删除该IP吗?',
      nzOkText    : '删除',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        let params = new HttpParams().set("pageNum", this.pageNum.toString());
        this.httpService.delete(this.url + "/" + id)
          .subscribe((data) => {
            if (data['code']%2) {
              this.updateData(params);
              this.message.create('success', data.msg);
            } else {
              this.message.create('error', data.msg);
            }
          });
      },
      nzCancelText: '取消',
      nzOnCancel  : () => {}
    });
  }

  /**
   * 翻页
   * @param {number} nowPageNum
   */
  turnPage(nowPageNum: number): void {
    let params = new HttpParams().set("pageNum", nowPageNum.toString());
    this.updateData(params);
  }

  /**
   * 改变状态
   * @param id
   * @param $event
   */
  changeStatus(id: number): void {
    this.httpService.patchWithOutBody(this.url + "/" + id)
      .subscribe((data) => {
        if (!(data['code']%2)) {
          this.message.create('error', data.msg);
        }
      });
  }


}
