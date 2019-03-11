import React, { Component } from 'react';
import { Icon } from 'antd';
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import styles from './index.module.css';

class Home extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <LeftMenu/>
        <div className={styles.subnav}>
          <p>任务列表</p>
          <ul className={styles.taskUl}>
            <li className={styles.taskActiveLi}>
              <Icon type="download" />
              <span>下载中</span>
            </li>
            <li>
              <Icon type="pause" />
              <span>等待中</span>
            </li>
            <li>
              <Icon type="stop" />
              <span>已完成</span>
            </li>
          </ul>
        </div>
        <div style={{flex: 1}}>
          <TopMenu/>
          <div className={styles.mainDiv}>
            222
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
