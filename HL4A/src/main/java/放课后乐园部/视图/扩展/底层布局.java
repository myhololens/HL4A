package 放课后乐园部.视图.扩展;

import android.content.*;
import 放课后乐园部.视图.*;
import android.view.*;

public class 底层布局 extends 涟漪布局 {
    
    public 线性布局 底层;
    
    public 底层布局(Context $上下文) {
        super($上下文);
        底层 = new 线性布局($上下文,this);
    }

    @Override
    public void 加入子元素(View $子元素) {
        底层.加入子元素($子元素);
    }
    
}
