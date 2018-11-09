import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';
import {EditorShowConfig} from "./editorShowConfig";
import {GetService} from "../../service/get.service";
import {Router} from "@angular/router";

declare var editormd: any;
declare var $: any;

@Directive({
  selector: '[appEditorShow]'
})
export class EditorShowDirective implements AfterViewInit {

  public apiUrl: string = "article";      // 远程请求的url地址

  @Input()
  public articleId: number;   // 文章的ID

  @Output()
  public title = new EventEmitter();    // 文章的标题

  constructor(@Attribute('id') private id: string,      // 获得宿主所在组件的id名
              private getService: GetService,
              private router: Router) { }

  ngAfterViewInit() {
    this.apiUrl += "/" + this.articleId;
    this.getService.get(this.apiUrl)
      .subscribe(data => {
        if (data['code'] == 404) {
          this.router.navigateByUrl("/404");
        } else {
          this.title.emit(data['data']['title']);     // 将title的值传递给父组件
          $("#content").val(data['data']['content']);
          editormd.markdownToHTML(this.id, EditorShowConfig);     // 渲染输出内容
        }
      });
  }

}
