/**
 * Created by xiaobxia on 2018/1/25.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import {Input, Upload, message, Button, Icon} from 'antd';
import {myFundActions} from 'localStore/actions'
import qs from 'qs'
import http from 'localUtil/httpUtil';
import {consoleRender} from 'localUtil/consoleLog'
import PageHeader from 'localComponent/PageHeader'
import {getOpenKeyAndMainPath} from '../../router'
import classNames from 'classnames'
import FundList from './fundList'

const uploadProps = {
  name: 'fundFile',
  action: http.generateUrl('upload/importMyFund'),
  headers: {
    token: window._token
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
class MyFund extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    type: 1,
    user: {name: 'xiaobxia'}
  };

  componentWillMount() {
    this.props.myFundActions.queryMyFunds();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    console.log('将要卸载MyFund');
    // this.state.ws.close();
  }

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

  exportMyFundsHandler() {
    http.post('download/exportMyFund')
  }

  render() {
    consoleRender('MyFund render');
    //query在search里
    let query = qs.parse(this.props.location.search.slice(1));
    const title = this.getTitle();

    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund">
          <PageHeader routeTitle={title}>
            <Upload {...uploadProps}>
              <Button>
                <Icon type="upload" /> 导入我的基金
              </Button>
            </Upload>
            <Button onClick={this.exportMyFundsHandler}>
              导出我的基金
            </Button>
          </PageHeader>
          <div className="content-card-wrap">
            <FundList dataSource={this.props.myFund.myFundList}/>
          </div>
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
