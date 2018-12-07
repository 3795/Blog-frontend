import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.css']
})
export class ArticleManageComponent implements OnInit {

  public tableTitle: string = "文章列表";

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
    let params = new HttpParams().set("status", "1");
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
    let params = new HttpParams().set("pageNum", nowPageNum.toString()).set("status", "1");
    this.updateData(params);
  }

  changeStatus(id: number, $event): void{
    let status = ($event == true) ? 1 : 0;
    let body: string = "id=" + id + "&status=" + status;
    this.httpService.patch(this.url, body)
      .subscribe((data) => {
        if (!(data['code']%2)) {
          this.message.create('error', data.msg);
        } else {
          this.message.create('success', "下架成功");
          let params = new HttpParams().set("pageNum", this.pageNum.toString()).set("status", "1");
          this.updateData(params);
        }
      });
  }

  delete(id: number): void {
    this.modalService.confirm({
      nzTitle     : '确认删除该文章吗?',
      nzOkText    : '删除',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        let params = new HttpParams().set("pageNum", this.pageNum.toString()).set("status", "1");
        let body: string = "id=" + id + "&status=" + 2;
        this.httpService.patch(this.url, body)
          .subscribe((data) => {
            if (data['code']%2) {
              this.updateData(params);
              this.message.create('success', "已放入回收站");
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
