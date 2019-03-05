# 开发中的事项备忘

## create-react-app

```sh
//create-react-app 2.0 以上版本
npx create-react-app my-app
```

已集成了 css-module, 写样式文件只需命名为 `.module.css` 即可。

## antd 按需加载

```sh
npm install antd --save
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