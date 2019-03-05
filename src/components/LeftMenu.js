import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './LeftMenu.module.css';

class LeftMenu extends Component {
  render() {
    return (
      <div className={styles.leftMenu}>
        <div className={styles.topIcon}>
          <p className={styles.taskListIcon}><Icon type="ordered-list"/></p>
          <p className={styles.addIcon}><Icon type="plus" /></p>  
        </div>
        <div className={styles.bottomIcon}>
          <p className={styles.settingIcon}><Icon type="setting" /></p>
          <p className={styles.aboutIcon}><Icon type="question-circle" /></p>
        </div>
      </div>
    )
  }
}

export default LeftMenu;