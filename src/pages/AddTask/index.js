import React, { Component } from 'react';
import { Modal } from 'antd';

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
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default AddTask;