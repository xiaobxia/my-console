/**
 * Created by xiaobxia on 2018/1/25.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon, Row, Col, Radio} from 'antd';
import http from 'localUtil/httpUtil';
import numberUtil from 'localUtil/numberUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
import IndexList from './indexList'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class IndexInfo extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    list: [],
    threshold: 0.5,
    nowType: 'jungong'
  };

  componentWillMount() {
    this.initPage();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  initPage = (code) => {
    //webData/getWebStockdaybarAll
    code = code || 'sz399959';
    http.get('/mock/getWebStockdaybarAll', {
      code: code
    }).then((data) => {
      if (data.success) {
        const list = data.data.list
        let listTemp = [];
        let allRate = 0;
        let allRate3 = 0;
        for (let i = 0; i < list.length; i++) {
          allRate += numberUtil.countDifferenceRate(list[i].kline.high, list[i].kline.low);
          allRate3 += Math.abs(numberUtil.countDifferenceRate(list[i].kline.close, list[i].kline.open));
          listTemp.push({
            date: '' + list[i].date,
            ...list[i].kline
          })
        }
        let a = (allRate / 2) / list.length;
        let c = (allRate3) / list.length;
        let threshold = numberUtil.keepTwoDecimals((a + c) / 2);
        console.log(threshold)
        this.setState({list: listTemp, threshold: threshold});
      }
    })
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  onChange=(e) => {
    const codeMap = {
      'shangzheng': 'sh000001',
      'chuangye': 'sz399006',
      'gangtie': 'sz399440',
      'jungong': 'sz399959'
    };
    this.setState({nowType: e.target.value});
    this.initPage(codeMap[e.target.value]);
    console.log(e.target.value)
  }

  render() {
    consoleRender('IndexInfo render');
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <RadioGroup onChange={this.onChange} defaultValue="jungong">
              <RadioButton value="shangzheng">上证</RadioButton>
              <RadioButton value="chuangye">创业</RadioButton>
              <RadioButton value="gangtie">钢铁</RadioButton>
              <RadioButton value="jungong">军工</RadioButton>
            </RadioGroup>
          </PageHeader>
          <div className="content-card-wrap">
            <h3 className="blue-text">
            </h3>
            <IndexList
              dataSource={this.state.list}
              nowType={this.state.nowType}
              threshold={this.state.threshold}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(IndexInfo);
