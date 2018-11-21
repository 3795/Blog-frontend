import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {ElNotificationService} from "element-angular/release/notification/notification.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css']
})
export class CategoryManageComponent implements OnInit {

  public list: any[] =  [];

  public pageNum: number = 1;

  public total: number = 1;

  public dialogShow: boolean = false;

  private url: string = "/category";

  public options: any[] = [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致',
      }, {
        value: 'fankui',
        label: '反馈',
      }, {
        value: 'xiaolv',
        label: '效率',
      }, {
        value: 'kekong',
        label: '可控',
      }],
    }],
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'layout',
      label: 'Layout 布局',
    }, {
      value: 'color',
      label: 'Color 色彩',
    }, {
      value: 'typography',
      label: 'Typography 字体',
    }],
  }, {
    value: 'form',
    label: 'Form',
    children: [{
      value: 'radio',
      label: 'Radio 单选框',
    }, {
      value: 'checkbox',
      label: 'Checkbox 多选框',
    }, {
      value: 'input',
      label: 'Input 输入框',
    }, {
      value: 'input-number',
      label: 'InputNumber 计数器',
    }, {
      value: 'select',
      label: 'Select 选择器',
    }, {
      value: 'cascader',
      label: 'Cascader 级联选择器',
    }],
  }];

  constructor(private backendService: BackendService,
              private notify: ElNotificationService) { }

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
          this.notify['error'](data['msg'], 'Error');
        } else {
          this.list = data['data']['list'];

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
          this.notify['error'](data['msg'], 'Error');
        } else {
          this.list = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  /**
   * 改变分类状态
   * @param scope
   */
  changeStatus(scope): void {
    let id = scope.rowData['id'];
    let params = new HttpParams().set("pageNum", this.pageNum.toString());
    this.backendService.patch(this.url + "/" + id, "")
      .subscribe((data) => {
        if (data['code'] != 22) {
          this.notify['error'](data['msg'], 'Error');
        } else {
          this.updateData(params);
          this.notify['success'](data['msg'], 'Success');
        }
      });
  }

  /**
   * 删除某一条记录
   * @param scope
   */
  delete(scope): void {
    if (!confirm("确认删除？")) {
      return;
    }
    let id = scope.rowData['id'];
    let params = new HttpParams().set("pageNum", this.pageNum.toString());
    this.backendService.delete(this.url + "/" + id)
      .subscribe((data) => {
        if (data['code'] != 24) {
          this.notify['error'](data['msg'], 'Error');
        } else {
          this.updateData(params);
          this.notify['success'](data['msg'], 'Success');
        }
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


}
