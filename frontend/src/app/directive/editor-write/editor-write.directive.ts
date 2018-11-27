import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';
import {EditorWriteConfig} from "./editorWriteConfig";

declare var editormd: any;
declare var $: any;

@Directive({
  selector: '[appEditorWrite]'
})
export class EditorWriteDirective implements AfterViewInit{

  @Input() editormdConfig: EditorWriteConfig;
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();

  // editormd编辑器
  editor: any;

  constructor(@Attribute('id') private id: string) { }

  ngAfterViewInit(): void {
    this.editor = editormd(this.id, this.editormdConfig); // 创建编辑器

    const out = this.onEditorChange;
    const textarea = $('#' + this.id + ' :first'); // 获取textarea元素

    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change', function () {
      out.emit(textarea.val());
    });
  }

}
