import React, { Component } from 'react';
import { Icon, Progress } from 'antd';
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import styles from './index.module.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liVisible: 3
    }
  }

  handleClickLi(index) {
    this.setState({
      liVisible: index
    })
  }


  render() {
    return (
      <div style={{display: "flex"}}>
        <LeftMenu/>
        <div className={styles.subnav}>
          <p>任务列表</p>
          <ul className={styles.taskUl}>
            <li className={this.state.liVisible === 1 ? styles.taskActiveLi : ""} onClick={() =>this.handleClickLi(1)}>
              <Icon type="download" />
              <span>下载中</span>
            </li>
            <li className={this.state.liVisible === 2 ? styles.taskActiveLi : ""} onClick={() =>this.handleClickLi(2)}>
              <Icon type="pause" />
              <span>等待中</span>
            </li>
            <li className={this.state.liVisible === 3 ? styles.taskActiveLi : ""} onClick={() =>this.handleClickLi(3)}>
              <Icon type="stop" />
              <span>已完成</span>
            </li>
          </ul>
        </div>
        <div style={{flex: 1}}>
          <TopMenu/>
          <div className={styles.mainDiv}>
            <div className={this.state.liVisible === 1 ? styles.divShow : styles.divHide}>
              <p className={styles.line}>下载中</p>
              <span>然而并没有写内容。。。</span>
            </div>
            <div className={this.state.liVisible === 2 ? styles.divShow : styles.divHide}>
              <p className={styles.line}>等待中</p>
              <span>然而并没有写内容。。。</span>
            </div>
            <div className={this.state.liVisible === 3 ? styles.divShow : styles.divHide}>
              <p className={styles.line}>已完成</p>
              <ul className={styles.finishUl}>
                <li>
                  <p className={styles.fileName}>avatar.png</p>
                  <div className={styles.iconDiv}>
                    <Icon type="folder-open" />
                  </div>
                  <Progress percent={100} />
                  <p className={styles.fileSize}>31.6kb/31.6kb</p>
                </li>
                <li>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
