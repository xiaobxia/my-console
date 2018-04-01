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
    addModal: false,
    modalType: 'add',
    record: {}
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
        <p>估算时间：{myFundInfo.valuationDate}</p>
      </div>
    );
  };

  editHandler = (data) => {
    console.log('in')
    this.setState({
      addModal: true,
      modalType: 'edit',
      record: data
    });
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

  openModalHandler = () => {
    this.setState({
      addModal: true,
      modalType: 'add',
      record: {}
    });
  };

  closeModalHandler = () => {
    this.setState({
      addModal: false
    });
  };

  addFund = (data) => {
    return http.post('fund/addUserFund', data).then((data) => {
      if (data.success) {
        this.initPage();
      }
      return data;
    });
  };

  updateFund = (data) => {
    return http.post('fund/updateUserFund', data).then((data) => {
      if (data.success) {
        this.initPage();
      }
      return data;
    });
  };

  countSum = (data) => {
    let sum = 0;
    data.forEach((item) => {
      sum += item.sum;
    });
    return sum;
  };

  render() {
    consoleRender('MyFund render');
    const title = this.getTitle();
    const myFund = this.props.myFund;
    const modalProps = {
      onClose: this.closeModalHandler,
      onUpdate: this.updateFund,
      onAdd: this.addFund,
      type: this.state.modalType,
      record: this.state.record
    };
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <Row className="page-header-content">
              <Col span={8}>
              </Col>
              <Col span={8} style={{lineHeight: '32px', textAlign: 'center'}}>
                {this.getSumInfo()}
              </Col>
              <Col span={8} style={{textAlign: 'right'}}>
                <Button.Group>
                  <Button onClick={this.openModalHandler}>
                    添加基金
                  </Button>
                </Button.Group>
              </Col>
            </Row>
          </PageHeader>
          <div className="content-card-wrap">
            <h3 className="red-text">超跌搏反：建议持仓日期7天，当前模块持仓{this.countSum(myFund.myFundList1)}</h3>
            <FundList
              dataSource={myFund.myFundList1}
              onDeleteHandler={this.deleteMyFund}
              tableLoading={myFund.tableLoading}
              onEditHandler={this.editHandler}
            />
          </div>
          <div className="content-card-wrap">
            <h3 className="red-text">高风偏追涨：建议持仓日期7天，当前模块持仓{this.countSum(myFund.myFundList2)}</h3>
            <FundList
              dataSource={myFund.myFundList2}
              onDeleteHandler={this.deleteMyFund}
              tableLoading={myFund.tableLoading}
              onEditHandler={this.editHandler}
            />
          </div>
          <div className="content-card-wrap">
            <h3 className="red-text">顺应大势：建议持仓日期14天，当前模块持仓{this.countSum(myFund.myFundList3)}</h3>
            <FundList
              dataSource={myFund.myFundList3}
              onDeleteHandler={this.deleteMyFund}
              tableLoading={myFund.tableLoading}
              onEditHandler={this.editHandler}
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
