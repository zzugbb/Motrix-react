# Motrix-react

桌面下载工具。

## 说明

本项目是在搬砖之余，看到了 源项目 [Motrix](https://github.com/agalwood/Motrix), 源项目采用了 `Electron + Vue + VueX + Element + Aria2` 实现了此应用开发，对此很感兴趣 :smiley:，为了对相关技术的学习，将 `Vue` -> `React` 进行了重构, 实现了简易版。

非常感谢源项目作者 :heart: !!!

具体开发中 :boom: !!!

## 技术栈

本项目采用 `Electron + react + react-router + redux + antd` 实现。

关于下载采用了 Electron 的 `contents.downloadURL(url)`, `dialog.showOpenDialog()` 相关 api 实现了简易版的链接下载。

## 实现程度说明

如上所述，本项目只是进行了一个很简易的实现，还存在很多问题，主要是对相关技术栈整个流程的一次体验。

## 本地开发

```sh
git clone https://github.com/zzugbb/Motrix-react.git
cd Motrix-react
yarn //安装依赖

yarn start //启动应用，开发时热更新
yarn estart //启动桌面程序
```

## 打包

react 打包

```sh
yarn build
```

electron 打包

```sh
yarn electron-packager
```

[electron打包：electron-packager及electron-builder两种方式实现（for Windows）](https://segmentfault.com/a/1190000013924153)

## 打包后的源文件加密

```js
npm install asar -g

//在生成的应用的resources文件夹下执行下面命令
asar pack ./app app.asar
//执行完毕后在resources文件夹下可以看见生成的app.asar文件，此时可以把resources目录下的app文件夹删除,实现了源文件加密
```

## 开发中的备忘

[详见](./README_DEV.md)