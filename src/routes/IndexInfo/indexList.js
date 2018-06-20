/**
 * Created by xiaobxia on 2018/1/26.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm} from 'antd';
import {Link} from 'react-router-dom'
import numberUtil from 'localUtil/numberUtil';
import ReactEcharts from 'echarts-for-react';


class IndexList extends PureComponent {
  ifUpOpen = (record) => {
    const preClose = record.preClose;
    const open = record.open;
    return open >= preClose;
  };
  ifUpClose = (record) => {
    return record.netChangeRatio > 0;
  };
  //盘中下跌
  ifSessionDown = (record) => {
    return numberUtil.countDifferenceRate(record.low, record.preClose) <= -0.5;
  };
  //收盘拉起
  ifSessionUpClose = (record) => {
    return numberUtil.countDifferenceRate(record.close, record.low) >= 0.5;
  };

  //盘中上升
  ifSessionUp = (record) => {
    return numberUtil.countDifferenceRate(record.high, record.preClose) >= 0.5;
  };
  //收盘回落
  ifSessionDownClose = (record) => {
    return numberUtil.countDifferenceRate(record.close, record.high) <= -0.5;
  };
  ifHighPreCloseDown = (record) => {
    //有用，买入信号，上证0.5
    return numberUtil.countDifferenceRate(record.high, record.preClose) < -0.5;
  };

  ifSellShangzheng = (record) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    return false
  };

  ifBuyShangzheng = (record) => {
    if (this.ifHighPreCloseDown(record) && this.ifSessionUpClose(record)) {
      return true;
    }
    return false
  };

  getChartOption = () => {
    const recentNetValue = this.props.dataSource;
    let xData = [];
    let yData = [];
    let points = [];
    recentNetValue.forEach((item) => {
      xData.unshift(item['date']);
      yData.unshift(item['close']);
      if (this.ifBuyShangzheng(item)) {
        points.push({
          coord: [item['date'], item['close']],
          itemStyle: {
            normal: {
              color: 'red'
            }
          },
          label: {
            show: false
          }
        })
      }
      if (this.ifSellShangzheng(item)) {
        points.push({
          coord: [item['date'], item['close']],
          itemStyle: {
            normal: {
              color: 'green'
            }
          },
          label: {
            show: false
          }
        })
      }
    });
    console.log(points)
    return {
      title: {
        text: '净值变化',
        left: 'center',
        textStyle: {
          color: 'rgba(0, 0, 0, 0.85)',
          fontWeight: '500'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value',
        scale: true
      },
      series: [
        {
          name: '净值',
          data: yData,
          type: 'line',
          lineStyle: {
            color: '#1890ff'
          },
          smooth: true,
          markPoint: {
            data: points,
            symbol: 'circle',
            symbolSize: 6
          }
        }
      ]
    };
  };

  render() {
    const columns = [
      {
        title: '日期',
        width: 80,
        dataIndex: 'date'
      },
      {
        title: '幅度',
        width: 80,
        render: (record) => {
          const rate = numberUtil.keepTwoDecimals(record.netChangeRatio);
          return <span className={rate > 0 ? 'red-text' : 'green-text'}>{rate}</span>
        }
      },
      {
        title: '低开',
        width: 80,
        render: (record) => {
          const up = this.ifUpOpen(record);
          return <span className={up > 0 ? 'red-text' : 'green-text'}>{up ? '高开' : '低开'}</span>
        }
      },
      {
        title: '收跌',
        width: 80,
        render: (record) => {
          const up = this.ifUpClose(record);
          return <span className={up ? 'red-text' : 'green-text'}>{up ? '收高' : '收跌'}</span>
        }
      },
      {
        title: '盘中下跌',
        width: 80,
        render: (record) => {
          const flag = this.ifSessionDown(record);
          return <span className={!flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '收盘拉起',
        width: 80,
        render: (record) => {
          const flag = this.ifSessionUpClose(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '盘中上升',
        width: 80,
        render: (record) => {
          const flag = this.ifSessionUp(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '收盘回落',
        width: 80,
        render: (record) => {
          const flag = this.ifSessionDownClose(record);
          return <span className={!flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '最高对昨日收盘大跌',
        width: 80,
        render: (record) => {
          const flag = this.ifHighPreCloseDown(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '最低对昨日收盘大涨',
        width: 80,
        render: (record) => {
          const rate = numberUtil.countDifferenceRate(record.low, record.preClose) > 0.5;
          return <span className={rate ? 'red-text' : 'green-text'}>{rate ? '是' : '否'}</span>
        }
      }
    ];
    const {dataSource} = this.props;
    return (
      <div>
        <ReactEcharts
          option={this.getChartOption(dataSource)}
          notMerge={true}
          style={{height: '300px'}}
          lazyUpdate={true}
          theme={'theme_name'}
        />
        <Table
          dataSource={dataSource}
          columns={columns}
          simple
          pagination={false}
          size="small"
          rowKey={record => record.date}
          rowClassName={(record, index) => {
            let active = false;
            if (this.ifBuyShangzheng(record)) {
              active = true;
            }
            return active ? 'active' : 'false'
          }}
        />
      </div>
    );
  }
}

export default IndexList;
