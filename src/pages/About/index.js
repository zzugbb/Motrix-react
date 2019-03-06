import React, { Component } from 'react';
import { Modal, Icon } from 'antd';

class About extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.aboutVisible
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    if (this.props.showAboutModel) {
      this.props.showAboutModel()
    }
  }

  render() {
    return (
      <div>
        <Modal
          title="MO-React"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={
           <div style={{textAlign:"left"}}>
              <Icon type="copyright"/>&nbsp;2019 MO-React. Created by zzugbb. All rights reserved.
           </div>
          }
        >
        <div style={{padding: 30}}>
          还没想好写啥。。
        </div>
        </Modal>
      </div>
    );
  }
}

export default About;