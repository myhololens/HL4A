package 间.安卓.资源.布局;

import android.content.*;
import android.content.res.*;
import android.graphics.drawable.*;
import 间.安卓.工具.*;
import 间.安卓.视图.*;
import 间.安卓.视图.扩展.*;

public class 布局_基本界面 extends 线性布局 {
    
    public 标题栏 标题;
    public 线性布局 底层;
    
    public 布局_基本界面(Context $上下文) {
        super($上下文);
        标题 = new 标题栏(this);
        标题.置标题(应用.取应用名());
        底层 = new 线性布局(this);
    }
    
}
