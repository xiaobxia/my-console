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
import numberUtil from 'localUtil/numberUtil';
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
  }

  initPage = () => {
    this.props.myFundActions.queryMyFunds();
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

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
          <span style={{marginLeft: '0.5em'}}>预估当日盈亏: <a
            className={valuationTotalSum > totalSum ? 'red-text' : 'green-text'}>{`${numberUtil.keepTwoDecimals(valuationTotalSum - totalSum)}(${numberUtil.countDifferenceRate(valuationTotalSum, totalSum)}%)`}</a></span>
        </p>
        <p>估算时间：{myFundInfo.valuationDate || ''}</p>
      </div>
    );
  };

  editHandler = (data) => {
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

  countSum = (data, key) => {
    let sum = 0;
    data.forEach((item) => {
      sum += item[key];
    });
    return numberUtil.keepTwoDecimals(sum);
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
            <FundList
              dataSource={myFund.myFundList}
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
