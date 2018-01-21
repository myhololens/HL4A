package 放课后乐园部.安卓.资源.布局;

import android.content.*;
import 放课后乐园部.安卓.图形.*;
import 放课后乐园部.安卓.视图.*;

public class 布局_加载中 extends 线性布局 {

    public 文本视图 文本对象;

    public 布局_加载中(Context $上下文) {
        super($上下文);
        置高度("自动");
        置填充("16dp");

        线性布局 $布局 = new 线性布局(this);
		$布局.置标签("布局");
		$布局.置背景(颜色.白色);
		$布局.置方向("水平");
		$布局.置重力("中间垂直");

        进度圈 $进度圈 = new 进度圈($布局);
		$进度圈.置标签("进度");

        文本对象 = new 文本视图($布局);
		文本对象.置标签("文本");
		文本对象.置左填充("16dp");
		文本对象.置文本("这可能需要几分钟的时间 ~");
		
		进度条 $进度条 = new 进度条(this);
		$进度条.置自动(true);

    }

}
