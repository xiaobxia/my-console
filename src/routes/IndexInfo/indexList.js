/**
 * Created by xiaobxia on 2018/1/26.
 */
import React, {PureComponent} from 'react'
import {Table, Button, Divider, Popconfirm} from 'antd';
import {Link} from 'react-router-dom'
import numberUtil from 'localUtil/numberUtil';
import indexInfoUtil from 'localUtil/indexInfoUtil';
import ReactEcharts from 'echarts-for-react';

const fnMap = indexInfoUtil.fnMap;
const InfoUtil = indexInfoUtil.Util;

class IndexList extends PureComponent {

  getChartOption = () => {
    const threshold = this.props.threshold;
    const recentNetValue = this.props.dataSource;
    const infoUtil = new InfoUtil(threshold)
    let xData = [];
    let yData = [];
    let points = [];
    recentNetValue.forEach((item, index) => {
      xData.unshift(item['date']);
      yData.unshift(item['close']);
      const oneDayRecord = recentNetValue[index < recentNetValue.length - 1 ? index + 1 : index];
      const twoDayRecord = recentNetValue[index < recentNetValue.length - 2 ? index + 2 : index + 1];
      if (infoUtil[fnMap[this.props.nowType + 'Buy']](item, oneDayRecord, twoDayRecord)) {
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
      } else if (infoUtil[fnMap[this.props.nowType + 'Sell']](item, oneDayRecord, twoDayRecord)) {
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
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const up = infoUtil.ifUpOpen(record);
          return <span className={up > 0 ? 'red-text' : 'green-text'}>{up ? '高开' : '低开'}</span>
        }
      },
      {
        title: '收跌',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const up = infoUtil.ifUpClose(record);
          return <span className={up ? 'red-text' : 'green-text'}>{up ? '收高' : '收跌'}</span>
        }
      },
      {
        title: '盘中下跌',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const flag = infoUtil.ifSessionDown(record);
          return <span className={!flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '收盘拉起',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const flag = infoUtil.ifSessionUpClose(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '盘中上升',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const flag = infoUtil.ifSessionUp(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '收盘回落',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const flag = infoUtil.ifSessionDownClose(record);
          return <span className={!flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '最高对昨日收盘大跌',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const flag = infoUtil.ifHighPreCloseDown(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
        }
      },
      {
        title: '最低对昨日收盘大涨',
        width: 80,
        render: (record) => {
          const threshold = this.props.threshold;
          const infoUtil = new InfoUtil(threshold)
          const flag = infoUtil.ifLowPreCloseHigh(record);
          return <span className={flag ? 'red-text' : 'green-text'}>{flag ? '是' : '否'}</span>
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
            const threshold = this.props.threshold;
            const infoUtil = new InfoUtil(threshold)
            const recentNetValue = dataSource;
            const oneDayRecord = recentNetValue[index < recentNetValue.length - 1 ? index + 1 : index];
            const twoDayRecord = recentNetValue[index < recentNetValue.length - 2 ? index + 2 : index + 1];
            let active = false;
            if (infoUtil.ifSellZhengquan(record, oneDayRecord, twoDayRecord)) {
              active = true;
            }
            return active ? 'active' : 'false'
          }}
        />
      </div>
    );
  }
}
// rowClassName={(record, index) => {
//   const threshold = this.props.threshold;
//   const infoUtil = new InfoUtil(threshold)
//   const recentNetValue = dataSource;
//   const oneDayRecord = recentNetValue[index < recentNetValue.length - 1 ? index + 1 : index];
//   const twoDayRecord = recentNetValue[index < recentNetValue.length - 2 ? index + 2 : index + 1];
//   let active = false;
//   if (infoUtil.ifBuyWulin(record, oneDayRecord, twoDayRecord)) {
//     active = true;
//   }
//   return active ? 'active' : 'false'
// }}
export default IndexList;
