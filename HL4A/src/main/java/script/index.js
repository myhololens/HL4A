var _底层 = 侧滑布局(当前界面)
.打开(当前界面);

var _主页 = 线性布局(当前界面)
.置主题("底层")
.置高度("最大")
.加入到(_底层);

var _标题栏 = 标题栏(当前界面)
.置标题("乐园之土")
.左按钮(function(){
_底层.打开侧滑(_侧滑);
})
.右按钮(function(){
_主页菜单.显示("左下");
})
.加入到(_主页);

var _开放源代码许可 = 弹窗.普通(当前界面,
"开放源代码许可",
字符.读取("@assets/LICENSE"),
"我有问题",function(){
网络.QQ.作者();
},
"项目源码",function() {
网络.打开("https://gitee.com/MikaGuraN/HL4A");
},
"我知道了",function(){
_开放源代码许可.关闭();
})

var _还原弹窗 = 弹窗.普通(当前界面,"是否还原实例？",
"这会覆盖当前文件",
"还原",function(){
_还原弹窗.关闭();
_代码框.置文本(字符.读取("@assets/example.js"));
保存代码();
},
"取消",function(){
_还原弹窗.关闭();
}
)

var _运行弹窗 = 弹窗.普通(当前界面,"是否运行代码？",
"顺便说一下这个编辑器真的不怎么样，可以使用MT管理器编辑代码。文件在/sdcard/放课后乐园部/index.js\n\n错误日志保存在"+文件.取存储卡缓存目录("错误日志"),
"运行",function(){
_运行弹窗.关闭();
保存代码();
当前界面.跳转界面("放课后乐园部/index.js");
},
"取消",function(){
_运行弹窗.关闭();
}
)

var _主页菜单 = 菜单(_标题栏.右按钮对象)
.添加("还原实例",function(){
_主页菜单.关闭();
_还原弹窗.显示();
})
.添加("运行代码",function(){
_主页菜单.关闭();
_运行弹窗.显示();
})
.添加("反馈错误",function(){
_主页菜单.关闭();
网络.QQ.作者();
})
.添加("开放源代码许可",function(){
_主页菜单.关闭();
_开放源代码许可.显示();
})

var _内容 = 线性布局(当前界面)
.置主题("底层")
.置高度("最大")
.加入到(_主页);

var _符号框 = 线性布局(当前界面)
.置主题("底层")
.置方向("水平")
.置填充("4dp")
.置背景(主题.文字())
.加入到(横向滚动(当前界面)
.置宽度("最大")
.置高度("自动")
.加入到(_内容));

var _所有符号 = [
"(",")",
"{","}",
",",".",
"[","]",";"
,"_","<"
,">"
]

for (k in _所有符号) {
new 线性布局(当前界面)
.置宽度("56dp")
.置高度("26dp")
.置背景("透明")
.置重力("中间")
.加入子元素(文本控件(当前界面)
.置文本颜色(颜色.白色)
.置文本(_所有符号[k]))
.加入到(_符号框)
.置单击事件(Function("_代码框.paste(\""+_所有符号[k]+"\")"))
}

var _代码框 = 代码框(当前界面)
.加入到(_内容)
_代码框.置文本(字符.读取("放课后乐园部/index.js") || "");

var _关于弹窗 = 弹窗.普通(当前界面,
"关于 乐园之土 "+应用.取版本名(),
字符.读取("@assets/about.txt"),
"联系作者",function() {
_关于弹窗.关闭();
网络.QQ.作者();
},
"加入讨论群",function() {
_关于弹窗.关闭();
网络.QQ.乐园部();
},
"关闭",function() {
_关于弹窗.关闭();
});

var _侧滑 = 线性布局(当前界面)
.置主题("底层")
.置背景(颜色.白色)
.到侧滑左布局();

_侧滑.加入到(_底层);

var _侧滑标题 = 标题栏(当前界面)
.置标题("内测版 "+应用.取版本名())
.左按钮("@assets/icon/ic_android.png",function(){
_关于弹窗.显示();
})
.加入到(_侧滑);

var _侧滑内容 = 线性布局(当前界面)
.置主题("底层")
.置高度("最大")
.置填充("16dp")
.加入到(_侧滑);

var _帮助 = 滚动视图(当前界面)
.置宽度("最大").置高度("最大")
.加入子元素(文本控件(当前界面)
.置文本(字符.读取("@assets/help.txt")))
.加入到(_侧滑内容);

当前界面.界面销毁事件 = 保存代码;
当前界面.界面遮挡事件 = 保存代码;

function 保存代码(){
字符.保存("放课后乐园部/index.js",_代码框.取文本())
}

// layout_gravity与父视图相关
// 线性布局的实例可以使用 .到侧滑(左/右)布局 方法