/**
 * Created by xiaobxia on 2018/1/25.
 */
import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Input } from 'antd';
import qs from 'qs'
import {consoleRender} from 'localUtil/consoleLog'
import classNames from 'classnames'

class MyFund extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    type: 1,
    user: {name: 'xiaobxia'}
  };

  componentWillMount() {
    // console.log('将要装载MyFund');
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

  render() {
    consoleRender('MyFund render');
    //query在search里
    let query = qs.parse(this.props.location.search.slice(1));
    return (
      <div className="module-my-fund">

      </div>
    );
  }
}


export default withRouter(connect()(MyFund));
