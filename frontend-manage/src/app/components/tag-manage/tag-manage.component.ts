import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {HttpParams} from "@angular/common/http";

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
  private id: number;
  public name: string;
  public priority: number;
  public link: string;

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
   * 删除导航
   * @param id
   */
  delete(id: number): void {
    this.modalService.confirm({
      nzTitle     : '确认删除该导航吗?',
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
   * 处理函数
   */
  handle(): void {
    if (this.id != 0) {
      this.update();
    } else {
      this.insert();
    }
  }

  /**
   * 打开更新导航的抽屉
   * @param data
   */
  updateDrawer(data: any): void {
    this.visible = true;

    // 渲染表单
    this.id = data.id;
    this.name = data.name;
    this.priority = data.priority;
    this.link = data.link;

  }

  /**
   * 更新导航信息
   */
  update(): void {
    let params = new HttpParams().set("pageNum", this.pageNum.toString());
    let body: string = "id=" + this.id + "&name=" + this.name + "&priority=" + this.priority + "&link=" + this.link + "&status=1";
    this.httpService.put(this.url, body).subscribe((data) => {
      if (data['code']%2) {
        this.closeDrawer();
        this.updateData(params);
        this.message.create('success', data.msg);
      } else {
        this.message.create('error', data.msg);
      }
    });
  }

  /**
   * 打开新增导航的抽屉
   */
  insertDrawer(): void {
    this.visible = true;

    // 渲染表单
    this.id = 0;
    this.name = "";
    this.priority = 0;
    this.link = "";
  }

  /**
   * 添加导航信息
   */
  insert(): void {
    let params = new HttpParams().set("pageNum", this.total.toString());
    let body: string = "name=" + this.name + "&priority=" + this.priority + "&link=" + this.link + "&status=1";
    this.httpService.post(this.url, body).subscribe((data) => {
      if (data['code']%2) {
        this.closeDrawer();
        this.updateData(params);
        this.message.create('success', data.msg);
      } else {
        this.message.create('error', data.msg);
      }
    });
  }

  /**
   * 关闭抽屉
   */
  closeDrawer(): void{
    this.visible = false;
  }

}
