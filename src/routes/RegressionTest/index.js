/**
 * Created by xiaobxia on 2018/2/8.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon, Row, Col, List, Switch} from 'antd';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import ReactEcharts from 'echarts-for-react';
import {getOpenKeyAndMainPath} from '../../router'
import http from 'localUtil/httpUtil';
import qs from 'qs'

class RegressionTest extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    updateLoading: false,
    slump: []
  };

  componentWillMount() {
    this.initPage();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    console.log('将要卸载RegressionTest');
  }

  initPage = () => {
    http.get('analyze/getRegressionSlump').then((data) => {
      this.setState({
        slump: data.data.result
      })
    });
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  getSlumpOption = () => {
    const slump = this.state.slump;
    let data = [];
    slump.forEach((item) => {
      data.push([item.count, item.tempRate])
    });
    return {
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 4,
        data: data,
        type: 'scatter'
      }]
    };
  };

  render() {
    consoleRender('RegressionTest render');
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
          </PageHeader>
          <div className="content-card-wrap">
            <ReactEcharts
              option={this.getSlumpOption()}
              notMerge={true}
              style={{height: '3600px'}}
              lazyUpdate={true}
              theme={'theme_name'}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(RegressionTest);
