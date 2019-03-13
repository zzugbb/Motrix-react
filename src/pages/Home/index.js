import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Icon, Progress } from 'antd';
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import styles from './index.module.css';

const shell = window.electron.shell;


@connect(
  state => state
)

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liVisible: 1
    }
  }

  handleClickLi(index) {
    this.setState({
      liVisible: index
    })
  }

  handleClickOpenFolder(e) {
    console.log(e.currentTarget.getAttribute("data-value"))
    let path = e.currentTarget.getAttribute("data-value")
    shell.showItemInFolder(path);
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
                { this.props.TaskRedux.fileList.length > 0 ? 
                  this.props.TaskRedux.fileList.map(item => {
                    return (
                      <li key={item.fileName}>
                        <p className={styles.fileName}>{item.fileName}</p>
                        <div className={styles.iconDiv} data-value={item.fileLink} onClick= {this.handleClickOpenFolder.bind(this)}>
                          <Icon type="folder-open" />
                         </div>
                        <Progress percent={100} />
                      </li>
                    )
                  }) : null
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
