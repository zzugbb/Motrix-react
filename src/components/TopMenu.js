import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './TopMenu.module.css';
const curWin = window.electron.remote.getCurrentWindow();

class TopMenu extends Component {

  handleClickMinus() {
    curWin.minimize()
  }

  handleClickFullscreen() {
    if (curWin.isMaximized()) {
      curWin.unmaximize()
    } else {
      curWin.maximize()
    }
  }

  handleClickClose() {
    curWin.close()
  }

  render() {
    return (
      <div className={styles.topMenuDiv}>
        <p onClick={this.handleClickMinus.bind(this)}><Icon type="minus"/></p>
        <p onClick={this.handleClickFullscreen.bind(this)}><Icon type="fullscreen"/></p>
        <p onClick={this.handleClickClose.bind(this)}><Icon type="close"/></p>
      </div>
    )
  }
}

export default TopMenu;