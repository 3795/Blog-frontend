import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {HttpService} from "../../../service/http.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-article-recover',
  templateUrl: './article-recover.component.html',
  styleUrls: ['./article-recover.component.css']
})
export class ArticleRecoverComponent implements OnInit {

  public tableTitle: string = "回收站";

  public articleData: any[] = [];

  public pageNum: number = 1;

  public total: number = 0;

  private url: string = "/article";

  constructor(private httpService: HttpService,
              private message: NzMessageService,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    let params = new HttpParams().set("status", "0");
    this.httpService.getWithParams(this.url, params)
      .subscribe((data) => {
        if (!(data['code']%2)) {
          this.message.create('error', data.msg);
        } else {
          this.articleData = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  updateData(params: HttpParams): void {
    this.httpService.getWithParams(this.url, params)
      .subscribe((data) => {
        if (!(data['code']%2)) {
          this.message.create('error', data['msg']);
        } else {
          this.articleData = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  turnPage(nowPageNum: number): void {
    let params = new HttpParams().set("pageNum", nowPageNum.toString()).set("status", "0");
    this.updateData(params);
  }


  recover(id: number): void{
    let params = new HttpParams().set("pageNum", this.pageNum.toString()).set("status", "0");
    let body: string = "id=" + id + "&status=" + 1;
    this.httpService.patch(this.url + "/status", body)
      .subscribe((data) => {
        if (data['code']%2) {
          this.updateData(params);
          this.message.create('success', "恢复成功");
        } else {
          this.message.create('error', data.msg);
        }
      });
  }

  delete(id: number): void {
    this.modalService.confirm({
      nzTitle     : '彻底删除该文章吗?',
      nzOkText    : '删除',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        let params = new HttpParams().set("pageNum", this.pageNum.toString()).set("status", "0");
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

}
