local _内容 = 底层(当前界面)
.置填充("16dp");

function _分隔()
return 分隔(当前界面,"8dp");
end

local _文本 = 文本控件(当前界面)
.置主题("默认")
.置文本("这是Lua界面！Lua运行起来一秒几十k了速度最快了")
.加入到(_内容);

_分隔().加入到(_内容);

local _按钮1 = 按钮(当前界面)
.置主题("默认")
.置文本("Hello Lua")
.置单击事件(方法(function(参数)
弹窗.提示 "哈哈，Lua速度第一，语法也很方便"
end)).加入到(_内容);

local _标题栏 = 标题栏(当前界面,"Lua界面测试");

local _底层 = 底层(当前界面)
.加入子元素(_标题栏).加入子元素(_内容)
.打开(当前界面);
