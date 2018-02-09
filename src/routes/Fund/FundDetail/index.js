/**
 * Created by xiaobxia on 2018/2/7.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, message, Button, Icon, Row, Col, Tag} from 'antd';
import {fundActions} from 'localStore/actions'
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../../router'
import Recent from './recent'

class FundDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    redirectCount: 0,
    updateLoading: false,
    addModal: false
  };

  componentWillMount() {
    this.initPage();
  }

  initPage = () => {
    const code = this.props.match.params.code;
    const {fundActions} = this.props;
    fundActions.queryFund(code).then((data) => {
    });
    fundActions.queryFundAnalyzeRecent(code).then((data) => {
    });
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  getFundSellTag = (sell) => {
    if (sell) {
      return <Tag color="blue">可购</Tag>
    } else {
      return <Tag color="red">不可购</Tag>
    }
  };

  getRate = (valuation, netValue) => {
    if (netValue === 0) {
      return 0;
    }
    return parseInt(10000 * (valuation - netValue) / netValue) / 100;
  };

  getValuationRate = (valuation = 0, netValue = 0) => {
    return <span
      className={valuation > netValue ? 'red-text' : 'green-text'}>{`${valuation}(${this.getRate(valuation, netValue)}%)`}</span>
  };

  render() {
    const {
      currentFund,
      currentFundAnalyzeRecent
    } = this.props.fund;
    consoleRender('Fund render');
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <Row className="page-header-content">
              <div className="page-header-title" style={{lineHeight: '2.1'}}>基本信息</div>
              <div className="page-header-title-side" style={{left: '120px'}}>
                <p>
                  <span className="info-item">基金代码：{currentFund.code}</span>
                  <span className="info-item">基金名称：{currentFund.name}</span>
                  <span className="info-item">净值：{currentFund.net_value}</span>
                  <span
                    className="info-item">净值日期：{currentFund.net_value_date ? currentFund.net_value_date.substring(0, 10) : '---'}</span>
                  <span className="info-item">{this.getFundSellTag(currentFund.sell)}</span>
                </p>
                <p>
                  <span
                    className="info-item">估值：{this.getValuationRate(currentFund.valuation, currentFund.net_value)}</span>
                  <span
                    className="info-item">估值源：{currentFund.valuationSource}</span>
                  <span
                    className="info-item">估值日期：{currentFund.valuation_date ? new Date(currentFund.valuation_date).toLocaleString() : '---'}</span>
                </p>
              </div>
            </Row>
          </PageHeader>
          <div className="content-card-wrap no-padding">
            <Recent
              recentData={currentFundAnalyzeRecent}
            />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FundDetail));
