/**
 * Created by xiaobxia on 2018/1/26.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm, Tag} from 'antd';
import {Link} from 'react-router-dom'

class FundList extends PureComponent {
  deleteHandler = (code) => {
    this.props.onDelete(code);
  };

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
              {rule.indexOf('isSlump') !== -1 && <Tag color="#52c41a">近期暴跌</Tag>}
              {rule.indexOf('isWeekSlump') !== -1 && <Tag color="#b7eb8f">超短暴跌</Tag>}
              {rule.indexOf('isSupport') !== -1 && <Tag color="#f50">支撑</Tag>}
              {rule.indexOf('isLow') !== -1 && <Tag color="#722ed1">低位</Tag>}
              {rule.indexOf('isLowHalf') !== -1 && <Tag color="#d3adf7">半年低位</Tag>}
              {rule.indexOf('internal') !== -1 && <Tag color="#13c2c2">连续性</Tag>}
              {rule.indexOf('isMin') !== -1 && <Tag color="#108ee9">新低</Tag>}
              {rule.indexOf('distribution') !== -1 && <Tag color="#f50">幅度</Tag>}
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
              {rule.indexOf('isBoom') !== -1 && <Tag color="red">近期暴涨</Tag>}
              {rule.indexOf('isWeekSlump') !== -1 && <Tag color="magenta">超短暴涨</Tag>}
              {rule.indexOf('isHigh') !== -1 && <Tag color="gold">高位</Tag>}
              {rule.indexOf('isHighHalf') !== -1 && <Tag color="orange">半年高位</Tag>}
              {rule.indexOf('downInternal') !== -1 && <Tag color="cyan">连续性</Tag>}
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
        title: '是否持有',
        dataIndex: 'has',
        filters: [{
          text: '是',
          value: true
        }, {
          text: '否',
          value: false
        }],
        filterMultiple: false,
        onFilter: (value, record) => {
          let valueTemp = value === 'true';
          return record.has === valueTemp;
        },
        render: (has) => {
          return has ? <span className="red-text">是</span> : '否';
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
