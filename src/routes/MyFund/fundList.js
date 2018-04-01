/**
 * Created by xiaobxia on 2018/1/26.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm} from 'antd';
import {Link} from 'react-router-dom'
import EditableCell from 'localComponent/EditableCell'

class FundList extends PureComponent {
  deleteHandler = (code) => {
    this.props.onDeleteHandler(code);
  };

  editHandler = (data) => {
    this.props.onEditHandler(data);
  };

  getRate = (valuation, netValue) => {
    return parseInt(10000 * (valuation - netValue) / netValue) / 100;
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
        title: '成本',
        width: 90,
        dataIndex: 'cost'
      },
      {
        title: '份额(份)',
        width: 90,
        dataIndex: 'shares'
      },
      {
        title: '持仓净值',
        width: 90,
        dataIndex: 'sum'
      },
      {
        title: '购买日期',
        width: 140,
        dataIndex: 'buy_date'
      },
      {
        title: '持有天数',
        width: 90,
        dataIndex: 'has_days'
      },
      {
        title: '估值',
        width: 90,
        render: (record) => {
          const isUp = record.valuation > record.netValue;
          const isEqual = record.valuation === record.netValue;
          return (
            <span className={isUp ? 'red-text' : isEqual ? '' : 'green-text'}>{record.valuation}</span>
          );
        }
      },
      {
        title: '持仓估值',
        width: 90,
        render: (record) => {
          const isUp = record.valuationSum > record.sum;
          const isEqual = record.valuationSum === record.sum;
          return (
            <span className={isUp ? 'red-text' : isEqual ? '' : 'green-text'}>{record.valuationSum}</span>
          );
        }
      },
      {
        title: '幅度',
        width: 90,
        render: (record) => {
          if (!record.valuation || !record.netValue) {
            return '---'
          }
          const isUp = record.valuation > record.netValue;
          const isEqual = record.valuation === record.netValue;
          return (
            <span
              className={isUp ? 'red-text' : isEqual ? '' : 'green-text'}>{`${this.getRate(record.valuation, record.netValue)}%`}</span>
          );
        }
      },
      {
        title: '估值源',
        width: 90,
        dataIndex: 'valuationSource'
      },
      {
        title: '收益率',
        width: 90,
        render: (record) => {
          if (!record.valuation || !record.cost) {
            return '---'
          }
          const rate = this.getRate(record.valuation, record.cost);
          const isUp = rate > 0;
          const isEqual = rate === 0;
          return (
            <span
              className={isUp ? 'red-text' : isEqual ? '' : 'green-text'}>{`${rate}%`}</span>
          );
        }
      },
      {
        title: '目标净值',
        width: 90,
        dataIndex: 'target_net_value'
      },
      {
        title: '目标收益率',
        width: 90,
        render: (record) => {
          if (!record.target_net_value || !record.cost) {
            return '---'
          }
          const rate = this.getRate(record.target_net_value, record.cost);
          const isUp = rate > 0;
          const isEqual = rate === 0;
          return (
            <span
              className={isUp ? 'red-text' : isEqual ? '' : 'green-text'}>{`${rate}%`}</span>
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
              <Link to={'/fund/' + record.code} style={{margin: '0 .5em'}}>查看</Link>
              <Divider type="vertical"/>
              <a onClick={() => {
                this.editHandler(record)
              }}>编辑</a>
              <Divider type="vertical"/>
              <Popconfirm
                title="确认删除此基金?"
                onConfirm={() => {
                  this.deleteHandler(record.code)
                }}
                okText="确定"
                cancelText="取消"
              >
                <a>删除</a>
              </Popconfirm>
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
