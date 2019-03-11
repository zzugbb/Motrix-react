import React, { Component } from 'react';
import { Modal, Input, Button } from 'antd';
import styles from './index.module.css';

const curWin = window.electron.remote.getCurrentWindow();
const dialog = window.electron.remote.dialog 

const { TextArea } = Input;

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

  // 重命名
  handleLinkNameChange = (e) => {
    this.setState({
      linkName: e.target.value
    })
  }

  //点击打开文件夹且选择下载路径
  handleClickLinkPath = () => {
    dialog.showOpenDialog({ properties: ['openDirectory']}, (filePaths) => {
      this.setState({
        linkPath: filePaths[0]
      })
    })
  }


  handleOk = (e) => {
    
    if (this.state.linkValue) {
      //下载资源而不进行导航，将触发session 的 will-download
      curWin.webContents.downloadURL(this.state.linkValue);
    
      curWin.webContents.session.on('will-download', (event, item, webContents) => {

        // 设置保存路径,使Electron不提示保存对话框
        let tempLink = '';
        if (this.state.linkPath) {
          tempLink = this.state.linkPath + "\\";
        } else { //默认Downloads目录
          tempLink = "C:\\Users\\Administrator\\Downloads\\"
        }

        if(this.state.linkName) {
          tempLink = tempLink + this.state.linkName;
        } else { // 默认源文件名
          tempLink = tempLink + item.getFilename();
        }
        item.setSavePath(tempLink);
        

        //当下载正在执行但还没完成的时候发出。
        item.on('updated', (event, state) => {
          if (state === 'interrupted') {
            console.log('Download is interrupted but can be resumed')
          } else if (state === 'progressing') {
            if (item.isPaused()) {
              console.log('Download is paused')
            } else {
              console.log(`Received bytes: ${item.getReceivedBytes()}`)
            }
          }
        })
        //当下载文件已经到本地时发出
        item.once('done', (event, state) => {
          if (state === 'completed') {
            console.log('Download successfully')
          } else {
            console.log(`Download failed: ${state}`)
          }
        })

      })
    } 

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
          <div className={styles.taskName}>
            <span>重命名</span>
            <Input placeholder="选填，若修改必须保留文件后缀，防止格式错误" value={this.state.linkName} onChange={this.handleLinkNameChange}/>
          </div>
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