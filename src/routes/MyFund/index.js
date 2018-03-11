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
import http from 'localUtil/httpUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
const FileSaver = require('file-saver');
import FundList from './fundList'
import AddModal from './addModal'

class MyFund extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    updateLoading: false,
    addModal: false
  };

  componentWillMount() {
    this.initPage();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.props.myFundActions.initStore();
    console.log('将要卸载MyFund');
    // this.state.ws.close();
  }

  initPage = () => {
    this.props.myFundActions.queryMyFunds();
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  getRate = (valuation, netValue) => {
    if (netValue === 0) {
      return 0;
    }
    return parseInt(10000 * (valuation - netValue) / netValue) / 100;
  };

  // 获取持仓信息
  getSumInfo = () => {
    const myFundInfo = this.props.myFund.myFundInfo;
    const totalSum = myFundInfo.totalSum || 0;
    const valuationTotalSum = myFundInfo.valuationTotalSum || 0;
    return (
      <div>
        <p>
          <Icon type="pay-circle"/>
          <span style={{marginLeft: '0.5em'}}>我的持仓金额: <a>{totalSum}</a></span>
          <span style={{marginLeft: '0.5em'}}>预估盈亏: <a
            className={valuationTotalSum > totalSum ? 'red-text' : 'green-text'}>{`${valuationTotalSum - totalSum}(${this.getRate(valuationTotalSum, totalSum)}%)`}</a></span>
        </p>
        <p>估算时间：{myFundInfo.valuationDate ? new Date(myFundInfo.valuationDate).toLocaleString() : ''}</p>
      </div>
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

  countChangeHandler = (code, count) => {
    http.post('fund/updateUserFund', {code, count}).then((data) => {
      if (data.success) {
        message.success('更新成功');
      } else {
        message.error('更新失败');
      }
      this.initPage();
    })
  };

  deleteMyFund = (code) => {
    http.get('fund/deleteUserFund', {code}).then((data) => {
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

  openModalHandler = () => {
    this.setState({
      addModal: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      addModal: false
    });
  };

  addFund = (code, count) => {
    return http.post('fund/addUserFund', {code, count}).then((data) => {
      if (data.success) {
        this.initPage();
      }
      return data;
    });
  };

  render() {
    consoleRender('MyFund render');
    const title = this.getTitle();
    const myFund = this.props.myFund;
    const modalProps = {
      onClose: this.closeModalHandler,
      onAdd: this.addFund
    };
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <Row className="page-header-content">
              <Col span={8}>
                <Upload {...this.getUploadProps()}>
                  <Button>
                    <Icon type="upload"/> 导入我的基金
                  </Button>
                </Upload>
              </Col>
              <Col span={8} style={{lineHeight: '32px', textAlign: 'center'}}>
                {this.getSumInfo()}
              </Col>
              <Col span={8} style={{textAlign: 'right'}}>
                <Button.Group>
                  <Button onClick={this.openModalHandler}>
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
              dataSource={myFund.myFundList}
              onDeleteHandler={this.deleteMyFund}
              tableLoading={myFund.tableLoading}
              onCountChangeHandler={this.countChangeHandler}
            />
          </div>
          {this.state.addModal && <AddModal {...modalProps}/>}
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
