import React, { Component } from 'react';
import { Modal, Input, Icon } from 'antd';
import styles from './index.module.css';

const { TextArea } = Input;

class AddTask extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.addTaskVisible
    }
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    if (this.props.showAddTaskModel) {
      this.props.showAddTaskModel()
    }
  }

  handleCancel = (e) => {
    console.log(e);
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
          <TextArea placeholder="请输入链接" autosize={{minRows: 2}} />
          <div className={styles.taskName}>
            <span>重命名</span>
            <Input placeholder="选填" />
          </div>
          <div className={styles.taskPath}>
            <span>存储路径</span>
            <Input placeholder="Downloads" 
              suffix={<Icon type="folder-open" />}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddTask;