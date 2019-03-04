# Motrix-react

全能的桌面下载工具, 支持下载 HTTP、FTP、BT、磁力链、百度网盘等资源。

## 说明

本项目是在搬砖之余，看到了 源项目 [Motrix](https://github.com/agalwood/Motrix), 源项目采用了 `Electron + Vue + VueX + Element + Aria2` 实现了此应用开发，对此很感兴趣 :smiley:，为了对相关技术的学习，将 `Vue` -> `React` 进行了重构, 实现了简易版。

非常感谢源项目作者 :heart: !!!

具体开发中 :boom: !!!

## 问题

1. 源项目打包时执行 `npm run build` 报错，无法下载对应文件。 [参考:electron-vue的正确build姿势](https://segmentfault.com/a/1190000013473230), 采用手动下载放置对应目录。

```sh
// C:/Users/windows用户/AppData/Local/
--electron
  --Cache
    electron-v4.0.6-win32-ia32.zip
    SHASUMS256.txt-4.0.6
--electron-builder
  --Cache
    --nsis
      --nsis-3.0.3.2
        解压nsis-3.0.3.2.7z 所得文件
      --nsis-resources-3.3.0
        解压nsis-resources-3.3.0.7z 所得文件
    --winCodeSign
      --winCodeSign-2.4.0
        解压winCodeSign-2.4.0.7z 所得文件
```