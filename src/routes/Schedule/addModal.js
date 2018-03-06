/**
 * Created by xiaobxia on 2018/1/31.
 */
import React, {PureComponent} from 'react'
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class AddModal extends PureComponent {
  handleOk = (e) => {
    const {
      onClose,
      onAdd,
      form: {
        validateFields,
        getFieldsValue
      }
    } = this.props;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      let data = {
        ...getFieldsValue()
      };
      onAdd(data.name, data.describe).then((res) => {
        if (res.success) {
          onClose();
        }
      });
    });
  };
  handleCancel = (e) => {
    this.props.onClose();
  };

  render() {
    const {
      form: {
        getFieldDecorator
      }
    } = this.props;
    return (
      <div>
        <Modal
          title="添加任务"
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('name', {
                rules: [
                  {required: true, message: '请输入名称'}
                ]
              })(
                <Input/>
              )}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator('describe', {
                rules: [
                  {required: true, message: '请输入描述'}
                ]
              })(
                <Input/>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(AddModal);
