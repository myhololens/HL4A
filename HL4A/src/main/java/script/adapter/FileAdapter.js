自由变量 FileAdapter = 函数(_列表) {

此.__proto__ = 新 Adapter();

自由变量 _刷新 = () => {
此.刷新();
}

变量 _界面 = _列表.getContext();

此.设置(_列表,函数(_参数) {

变量 _项目 = 线性布局(_界面)
.置高度("自动")
.置方向("水平")
.置填充("16dp")
.置背景("透明")
.置单击事件(函数() {
_参数.单击();
});

如 (_参数.长按 != null) {
_项目.置长按事件(函数(){
_参数.长按();
});
}

变量 _文本  = 文本控件(_界面)
.置文本(_参数.文本)
.加入到(_项目);

返 _项目;

});

变量 目录,_当前,按下,模式;

此.取目录 = () => {
返 _当前;
}

此.初始化 = (_目录,_按下,_模式) => {
目录 = 文件.检查地址(_目录);
_当前 = 目录;
按下 = _按下;
模式 = _模式;
}

此.刷新 = () => {
此.清空();
如 (模式 == 真) {
如 (目录 != _当前) {
此.添加({
文本 : "返回上级",
单击 : () => {
_当前 = 文件.取目录(_当前);
此.刷新();
}});
}
}
变量 _所有 = 文件.取文件列表(_当前);
循环 (变量 _键值 在 _所有) {

变量 _文件 = _所有[_键值];
变量 _路径 = _文件.getPath();

此.添加({
文本 : _文件.getName(),
长按 : () => {
变量 _删除弹窗 = 弹窗.普通(_界面,
"删除文件",
"真的要删除 " +_文件.getPath()+" 吗?",
"删除",函数() {
文件.删除(_文件.getPath());
弹窗.提示("删除完成 ~");
_刷新();
_删除弹窗.隐藏();
},
"取消",函数() {
_删除弹窗.隐藏();
}).显示();
},
单击 : () => {
如 (模式 == 真) {
如 (_文件.isFile()) {
按下(_文件);
} 另 {
_当前= _文件.getPath();
此.刷新();
}
} 另 {
按下(_文件);
}
}});

}

}

返 此;

}