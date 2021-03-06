import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Icon} from 'antd';
import styles from './LeftMenu.module.css';
import AddTask from '../pages/AddTask'
import About from '../pages/About'

class LeftMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addTaskVisible: false,
      aboutVisible: false
    }
  }

  handleClickPlus() {
    if(this.state.addTaskVisible) {
      this.setState({addTaskVisible: false})
    } else {
      this.setState({addTaskVisible: true})
    }
  }

  handleClickAbout() {
    if(this.state.aboutVisible) {
      this.setState({aboutVisible: false})
    } else {
      this.setState({aboutVisible: true})
    }
  }

  render() {
    return (
      <div className={styles.leftMenu}>
        <div className={styles.topIcon}>
          <Link to={"/"} replace>
            <p className={styles.taskListIcon}><Icon type="ordered-list"/></p>
          </Link>
          <p className={styles.addIcon} onClick={this.handleClickPlus.bind(this)}><Icon type="plus" /></p>  
        </div>
        <div className={styles.bottomIcon}>
          <Link to={"/setting"} replace>
            <p className={styles.settingIcon}><Icon type="setting" /></p>
          </Link>
          <p className={styles.aboutIcon} onClick={this.handleClickAbout.bind(this)}><Icon type="question-circle" /></p>
        </div>
        {this.state.addTaskVisible ? <AddTask addTaskVisible={this.state.addTaskVisible} showAddTaskModel={this.handleClickPlus.bind(this)}/> : null}
        {this.state.aboutVisible ? <About aboutVisible={this.state.aboutVisible} showAboutModel={this.handleClickAbout.bind(this)}/> : null}
      </div>
    )
  }
}

export default LeftMenu;