/**
 * 自定义的js函数
 */
$(function () {


  // 渲染MarkDown
  // editormd.markdownToHTML("content-editormd", {
  //   htmlDecode: "style,script,iframe", //可以过滤标签解码
  //   emoji: true,
  //   taskList: true,
  //   tex: true,               // 默认不解析
  //   flowChart: true,         // 默认不解析
  //   sequenceDiagram: true, // 默认不解析
  //   codeFold: true
  // });

  //点击按钮显示菜单
  $("#showMenu").click(function (event) {
    event.stopPropagation();        //阻止冒泡事件
    $("#mobile-navigation").show(100);
  });

  //点击任意位置隐藏菜单
  $(document).click(function () {
    $("#mobile-navigation").hide(100);
  });
});
