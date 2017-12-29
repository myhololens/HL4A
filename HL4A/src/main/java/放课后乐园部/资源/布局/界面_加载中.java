package 放课后乐园部.资源.布局;

import android.content.*;
import 放课后乐园部.视图.*;
import 放课后乐园部.基本.*;

public class 界面_加载中 extends 线性布局 {

    public 文本控件 文本对象;
    
    public 界面_加载中(Context $上下文) {
        super($上下文);
        置填充("24dp");
        置宽度("最大");
        置高度("自动");
        置方向("最大");
        
        线性布局 $布局 = new 线性布局($上下文)
            .置标签("布局")
            .置背景(颜色.白色)
            .置填充("16dp")
            .置方向("水平")
            .置重力("中间垂直")
            .加入到(this);

        new 进度条($上下文)
            .置标签("进度")
            .加入到($布局);

        文本对象 = new 文本控件($上下文)
            .置标签("文本")
            .置左填充("16dp")
            .加入到($布局);
        
    }

}
