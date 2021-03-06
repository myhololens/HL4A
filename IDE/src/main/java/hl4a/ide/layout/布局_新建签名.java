package hl4a.ide.layout;

import android.content.Context;
import 间.安卓.工具.主题;
import 间.安卓.视图.线性布局;
import 间.安卓.视图.编辑框;

public class 布局_新建签名 extends 线性布局 {

    public 编辑框 名称;
    public 编辑框 密码;
    public 编辑框 别名;
    public 编辑框 别名密码;

    public 布局_新建签名(Context $上下文) {
        super($上下文);
        置左右填充(主题.取默认填充());
        名称 = new 编辑框(this);
        名称.置默认文本("你的名称");
        名称.置输入类型("文本");
        别名 = new 编辑框(this);
        别名.置默认文本("秘钥仓库里你使用的别名");
        别名.置输入类型("文本");
        密码 = new 编辑框(this);
        密码.置默认文本("秘钥仓库文件的密码");
        密码.置输入类型("文本-密码");
        别名密码 = new 编辑框(this);
        别名密码.置默认文本("秘钥仓库里该别名的密码");
        别名密码.置输入类型("文本-密码");
    }

}
