# 开发中的事项备忘

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

## create-react-app

```sh
//create-react-app 2.0 以上版本
npx create-react-app my-app
```

已集成了 css-module, 写样式文件只需命名为 `.module.css` 即可。

## antd 按需加载

```sh
npm install antd --save
npm install babel-plugin-import --save-dev
```

```js
//webpack.config.js---349行
//增加此配置，注意style:true 动态加载；style:css加载生成后的css文件
['import', { libraryName: 'antd', style: 'css' }],
```

## 装饰器的配置

由于 create-react-app 使用的 `babel >= 7.x`, 则配置装饰器的方法改变

```js
npm install --save-dev @babel/plugin-proposal-decorators

//package.json中babel项增加配置
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }]
]
```

## electron 在 react 中使用

无法直接在 `react` 中使用 `node` 模块。

```html
//index.html中增加如下
<script>global.electron = require('electron');</script>
```

```js
//react.js 中直接使用
const curWin = window.electron.remote.getCurrentWindow();
```

## electron 使用 react 调试工具

[React DevTools Extension for Electron](https://www.npmjs.com/package/electron-react-devtools)

```js
npm install --save-dev electron-react-devtools
//控制台输入，安装后按f5刷新即可。
require('electron-react-devtools').install()
```

## electron 使用 redux 调试工具

```js
//main.js
//路径为浏览器安装 redux-devtools-extension 插件的路径， lmhkpmbekcpmknklioeibfkpmmfibljd 是 插件id
BrowserWindow.addDevToolsExtension('C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.17.0_0\\');

//index.js
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension(): f => f;
const store = createStore(rootReducer, compose(applyMiddleware(thunk), reduxDevtools));
```