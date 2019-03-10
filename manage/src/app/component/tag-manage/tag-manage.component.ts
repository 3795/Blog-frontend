import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {HttpService} from "../../service/http.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-tag-manage',
  templateUrl: './tag-manage.component.html',
  styleUrls: ['./tag-manage.component.css']
})
export class TagManageComponent implements OnInit {

  public tagData: any[] =  [];

  public pageNum: number = 1;

  public total: number = 1;

  public tableTitle: string = "标签管理";

  public visible: boolean = false;

  // 表单部分
  private id: number = -1;
  public name: string;
  public color: string;

  private url: string = "/tag";

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
          this.tagData = data['data']['list'];
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
          this.tagData = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  /**
   * 删除标签
   * @param id
   */
  delete(id: number): void {
    this.modalService.confirm({
      nzTitle     : '确认删除该标签吗?',
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
  changeStatus(id: number, $event): void {
    this.httpService.patchWithOutBody(this.url + "/" + id)
      .subscribe((data) => {
        if (!(data['code']%2)) {
          this.message.create('error', data.msg);
        }
      });
  }

  /**
   * 显示新增的模态框
   */
  showModal(): void {
    this.id = -1;
    this.name = "";
    this.color = "";
    this.visible = true;
  }

  /**
   * 显示更新的模态框
   * @param data
   */
  showUpdateModal(data: any): void {
    this.id = data.id;
    this.name = data.name;
    this.color = data.color;
    this.visible = true;
  }

  /**
   * 添加标签
   */
  handleOk(): void {
    if (this.id === -1) {
      this.insertTag();
      let httpParams = new HttpParams().set("pageNum", this.total.toString());
      this.updateData(httpParams);
    } else {
      this.updateTag();
      let params = new HttpParams().set("pageNum", this.pageNum.toString());
      this.updateData(params);
    }
    this.visible = false;
  }

  /**
   * 取消
   */
  handleCancel(): void {
    this.visible = false;
  }

  /**
   * 新增标签
   */
  insertTag(): void {
    let body = "name=" + this.name + "&color=" + this.color;
    this.httpService.post(this.url, body)
      .subscribe((data) => {
        if (data['code']%2) {
          this.message.create('success', "添加成功");
        } else {
          this.message.create('error', data.msg);
        }
      });
  }

  /**
   * 更新标签
   */
  updateTag(): void {
    let body = "name=" + this.name + "&color=" + this.color;
    this.httpService.put(this.url + "/" + this.id, body)
      .subscribe((data) => {
        if (data['code']%2) {
          this.message.create('success', "更新成功");
        } else {
          this.message.create('error', data.msg);
        }
      });
  }

}
