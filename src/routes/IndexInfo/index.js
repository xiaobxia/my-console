/**
 * Created by xiaobxia on 2018/1/25.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon, Row, Col} from 'antd';
import http from 'localUtil/httpUtil';
import numberUtil from 'localUtil/numberUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
import IndexList from './indexList'

class IndexInfo extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    list: []
  };

  componentWillMount() {
    this.initPage();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  initPage = () => {
    http.get('webData/getWebStockdaybarAll', {
      code: 'sh000001'
    }).then((data) => {
      if (data.success) {
        const list = data.data.list
        let listTemp = [];
        for (let i = 0; i < list.length; i++) {
          listTemp.push({
            date: '' + list[i].date,
            ...list[i].kline
          })
        }
        this.setState({list: listTemp});
      }
    })
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  render() {
    consoleRender('IndexInfo render');
    const title = this.getTitle();
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
          </PageHeader>
          <div className="content-card-wrap">
            <h3 className="blue-text">
            </h3>
            <IndexList
              dataSource={this.state.list}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(IndexInfo);
