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
import numberUtil from 'localUtil/numberUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
import ReactEcharts from 'echarts-for-react';
import http from 'localUtil/httpUtil';


class MyAsset extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    list: []
  };

  componentWillMount() {
    this.initPage();
  }


  componentWillUnmount() {
    console.log('将要卸载MyAsset');
  }

  initPage = () => {
    http.get('fund/getUserNetValuesAll').then((data) => {
      if (data.success) {
        this.setState({
          list: data.data.list
        })
      }
    })
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  getNetValueOption = () => {
    const listMonth = this.state.list;
    let xData = [];
    let yData = [];
    listMonth.forEach(function (item, index) {
      xData.push(item['net_value_date']);
      yData.push(numberUtil.keepTwoDecimals((item['net_value'] - 1) * 100));
    });
    return {
      title: {
        text: '净值曲线',
        left: 'center',
        textStyle: {
          color: 'rgba(0, 0, 0, 0.85)',
          fontWeight: '500'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      calculable: true,
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value',
        scale: true
      },
      series: [
        {
          name: '涨幅',
          data: yData,
          type: 'line',
          lineStyle: {
            color: '#1890ff'
          }
        }
      ]
    };
  };

  render() {
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
          </PageHeader>
          <div className="content-card-wrap no-padding">
            <ReactEcharts
              option={this.getNetValueOption()}
              notMerge={true}
              style={{height: '600px'}}
              lazyUpdate={true}
              theme={'theme_name'}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(MyAsset);
