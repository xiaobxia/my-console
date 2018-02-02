/**
 * Created by xiaobxia on 2018/1/25.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon, Row, Col} from 'antd';
import {fundActions} from 'localStore/actions'
import qs from 'qs'
import http from 'localUtil/httpUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
import FundList from './fundList'

class Fund extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    type: 1,
    user: {name: 'xiaobxia'},
    updateLoading: false
  };

  componentWillMount() {
    this.initPage();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    console.log('将要卸载Fund');
    // this.state.ws.close();
  }

  initPage = () => {

  };

  jumpToDashboard = () => {
    //路由跳转
    let query = qs.stringify({
      name: 'xiaobxia'
    });
    this.props.history.push('/dashboard?' + query);
  };

  changeName = () => {
    //react建议把state当做不可变
    this.setState((preState) => {
      //this.state和preState是相同的引用
      let user = preState.user;
      user.name = 'xiaobxia1';
      //是一种merge的行为
      return {
        user: user
      }
    });
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  getSumInfo = () => {
    const totalSum = this.props.fund.fundInfo.totalSum;
    const valuationTotalSum = this.props.fund.fundInfo.valuationTotalSum;
    return (
      <span style={{marginLeft: '0.5em'}}>
            <span>我的持仓金额: <a>{totalSum}</a></span>
      <span style={{marginLeft: '0.5em'}}>预估净值: <a
        className={valuationTotalSum > totalSum ? 'red-text' : 'green-text'}>{valuationTotalSum}</a></span>
      </span>
    );
  };

  deleteFund = (code) => {
    http.get('fund/deleteUserFund', {fundCode: code}).then((data) => {
      if (data.success) {
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
      this.initPage();
    })
  };


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
    consoleRender('Fund render');
    //query在search里
    let query = qs.parse(this.props.location.search.slice(1));
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <Button onClick={this.updateFundsInfoHandler} loading={this.state.updateLoading}
                    disabled={this.state.updateLoading}>
              更新基金
            </Button>
          </PageHeader>
          <div className="content-card-wrap">
            {/*<FundList*/}
              {/*dataSource={this.props.fund.fundList}*/}
              {/*onDeleteHandler={this.deleteFund}*/}
            {/*/>*/}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}


const mapStateToProps = state => {
  return {
    fund: state.fund
  }
};

const mapDispatchToProps = dispatch => ({
  //action在此为引入
  fundActions: bindActionCreators(fundActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Fund));
