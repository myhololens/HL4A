package 间.安卓.工具;

import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.webkit.MimeTypeMap;
import 间.工具.字符;

public class 文件 extends 间.工具.文件 {

    protected static void 初始化() {
        文件.替换地址("%", 取存储目录(""));
        文件.替换地址("$", 取数据目录(""));
        文件.替换地址("#", 取自身目录(""));
    }
    
    public static String 取URI路径(Uri uri) {
        if (null == uri) return null;
        final String scheme = uri.getScheme();
        String data = null;
        if (scheme == null)
            data = uri.getPath();
        else if (ContentResolver.SCHEME_FILE.equals(scheme)) {
            data = uri.getPath();
        } else if (ContentResolver.SCHEME_CONTENT.equals(scheme)) {
            Cursor cursor = 环境.取应用().getContentResolver().query(uri,new String[]{MediaStore.Images.ImageColumns.DATA}, null, null, null);
            if (null != cursor) {
                if (cursor.moveToFirst()) {
                    int index = cursor.getColumnIndex(MediaStore.Images.ImageColumns.DATA);
                    if (index > -1) {
                        data = cursor.getString(index);
                    }
                }
                cursor.close();
            }
        }
        return data;
    }

    
    
    public static boolean 自身变更() {
        return 有变更(应用.取安装包位置());
    }

    public static boolean 自身变更(String $文件) {
        return 有变更(应用.取安装包位置(),$文件);
    }
    
    public static boolean 有变更(String $地址) {
        return 有变更($地址,"$_默认变更");
    }

    public static boolean 有变更(String $地址,String $文件) {
        Long $上次 =  new Long(文件.取文件对象($文件,$地址).lastModified());
        Long $记录 = (Long)设置.读取($文件, $地址);
        设置.保存($文件, $地址, $上次);
        return $记录 == null || !$上次.equals($记录);
    }

    public static void 打开(String $地址) {
        Intent $意图 = new Intent(Intent.ACTION_VIEW);
        $意图.setDataAndType(Uri.fromFile(文件.取文件对象($地址)), 取MIME($地址));
        $意图.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        环境.取应用().startActivity($意图);
    }

    public static String 取MIME(String $地址) {
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(取后缀($地址));
    }

    public static String 取存储目录() {
        return Environment.getExternalStorageDirectory().getPath();
    }

    public static String 取存储目录(String... $地址) {
        return 取存储目录() + "/" + 字符.分解($地址, "/");
    }

    public static String 取数据目录() {
        return 环境.取应用().getFilesDir().getParent();
    }

    public static String 取数据目录(String... $地址) {
        return 取数据目录() + "/" + 字符.分解($地址, "/");
    }

    public static String 取下载缓存目录() {
        return Environment.getDownloadCacheDirectory().getPath();
    }

    public static String 取下载缓存目录(String... $地址) {
        return 取下载缓存目录() + "/" + 字符.分解($地址, "/");
    }

    public static String 取缓存目录() {
        return 环境.取应用().getCacheDir().getPath();
    }

    public static String 取缓存目录(String... $地址) {
        return 取数据目录() + "/" + 字符.分解($地址, "/");
    }

    public static String 取存储数据目录() {
        return 环境.取应用().getExternalCacheDir().getParent();
    }

    public static String 取存储数据目录(String... $地址) {
        return 取存储数据目录() + "/" + 字符.分解($地址, "/");
    }

    public static String 取存储缓存目录() {
        return 环境.取应用().getExternalCacheDir().getPath();
    }

    public static String 取存储缓存目录(String... $地址) {
        return 取存储数据目录() + "/" + 字符.分解($地址, "/");
    }

    public static String 取自身目录() {
        return 取数据目录("自身");
    }

    public static String 取自身目录(String... $地址) {
        return 取自身目录() + "/" + 字符.分解($地址, "/");
    }

}
