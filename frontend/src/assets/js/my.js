/**
 * 自定义的js函数
 */
$(function () {
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
