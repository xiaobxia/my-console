/**
 * Created by xiaobxia on 2018/1/26.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm} from 'antd';
import {Link} from 'react-router-dom'

class FundList extends PureComponent {
  render() {
    const columns = [
      {
        title: '代码',
        width: 80,
        dataIndex: 'code'
      },
      {
        title: '名称',
        dataIndex: 'name'
      },
      {
        title: '持仓(份)',
        dataIndex: 'count'
      },
      {
        title: '持仓净值',
        dataIndex: 'sum'
      },
      {
        title: '操作',
        width: 180,
        fixed: 'right',
        render: (record) => {
          return (
            <div>
              <Link to={'/article/view?id=' + record.id} style={{margin: '0 .5em'}}>查看</Link>
              <Divider type="vertical"/>
              <Link to={'/article/edit?id=' + record.id}>编辑</Link>
              <Divider type="vertical"/>
              <Popconfirm
                title="确认删除此记录?"
                onConfirm={() => {
                  this.deleteHandler(record.id)
                }}
                okText="确定"
                cancelText="取消"
              >
                <a href="#">删除</a>
              </Popconfirm>
            </div>
          );
        }
      }
    ];
    const {dataSource} = this.props;
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        simple
        pagination={false}
        size="small"
        rowKey={record => record.code}
      />
    );
  }
}

export default FundList;
