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
        title: '上榜标签',
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
        title: '是否持有',
        dataIndex: 'has',
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
              <Divider type="vertical"/>
              <Popconfirm
                title="确认删除此记录?"
                onConfirm={() => {
                  this.deleteHandler(record.code)
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
