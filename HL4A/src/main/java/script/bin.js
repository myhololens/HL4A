导入("#init.js");
导入("#layout/layout_bin.js");
导入包(Packages.net.fornwall.apksigner)
导入包(h.编译);

自由变量 _目录 = 当前界面.传入数据[0];

自由变量 _布局 = 新 layout_bin(当前界面);

_布局.编辑.置文本(_目录);

_布局.编译.置单击事件(函数(){
_编译(_布局.编辑.取文本());
})

自由变量 _编译 = 函数(_目录) {

自由变量 加载中 = 弹窗.加载中(当前界面,"准备文件");

加载中.显示();

//加载中.置可关闭(真).显示();

函数 更新(_内容) {
加载中.取布局().文本对象.置文本(_内容);
}

线程(函数() {

变量 _输出 = "放课后乐园部/编译";
变量 _打包 = _输出+"/打包"
变量 _源码 = _输出+"/源码";
变量 _类 = _输出+"/类";

文件.删除(_打包);
文件.删除(_源码);
文件.删除(_类);
文件.复制(_目录,_源码);
文件.删除后缀(_源码,".bak");

解压.全部(文件.取安装包位置(),_打包);

更新("正在编译代码 ~");

_编译文件(_源码,_类,"");

变量 _数量 = Integer(2);

当 (文件.是文件(_打包+"/classes"+Integer(_数量)+".dex") == 真) {
_数量 ++;
}

DEX.多个(_打包+"/classes"+Integer(_数量)+".dex",_类);

文件.删除后缀(_源码,".java");

文件.剪切(_输出+"/所有类.dex",_打包+"/classes.dex");

文件.删除(_打包+"/script");

更新("正在打包 ~");

文件.复制(_源码,_打包+"/script");

压缩.全部(_打包,_输出+"/未签名.apk");

弹窗.提示("请手动签名 : 放课后乐园部/编译/未签名.apk");

加载中.隐藏();

}).启动();

}


变量 编译JS = 函数(_文件,_附加,_类) {
变量 _包名 = "h.android";
如 (_附加 != "") {
_包名  = "h.android"+字符.替换(_附加,"/",".");
}
字符.保存(_文件.getPath(),JSC(_文件.getPath())
.置包名(_包名)
.置输出(_类)
.编译());
}

变量 L编译Lua = 脚本.Lua().运行文件("#bin/bin.lua")

变量 编译Lua = 函数(_文件) {
L编译Lua.call(_文件.getPath());
}

变量 _编译文件 = 函数(_目录,_类,_附加) {

变量 _所有文件;

如 (_附加 != 空) {
_所有文件 = 文件.取文件列表(_目录+_附加);
} 另 {
_所有文件 = 文件.取文件列表(_目录);
}

循环 (_键值 在 _所有文件) {

变量 _此文件 = _所有文件[_键值];

如 (_此文件.isFile()) {
变量 _类型 = 文件.取后缀(_此文件.getPath());
如 (_类型 == "js")
编译JS(_此文件,_附加,_类);
另 如(_类型 == "lua")
编译Lua(_此文件);
} 另 如(_此文件.isDirectory()) {
_编译文件(_目录,_类,_附加+"/"+_此文件.getName());
}
}

文件.创建目录(_类);

/*
JAVAC.编译("#bin/android.jar",_类,_目录,_目录+"/libs");
*/
}