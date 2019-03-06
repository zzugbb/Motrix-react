import React, { Component } from 'react';
import { Icon } from 'antd';
import LeftMenu from '../../components/LeftMenu'
import styles from './index.module.css';
import TopMenu from '../../components/TopMenu'

class Setting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liVisible: 2
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
          <p>偏好设置</p>
          <ul className={styles.taskUl}>
            <li className={this.state.liVisible === 1 ? styles.taskActiveLi : ""} onClick={() =>this.handleClickLi(1)}>
              <Icon type="info-circle" />
              <span>基础设置</span>
            </li>
            <li className={this.state.liVisible === 2 ? styles.taskActiveLi : ""} onClick={() =>this.handleClickLi(2)}>
              <Icon type="tool"/>
              <span>进阶设置</span>
            </li>
            <li className={this.state.liVisible === 3 ? styles.taskActiveLi : ""} onClick={() =>this.handleClickLi(3)}>
              <Icon type="experiment"/>
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
