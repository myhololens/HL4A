自由变量 Menu = Menu || 函数(_按钮) {

此.菜单 =  新 菜单(_按钮);

此.添加 = (_项目,_单击,_长按) => {
如 (_长按 != 空) {
此.菜单.添加(_项目,_单击,_长按);
} 另 {
此.菜单.添加(_项目,_单击);
}
}

此.显示 = (_位置) => {
如 (_位置 == 空) {
_位置 = "左下";
}
此.菜单.显示(_位置);
}

此.隐藏 = () => {
此.菜单.隐藏();
}

此.加载菜单 = (_参数) => {
循环 (变量 _键值 在 _参数) {
变量 _方法 = _参数[_键值];
此.添加(_键值,函数() {
_方法();
});
}
返 此;
}

返 此;

}
