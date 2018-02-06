/**
 * Created by xiaobxia on 2018/1/25.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon, Row, Col} from 'antd';
import {myFundActions} from 'localStore/actions'
import qs from 'qs'
import http from 'localUtil/httpUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
const FileSaver = require('file-saver');
import FundList from './fundList'

class MyFund extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    updateLoading: false
  };

  componentWillMount() {
    this.initPage();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    console.log('将要卸载MyFund');
    // this.state.ws.close();
  }

  initPage = () => {
    this.props.myFundActions.queryMyFunds();
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }
  // 获取持仓信息
  getSumInfo = () => {
    const totalSum = this.props.myFund.myFundInfo.totalSum;
    const valuationTotalSum = this.props.myFund.myFundInfo.valuationTotalSum;
    return (
      <span style={{marginLeft: '0.5em'}}>
            <span>我的持仓金额: <a>{totalSum}</a></span>
      <span style={{marginLeft: '0.5em'}}>预估净值: <a
        className={valuationTotalSum > totalSum ? 'red-text' : 'green-text'}>{valuationTotalSum}</a></span>
      </span>
    );
  };
  // 上传
  getUploadProps = () => {
    const initPage = this.initPage;
    return {
      name: 'fundFile',
      action: http.generateUrl('upload/importMyFund'),
      headers: {
        token: window._token
      },
      onChange(info) {
        if (info.file.status === 'done') {
          if (info.file.response.success) {
            if (info.file.response.data) {
              message.warn(`有${info.file.response.data.failList.length}项失败`);
            } else {
              message.success('导入成功');
            }
            initPage();
          } else {
            message.error(info.file.response.message);
          }
        } else if (info.file.status === 'error') {
          message.error('导入失败');
        }
      }
    };
  };

  deleteMyFund = (code) => {
    http.get('fund/deleteUserFund', {fundCode: code}).then((data) => {
      if (data.success) {
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
      this.initPage();
    })
  };

  exportMyFundsHandler() {
    http.post('download/exportMyFund').then((data) => {
      let blob = new Blob([JSON.stringify(data)], {type: 'application/octet-stream,charset=UTF-8'});
      let fileName = '我的基金.json';
      FileSaver.saveAs(blob, fileName);
    })
  }

  updateFundsInfoHandler = () => {
    this.setState({updateLoading: true});
    http.get('fund/updateBaseInfo').then((data) => {
      if (data.success) {
        message.success('更新成功');
      } else {
        message.error('更新失败');
      }
      this.setState({updateLoading: false});
    })
  };

  render() {
    consoleRender('MyFund render');
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <Row style={{padding: '12px 0 0 0'}}>
              <Col span={8}>
                <Upload {...this.getUploadProps()}>
                  <Button>
                    <Icon type="upload"/> 导入我的基金
                  </Button>
                </Upload>
              </Col>
              <Col span={8} style={{lineHeight: '32px', textAlign: 'center'}}>
                <Icon type="pay-circle"/>
                {this.getSumInfo()}
              </Col>
              <Col span={8} style={{textAlign: 'right'}}>
                <Button.Group>
                  <Button onClick={this.exportMyFundsHandler}>
                    添加基金
                  </Button>
                  <Button onClick={this.exportMyFundsHandler}>
                    导出我的基金
                  </Button>
                </Button.Group>
              </Col>
            </Row>
          </PageHeader>
          <div className="content-card-wrap">
            <FundList
              dataSource={this.props.myFund.myFundList}
              onDeleteHandler={this.deleteMyFund}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}


const mapStateToProps = state => {
  return {
    myFund: state.myFund
  }
};

const mapDispatchToProps = dispatch => ({
  //action在此为引入
  myFundActions: bindActionCreators(myFundActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyFund));
