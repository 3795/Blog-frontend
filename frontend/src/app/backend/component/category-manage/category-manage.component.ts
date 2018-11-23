import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {HttpParams} from "@angular/common/http";
import {NzMessageService, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css']
})
export class CategoryManageComponent implements OnInit {

  public categoryData: any[] =  [];

  public pageNum: number = 1;

  public total: number = 1;

  public tableTitle: string = "分类管理";

  public visible: boolean = false;

  public firstLevel: any[] = [];

  // 表单部分
  private id: number;
  public name: string;
  public parentId: number;

  private url: string = "/category";

  constructor(private backendService: BackendService,
              private message: NzMessageService,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.initData();
  }

  /**
   * 初始化展示分类信息
   */
  initData(): void {
    this.backendService.get(this.url)
      .subscribe((data) => {
        if (data['code'] != 10) {
          this.message.create('error', data.msg);
        } else {
          this.categoryData = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  /**
   * 更新展示分类信息
   * @param {HttpParams} params
   */
  updateData(params: HttpParams): void {
    this.backendService.getWithParams(this.url, params)
      .subscribe((data) => {
        if (data['code'] != 10) {
          this.message.create('error', data['msg']);
        } else {
          this.categoryData = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  /**
   * 改变分类状态
   * @param scope
   */
  changeStatus(id: number): void {
    this.backendService.patch(this.url + "/" + id, "")
      .subscribe((data) => {
        if (data['code'] != 22) {
          this.message.create('error', data.msg);
        }
      });
  }

  /**
   * 删除某一条记录
   * @param scope
   */
  delete(id: number): void {
    this.modalService.confirm({
      nzTitle     : '确认删除该分类吗?',
      nzOkText    : '删除',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        let params = new HttpParams().set("pageNum", this.pageNum.toString());
        this.backendService.delete(this.url + "/" + id)
          .subscribe((data) => {
            if (data['code'] != 24) {
              this.message.create('error', data.msg);
            } else {
              this.updateData(params);
              this.message.create('success', data.msg);
            }
          });
      },
      nzCancelText: '取消',
      nzOnCancel  : () => {}
    });
  }

  /**
   * 进行翻页
   * @param {number} nowPageNum
   */
  turnPage(nowPageNum: number): void {
    let params = new HttpParams().set("pageNum", nowPageNum.toString());
    this.updateData(params);
  }

  /**
   * 打开更新分类的抽屉
   * @param data
   */
  updateDrawer(data: any): void {
    this.visible = true;

    // 渲染表单
    this.id = data.id;
    this.name = data.name;
    this.parentId = data.parentId;

    // 获取下拉框数据
    this.backendService.get(this.url + "/" + "firstLevel")
      .subscribe((data) => {
        if (data.code != 10) {
          this.message.create('error', data.msg);
        } else {
          this.firstLevel = data.data;
        }
      });
  }

  /**
   * 更新分类信息
   */
  update(): void {
    let params = new HttpParams().set("pageNum", this.pageNum.toString());
    let body: string = "id=" + this.id + "&name=" + this.name + "&parentId=" + this.parentId + "&status=1";
    this.backendService.put(this.url, body).subscribe((data) => {
      if (data.code != 22) {
        this.message.create('error', data.msg);
      } else {
        this.closeDrawer();
        this.updateData(params);
        this.message.create('success', data.msg);
      }
    });
  }

  /**
   * 打开新增分类的抽屉
   */
  insertDrawer(): void {
    this.visible = true;

    // 渲染表单
    this.id = null;
    this.name = "";
    this.parentId = 0;

    // 获取下拉框数据
    this.backendService.get(this.url + "/" + "firstLevel")
      .subscribe((data) => {
        if (data.code != 10) {
          this.message.create('error', data.msg);
        } else {
          this.firstLevel = data.data;
        }
      });
  }

  /**
   * 添加分类信息
   */
  insert(): void {
    let params = new HttpParams().set("pageNum", this.total.toString());
    let body: string = "name=" + this.name + "&parentId=" + this.parentId + "&status=1";
    this.backendService.post(this.url, body).subscribe((data) => {
      if (data.code != 20) {
        this.message.create('error', data.msg);
      } else {
        this.closeDrawer();
        this.updateData(params);
        this.message.create('success', data.msg);
      }
    });
  }

  /**
   * 处理函数
   */
  handle(): void {
    if (this.id != null) {
      this.update();
    } else {
      this.insert();
    }
  }

  /**
   * 关闭抽屉
   */
  closeDrawer(): void{
    this.visible = false;
  }


}
