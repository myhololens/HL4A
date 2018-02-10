package 间.数据;

import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import java.io.IOException;
import 间.工具.字符;
import 间.工具.文件;

public class YAML {

    private static final YAMLMapper YAML转换 = new YAMLMapper();

    public static String 转换(Object $对象) {
        if ($对象 == null) return null;
        try {
            return YAML转换.writeValueAsString($对象);
        } catch (IOException $错误) {}
        return null;
    }

    public static Object 解析(String $YAML,Class<?> $类) {
        if ($YAML == null || $类 == null) return null;
        try {
            return YAML转换.readValue($YAML, $类);
        } catch (IOException $错误) {}
        return null;
    }
    
    public static Object 读取(String $地址,Class<?> $类) {
        if (!文件.是文件($地址)) return null;
        return 解析(字符.读取($地址), $类);
    }

    public static void 保存(String $地址,Object $对象) {
        字符.保存($地址, 转换($对象));
    }

}
