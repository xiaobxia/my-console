/**
 * Created by xiaobxia on 2018/3/2.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm, Tag} from 'antd';
import {Link} from 'react-router-dom'

class MyFundList extends PureComponent {
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
        title: '买入理由',
        render: (record) => {
          const rule = record.rule;
          return (
            <p>
              {rule.indexOf('isSlump') !== -1 && <Tag color="green">近期暴跌</Tag>}
              {rule.indexOf('isSupport') !== -1 && <Tag color="magenta">支撑</Tag>}
              {rule.indexOf('isLow') !== -1 && <Tag color="purple">低位</Tag>}
              {rule.indexOf('isLowHalf') !== -1 && <Tag color="purple">半年低位</Tag>}
              {rule.indexOf('internal') !== -1 && <Tag color="gold">连续性</Tag>}
              {rule.indexOf('isMin') !== -1 && <Tag color="lime">新低</Tag>}
              {rule.indexOf('distribution') !== -1 && <Tag color="orange">幅度</Tag>}
            </p>
          );
        }
      },
      {
        title: '卖出理由',
        render: (record) => {
          const rule = record.saleRule;
          return (
            <p>
              {rule.indexOf('isBoom') !== -1 && <Tag color="#f50">近期暴涨</Tag>}
              {rule.indexOf('isHigh') !== -1 && <Tag color="#108ee9">高位</Tag>}
              {rule.indexOf('isHighHalf') !== -1 && <Tag color="#108ee9">半年高位</Tag>}
            </p>
          );
        }
      },
      {
        title: '幅度',
        render: (record) => {
          if (!record) {
            return '---'
          }
          const isUp = record.valuationRate > 0;
          const isEqual = record.valuationRate === 0;
          return (
            <span
              className={isUp ? 'red-text' : isEqual ? '' : 'green-text'}>{`${record.valuationRate}%`}</span>
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

export default MyFundList;
