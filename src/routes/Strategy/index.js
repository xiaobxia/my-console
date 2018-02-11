/**
 * Created by xiaobxia on 2018/2/8.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon, Row, Col} from 'antd';
import {strategyActions} from 'localStore/actions'
import http from 'localUtil/httpUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
const FileSaver = require('file-saver');
import FundList from './fundList'

class Strategy extends PureComponent {
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
    console.log('将要卸载Strategy');
    // this.state.ws.close();
  }

  initPage = () => {
    this.queryStrategy();
  };

  queryStrategy = (force) => {
    this.props.strategyActions.queryStrategy(force);
  };

  queryStrategyForce = () => {
    this.queryStrategy(true);
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

  render() {
    consoleRender('Strategy render');
    const title = this.getTitle();
    const strategy = this.props.strategy;
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
                <Button onClick={this.queryStrategyForce}>
                  <Icon type="upload"/> 更新
                </Button>
              </Col>
            </Row>
          </PageHeader>
          <div className="content-card-wrap">
            <FundList
              dataSource={strategy.strategyList}
              tableLoading={strategy.tableLoading}
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
    strategy: state.strategy
  }
};

const mapDispatchToProps = dispatch => ({
  //action在此为引入
  strategyActions: bindActionCreators(strategyActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Strategy));
