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

  onCountCellChange = (rowKey, value) => {
    this.props.onCountChangeHandler(rowKey, value);
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
        title: '持仓(份)',
        width: 140,
        dataIndex: 'count',
        render: (text, record) => (
          <EditableCell
            rowKey={record.code}
            value={text}
            onChange={this.onCountCellChange}
          />
        )
      },
      {
        title: '持仓净值',
        width: 120,
        dataIndex: 'sum'
      },
      {
        title: '估值',
        width: 120,
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
        width: 80,
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
        width: 80,
        render: (record) => {
          let source = '---';
          switch (record.valuationSource) {
            case 'tiantian': {
              source = '天天';
              break;
            }
            case 'haomai': {
              source = '好买';
              break;
            }
            case 'xinlang': {
              source = '新浪';
              break;
            }
          }
          return (
            <span>{source}</span>
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
