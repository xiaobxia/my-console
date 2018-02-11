/**
 * Created by xiaobxia on 2018/1/26.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm, Tag} from 'antd';
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
        title: '上榜标签',
        render: (record) => {
          const rule = record.rule;
          return (
            <p>
              {rule.indexOf('distribution') !== -1 && <Tag color="orange">幅度</Tag>}
              {rule.indexOf('internal') !== -1 && <Tag color="gold">连续性</Tag>}
              {rule.indexOf('isMin') !== -1 && <Tag color="lime">新低</Tag>}
              {rule.indexOf('isSlump') !== -1 && <Tag color="green">近期暴跌</Tag>}
            </p>
          );
        }
      },
      {
        title: '操作',
        width: 180,
        fixed: 'right',
        render: (record) => {
          return (
            <div>
              <Link to={'/fund/' + record.code}>查看</Link>
            </div>
          );
        }
      }
    ];
    const {dataSource, tableLoading} = this.props;
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        simple
        pagination={false}
        size="small"
        loading={tableLoading}
        rowKey={record => record.code}
      />
    );
  }
}

export default FundList;
