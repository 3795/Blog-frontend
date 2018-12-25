import {AfterViewInit, Attribute, Directive, Input} from '@angular/core';
import {EditorShowConfig} from "./editorShowConfig";

declare var editormd: any;
declare var $: any;
@Directive({
  selector: '[appEditorShow]'
})
export class EditorShowDirective implements AfterViewInit{

  @Input()
  public content: string;


  constructor(@Attribute('id') private id: string) { }

  ngAfterViewInit() {
    $("#content").val(this.content);
    editormd.markdownToHTML(this.id, EditorShowConfig);     // 渲染输出内容
  }

}
