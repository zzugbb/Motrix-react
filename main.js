const { app, BrowserWindow, Menu} = require('electron');
const env = process.argv[3];
const menuTemplate = require('./electron-react/menu-config.js')

// 浏览器引用
let mainWindow;

// 创建浏览器窗口函数
let createWindow = () => {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  if(env === "dev") { 
    mainWindow.loadURL("http://localhost:3000/")
  } else if (env === "bvuild") { 
    mainWindow.loadFile('./build/index.html/');
  }

  //打开开发者工具
  //mainWindow.webContents.openDevTools({mode:'bottom'});

  // 当window被关闭时，除掉window的引用
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  //菜单创建
  const menu = Menu.buildFromTemplate(menuTemplate.menuTemplate);
  Menu.setApplicationMenu(menu);
};

// 当app准备就绪时候开启窗口
app.on('ready', createWindow);

//当全部窗口都被关闭之后推出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 在macos上，单击dock图标并且没有其他窗口打开的时候，重新创建一个窗口
app.on('activate', () => {
  if (window == null) {
    createWindow();
  }
});