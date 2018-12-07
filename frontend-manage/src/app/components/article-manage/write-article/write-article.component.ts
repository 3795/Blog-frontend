import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from "ng-zorro-antd";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EditorWriteConfig} from "../../../directives/editor-write/editorWriteConfig";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.css']
})
export class WriteArticleComponent implements OnInit {

  private id;
  public title: string;
  public imgUrl: string;
  public summary: string;
  public category: any[];
  public categoryId: number;
  public status: any = true;

  loading = false;

  public options: any[] = [];

  public markdown: any;
  conf = new EditorWriteConfig();

  constructor(private msg: NzMessageService,
              private httpService: HttpService,
              private router: Router,
              private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.initOptions();
    this.initArticle();
  }

  syncModel($event): void {
    this.markdown = $event;
  }

  /**
   * 初始化文章信息
   */
  initArticle(): void {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if (this.id != undefined) {
      this.httpService.get("/article/" + this.id)
        .subscribe((data) => {
          if (data.code % 2) {
            this.id = data.data['id'];
            this.title = data.data['title'];
            this.summary = data.data['summary'];
            this.imgUrl = data.data['img'];
            this.markdown = data.data['content'];
            this.status = data.data['status'];
          } else {
            this.msg.error(data.msg);
          }
        });
    }
  }

  /**
   * 初始化分类数据
   */
  initOptions(): void {
    this.httpService.get("/category/cascade")
      .subscribe((data) => {
        if (data.code%2) {
          this.options = data.data;
        } else {
          this.msg.error(data.msg);
        }
      });
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
      this.imgUrl = info.file.response.data;
    }
  }


  handleSave(): void {
    if (this.id != undefined) {
      this.updateArticle();
    } else {
      this.addArticle();
    }
  }

  /**
   * 添加文章到数据库
   */
  addArticle(): void {
    this.categoryId = this.category[this.category.length - 1];
    this.status = (this.status == true) ? 1 : 0;

    let body = "title=" + this.title
      + "&img=" + this.imgUrl
      + "&summary=" + this.summary
      + "&content=" + this.markdown
      + "&categoryId=" + this.categoryId
      + "&status=" + this.status;

    this.httpService.post("/article", body)
      .subscribe((data) => {
        if (data.code % 2) {
          this.msg.success(data.msg);
          this.router.navigateByUrl("/console/article/list")
        } else {
          this.msg.error(data.msg);
        }
      });
  }

  updateArticle(): void {
    this.categoryId = this.category[this.category.length - 1];
    this.status = (this.status == true) ? 1 : 0;

    let body = "id=" + this.id
      + "&title=" + this.title
      + "&img=" + this.imgUrl
      + "&summary=" + this.summary
      + "&content=" + this.markdown
      + "&categoryId=" + this.categoryId
      + "&status=" + this.status;

    this.httpService.put("/article", body)
      .subscribe((data) => {
        if (data.code % 2) {
          this.msg.success(data.msg);
          this.router.navigateByUrl("/console/article/list")
        } else {
          this.msg.error(data.msg);
        }
      });
  }

}
