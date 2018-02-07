/**
 * Created by xiaobxia on 2018/2/7.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, message, Button, Icon, Row, Col} from 'antd';
import {fundActions} from 'localStore/actions'
import qs from 'qs'
import http from 'localUtil/httpUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../../router'

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
    this.queryFund(this.props.match.params.code);
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  queryFund = (code) => {
    const {fundActions} = this.props;
    fundActions.queryFund(code).then((data) => {
    });
  };

  render() {
    const {fund} = this.props;
    consoleRender('Fund render');
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <div className="page-header-title">基本信息</div>
          </PageHeader>
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
