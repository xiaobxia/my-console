/**
 * Created by xiaobxia on 2018/1/31.
 */
import React, {PureComponent} from 'react'
import { Modal, Button } from 'antd';

class AddModal extends PureComponent {
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = (e) => {

  };
  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
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

export default AddModal;
