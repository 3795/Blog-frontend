import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService, UploadFile} from "ng-zorro-antd";
import {HttpParams} from "@angular/common/http";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-carousel-manage',
  templateUrl: './carousel-manage.component.html',
  styleUrls: ['./carousel-manage.component.css']
})
export class CarouselManageComponent implements OnInit {

  public carouselImg: any[] = [];

  public pageNum: number = 1;

  public total: number = 1;

  public tableTitle: string = "轮播图管理";

  public visible: boolean = false;

  // 表单部分
  public img: string;
  public link: string;

  private url: string = "/carouselImg";

  constructor(private httpService: HttpService,
              private message: NzMessageService,
              private modalService: NzModalService) {
  }

  ngOnInit() {
    this.initData();
  }

  /**
   * 初始化信息
   */
  initData(): void {
    this.httpService.get(this.url)
      .subscribe((data) => {
        if (data['code'] % 2) {
          this.carouselImg = data['data']['list'];
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
        if (!(data['code'] % 2)) {
          this.message.create('error', data['msg']);
        } else {
          this.carouselImg = data['data']['list'];

          this.pageNum = data['data']['pageNum'];
          this.total = data['data']['total'];
        }
      });
  }

  /**
   * 删除图片
   * @param id
   */
  delete(id: number): void {
    this.modalService.confirm({
      nzTitle: '确认删除该图片吗?',
      nzOkText: '删除',
      nzOkType: 'danger',
      nzOnOk: () => {
        let params = new HttpParams().set("pageNum", this.pageNum.toString());
        this.httpService.delete(this.url + "/" + id)
          .subscribe((data) => {
            if (data['code'] % 2) {
              this.updateData(params);
              this.message.create('success', data.msg);
            } else {
              this.message.create('error', data.msg);
            }
          });
      },
      nzCancelText: '取消',
      nzOnCancel: () => {
      }
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
    // this.httpService.patchWithOutBody(this.url + "/" + id)
    //   .subscribe((data) => {
    //     if (!(data['code']%2)) {
    //       this.message.create('error', data.msg);
    //     }
    //   });
  }

  /**
   * 显示新增的模态框
   */
  showModal(): void {
    this.visible = true;
  }

  /**
   * 添加标签
   */
  handleOk(): void {
    this.insertImg();
    let httpParams = new HttpParams().set("pageNum", this.total.toString());
    this.updateData(httpParams);
    this.visible = false;
  }

  /**
   * 取消
   */
  handleCancel(): void {
    this.visible = false;
  }

  /**
   * 新增图片
   */
  insertImg(): void {
    let body = "img=" + this.img + "&link=" + this.link;
    this.httpService.post(this.url, body)
      .subscribe((data) => {
        if (data['code'] % 2) {
          this.message.create('success', "添加成功");
        } else {
          this.message.create('error', data.msg);
        }
      });
  }

  beforeUpload = (file: File) => {
    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
    if (!isJPG) {
      this.message.error('图片格式错误');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.message.error('图片大于2M');
    }
    return isJPG && isLt2M;
  };

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'done') {
      this.message.success("图片上传成功");
      this.img = info.file.response.data;
    }
  }

}
