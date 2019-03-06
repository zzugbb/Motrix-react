const menuTemplate = [
  {
    "label": "文件",
    "id": "menu.file",
    "submenu": [
      { "label": "关于 Motrix-react", "id": "app.about",
        click () { require('electron').shell.openExternal('https://github.com/zzugbb/Motrix-react') }
      },
      { "type": "separator" },
      { "type": "separator" },
      { "label": "退出 Motrix", "id": "app.quit", "role": "quit" }
    ]
  },
  {
    "label": "编辑",
    "id": "menu.edit",
    "submenu": [
      { "label": "撤销", "id": "edit.undo", "role": "undo" },
      { "label": "重做", "id": "edit.redo", "role": "redo" },
      { "type": "separator" },
      { "label": "剪切", "id": "edit.cut", "role": "cut" },
      { "label": "复制", "id": "edit.copy", "role": "copy" },
      { "label": "黏贴", "id": "edit.paste", "role": "paste" },
      { "label": "删除", "id": "edit.delete", "role": "delete" },
      { "label": "全选", "id": "edit.select-all", "role": "selectall" }
    ]
  },
  {
    "label": "窗口",
    "role": "window",
    "id": "menu.window",
    "submenu": [
      { "label": "重新加载", "id": "window.reload", "role": "reload" },
      { "label": "关闭", "id": "window.close", "role": "close" },
      { "label": "最小化", "id": "window.minimize", "role": "minimize" },
      { "label": "放大", "id": "window.zoom", "role": "zoom" },
      { "label": "进入全屏幕", "id": "window.toggle-fullscreen", "role": "togglefullscreen" },
      { "type": "separator" },
      { "label": "前置全部窗口", "id": "window.front", "role": "front" }
    ]
  },
  {
    "label": "帮助",
    "role": "help",
    "id": "menu.help",
    "submenu": [
      { "label": "发行说明...", "id": "help.release-notes",
        click () { require('electron').shell.openExternal('https://github.com/zzugbb/Motrix-react/releases') }
      },
      { "type": "separator" },
      { "label": "报告问题", "id": "help.report-problem", 
        click () { require('electron').shell.openExternal('https://github.com/zzugbb/Motrix-react/issues') }
      },
      { "type": "separator" },
      { "label": "开发者工具", "id": "help.toggle-dev-tools", "role": "toggledevtools" }
    ]
  }
]

module.exports = {
  menuTemplate: menuTemplate
}