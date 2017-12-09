package 放课后乐园部.资源.布局;

import android.content.*;
import 放课后乐园部.基本.*;
import 放课后乐园部.视图.*;
import 放课后乐园部.视图.扩展.*;

public class 界面_初始化 extends 底层 {

    public 界面_初始化(Context $上下文) {

        super($上下文);
        
        new 标题栏($上下文, 应用.取应用名() + " - 初始化")
            .置标签("标题栏")
            .加入到(this);

        线性布局 $布局 = new 底层($上下文)
            .置标签("布局")
            .置填充("16dp")
            .置方向("水平")
            .置重力("中间垂直")
            .加入到(this);

        new 进度条($上下文)
            .置标签("进度")
            .加入到($布局);

        new 文本控件($上下文)
            .置标签("文本")
            .置主题("默认")
            .置文本("正在初始化 ~ \n这可能需要几分钟的时间。")
            .置左填充("16dp")
            .加入到($布局);

    }

}
