import React, { Component } from 'react';
import { Modal, Input, Button } from 'antd';
import styles from './index.module.css';
import {connect} from 'react-redux';
import {AddTaskFunction} from './index.redux.js';

const curWin = window.electron.remote.getCurrentWindow();
const dialog = window.electron.remote.dialog 
const session = curWin.webContents.session;

const { TextArea } = Input;

@connect(
  state => state,
  {AddTaskFunction}
)


class AddTask extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.addTaskVisible,
      linkValue: "",
      linkName: "",
      linkPath: ""
    }
  }

  //链接地址改变
  handleLinkValueChange = (e) => {
    this.setState({
      linkValue: e.target.value
    })
  }

  // // 重命名
  // handleLinkNameChange = (e) => {
  //   this.setState({
  //     linkName: e.target.value
  //   })
  // }

  //点击打开文件夹且选择下载路径
  handleClickLinkPath = () => {
    dialog.showOpenDialog({ properties: ['openDirectory']}, (filePaths) => {
      this.setState({
        linkPath: filePaths[0]
      })
    })
  }


  handleOk = (e) => {

    let tempLink = "C:\\Users\\Administrator\\Downloads\\";
    let tempName = "";
  
    if (this.state.linkPath) {
      tempLink = this.state.linkPath + "\\";
    } 
 
    if (this.state.linkValue) {

      let tempArray = this.state.linkValue.split('/');
      tempName = tempArray[tempArray.length-1];

      curWin.webContents.downloadURL(this.state.linkValue);
      session.setDownloadPath(tempLink);
      let fileInfo = {
        fileName: tempName,
        fileLink: tempLink
      }
      //此处下载功能待完善，应该放在回调里。
      const _this = this
      setTimeout(function(){
        _this.props.AddTaskFunction(fileInfo);
      }, 3000)
    };

    this.setState({
      visible: false,
    });

    if (this.props.showAddTaskModel) {
      this.props.showAddTaskModel()
    }
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    if (this.props.showAddTaskModel) {
      this.props.showAddTaskModel()
    }
  }

  render() {
    return (
      <div>
        <Modal
          title="链接任务"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="提交"
          cancelText="取消"
        >
          <TextArea placeholder="请输入链接，需保证地址正确" autosize={{minRows: 2}} value={this.state.linkValue} 
            onChange={this.handleLinkValueChange}/>
          {/* <div className={styles.taskName}>
            <span>重命名</span>
            <Input placeholder="选填，若修改必须保留文件后缀，防止格式错误" value={this.state.linkName} onChange={this.handleLinkNameChange}/>
          </div> */}
          <div className={styles.taskPath}>
            <span>存储路径</span>
            <Input placeholder="Download" value={this.state.linkPath}/>
            <Button type="default" icon="folder-open" 
              onClick={this.handleClickLinkPath}></Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddTask;