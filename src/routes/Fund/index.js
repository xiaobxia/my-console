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
import AddModal from './addModal'

class Fund extends PureComponent {
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

  // componentDidMount() {
  // }
  //
  // componentWillUnmount() {
  //   console.log('将要卸载Fund');
  //   // this.state.ws.close();
  // }

  initPage = () => {
    const query = this.getSearch();
    //初始化页面
    query.current = query.current || 1;
    query.pageSize = query.pageSize || 10;
    this.queryFunds(query);
    console.log(query)
  };

  getTitle() {
    return getOpenKeyAndMainPath(this.props.location.pathname).title;
  }

  getSearch = () => {
    const search = this.props.location.search;
    let query = {};
    if (search) {
      query = qs.parse(search.slice(1));
    }
    return query;
  };

  queryFunds = (query) => {
    const {fundActions} = this.props;
    fundActions.queryFunds(query).then((data) => {
      //无数据
      if (data.data.list.length === 0) {
        const query = this.getSearch();
        const current = parseInt(query.current, 10);
        if (current && current > 1) {
          if (this.state.redirectCount > 1) {
            this.props.history.push('/404');
          }
          this.setState((pre) => {
            return {
              redirectCount: pre.redirectCount + 1
            }
          });
          query.current = current - 1;
          this.queryFundsWithUpdateQuery(query);
        }
      } else {
        this.setState((pre) => {
          return {
            redirectCount: 0
          }
        });
      }
    });
  };
  // 请求数据的同时，更新路由
  queryFundsWithUpdateQuery = (query) => {
    this.props.history.push('/funds?' + qs.stringify(query));
    this.queryFunds(query);
  };
  // 分页切换
  tableChangeHandler = (pagination, filters, sorter) => {
    const query = this.getSearch();
    query.current = pagination.current;
    query.pageSize = pagination.pageSize;
    this.queryFundsWithUpdateQuery(query);
    console.log(pagination)
  };
  // 删除基金
  tableDeleteHandler = (code) => {
    http.get('fund/deleteFund', {code}).then((data) => {
      if (data.success) {
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
      this.initPage();
    })
  };
  // 上传
  getUploadProps = () => {
    const initPage = this.initPage;
    return {
      name: 'fundFile',
      action: http.generateUrl('upload/importFund'),
      headers: {
        token: window._token
      },
      onChange(info) {
        if (info.file.status === 'done') {
          if (info.file.response.success) {
            if (info.file.response.data) {
              message.warn(`有${info.file.response.data.failList.length}项失败`);
            } else {
              message.success('导入成功');
            }
            initPage();
          } else {
            message.error(info.file.response.message);
          }
        } else if (info.file.status === 'error') {
          message.error('导入失败');
        }
      }
    };
  };

  openModalHandler = () => {
    this.setState({
      addModal: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      addModal: false
    });
  };

  addFund = (code) => {
    return http.post('fund/addFund', {code}).then((data) => {
      if (data.success) {
        this.initPage();
      }
      return data;
    });
  };

  render() {
    const {fund} = this.props;
    const {pagination} = fund;
    consoleRender('Fund render');
    const title = this.getTitle();
    const listProps = {
      pagination: {...pagination, showTotal: total => `共 ${total} 条记录`},
      dataSource: fund.fundList,
      onChange: this.tableChangeHandler,
      onDelete: this.tableDeleteHandler
    };
    const modalProps = {
      onClose: this.closeModalHandler,
      onAdd: this.addFund
    };
    return (
      <DocumentTitle title={title}>
        <div className="module-my-fund route-modules">
          <PageHeader routeTitle={title}>
            <Row style={{padding: '12px 0 0 0'}}>
              <Col span={8}>
                <Upload {...this.getUploadProps()}>
                  <Button>
                    <Icon type="upload"/> 导入自选基金
                  </Button>
                </Upload>
              </Col>
              <Col span={8} style={{lineHeight: '32px', textAlign: 'center'}}>
              </Col>
              <Col span={8} style={{textAlign: 'right'}}>
                <Button.Group>
                  <Button onClick={this.openModalHandler}>
                    添加基金
                  </Button>
                </Button.Group>
              </Col>
            </Row>
          </PageHeader>
          <div className="content-card-wrap">
            <FundList {...listProps}/>
          </div>
          {this.state.addModal && <AddModal {...modalProps}/>}
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
