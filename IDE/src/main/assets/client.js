var $布局 = 自动布局();

$布局.标题.置标题("我的应用");

var $按钮 = new 按钮($布局.底层);

$按钮.置文本("Hello");

$按钮.置边距("16dp");

$按钮.置单击事件(函数() {

提示("你好 !");

});