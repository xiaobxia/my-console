/**
 * Created by xiaobxia on 2018/2/23.
 */
import React, {PureComponent} from 'react'
import {Button, message} from 'antd';
import http from 'localUtil/httpUtil';

class OptionBlock extends PureComponent {
  state = {
    updateBaseInfoLoading: false,
    updateValuationLoading: false,
    betterValuationLoading: false,
    updateRecentNetValueLoading: false,
    addRecentNetValueLoading: false
  };

  updateBaseInfoHandler = () => {
    this.setState({updateBaseInfoLoading: true});
    http.get('analyze/updateBaseInfo').then(() => {
      this.setState({updateBaseInfoLoading: false});
      message.success('成功');
    })
  };

  updateValuationHandler = () => {
    this.setState({updateValuationLoading: true});
    http.get('analyze/updateValuation').then(() => {
      this.setState({updateValuationLoading: false});
      message.success('成功');
    })
  };
  betterValuationHandler = () => {
    this.setState({betterValuationLoading: true});
    http.get('analyze/betterValuation').then(() => {
      this.setState({betterValuationLoading: false});
      message.success('成功');
    })
  };
  updateRecentNetValueHandler = () => {
    this.setState({updateRecentNetValueLoading: true});
    http.get('analyze/updateRecentNetValue').then(() => {
      this.setState({updateRecentNetValueLoading: false});
      message.success('成功');
    })
  };
  addRecentNetValueHandler = () => {
    this.setState({addRecentNetValueLoading: true});
    http.get('analyze/addRecentNetValue').then(() => {
      this.setState({addRecentNetValueLoading: false});
      message.success('成功');
    })
  };

  render() {
    const state = this.state;
    return (
      <Button.Group>
        <Button onClick={this.updateValuationHandler} loading={state.updateValuationLoading}>
          更新基金估值
        </Button>
        <Button onClick={this.updateBaseInfoHandler} loading={state.updateBaseInfoLoading}>
          更新基金净值
        </Button>
        <Button onClick={this.betterValuationHandler} loading={state.betterValuationLoading}>
          更新估值源
        </Button>
        <Button onClick={this.addRecentNetValueHandler} loading={state.addRecentNetValueLoading}>
          添加新净值
        </Button>
        <Button onClick={this.updateRecentNetValueHandler} loading={state.updateRecentNetValueLoading}>
          更新近期净值
        </Button>
      </Button.Group>
    );
  }
}

export default OptionBlock;
