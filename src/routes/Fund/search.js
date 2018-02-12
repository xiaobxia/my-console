/**
 * Created by xiaobxia on 2018/2/12.
 */
import React, {PureComponent} from 'react'
import {Modal, Form, Input, Button, Spin} from 'antd';

const FormItem = Form.Item;

class Search extends PureComponent {
  handleOk = (e) => {
    const {
      onSearch,
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
      onSearch(data)
    });
  };

  render() {
    const {
      form: {
        getFieldDecorator
      }
    } = this.props;
    return (
      <div>
        <Form layout="inline" style={{textAlign: 'center'}}>
          <FormItem label="关键词">
            {getFieldDecorator('keyword')(
              <Input.Search
                placeholder="代码/名称"
                onSearch={this.handleOk}
                enterButton
              />
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Search);
