import React, { Component } from 'react';
import { Icon } from 'antd';
import LeftMenu from '../../components/LeftMenu'
import styles from './index.module.css';
import TopMenu from '../../components/TopMenu'

class Setting extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <LeftMenu/>
        <div className={styles.subnav}>
          <p>偏好设置</p>
          <ul className={styles.taskUl}>
            <li className={styles.taskActiveLi}>
              <Icon type="info-circle" />
              <span>基础设置</span>
            </li>
            <li>
              <Icon type="tool" />
              <span>进阶设置</span>
            </li>
            <li>
              <Icon type="experiment" />
              <span>实验室</span>
            </li>
          </ul>
        </div>
        <div style={{flex: 1}}>
          <div className={styles.mainDiv}>
            <TopMenu/>
            我还没写那！！！！意外不！！！
            <Icon type="smile" />
            <Icon type="frown" />
            <Icon type="smile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
