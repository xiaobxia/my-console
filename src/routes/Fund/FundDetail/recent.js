/**
 * Created by xiaobxia on 2018/2/8.
 */
import React, {PureComponent} from 'react'
import {Card, Row, Col} from 'antd';
import ReactEcharts from 'echarts-for-react';

class Recent extends PureComponent {
  getUpAndDownCountText = (data) => {
    data = data || {};
    return (<p>
      近{data.total}天当中：
      上涨<span className="red-text">{data.up}</span>天，
      下跌<span className="green-text">{data.down}</span>天，
      平{data.equal}天</p>);
  };

  getMaxUpAndDownText = (data) => {
    data = data || {};
    return (<p>最大单日涨跌幅：<span className="red-text">{data.maxUp}</span>，
      最大单日跌幅：<span className="green-text">{data.maxDown}</span>
    </p>);
  };

  getRecentSlump = (data) => {
    data = data || [0, 0, 0];
    return (<p>幅度(包括今日)：近5日{data[0]}，近10日{data[1]}，近15日{data[2]}</p>);
  };

  getDistributionOption = () => {
    const {recentData} = this.props;
    if (!recentData.upAndDownDistribution) {
      return {};
    }
    const upAndDownDistribution = recentData.upAndDownDistribution.list;
    let xData = [];
    let yData = [];
    let y2Data = [];
    upAndDownDistribution.forEach(function (item) {
      xData.push(item.range);
      yData.push(item.times);
      y2Data.push(item.continues.times)
    });
    let option = {
      title: {
        text: '涨跌值分布',
        textStyle: {
          color: 'rgba(0, 0, 0, 0.85)',
          fontWeight: '500'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['次数', '延续次数']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '次数',
          data: yData,
          type: 'bar'
        },
        {
          name: '延续次数',
          data: y2Data,
          type: 'line'
        }
      ]
    };
    return option;
  };

  getCloseData = (value, list) => {
    let temp = 1;
    let data = {};
    list.forEach(function (item, index) {
      if (Math.abs(value - item.netValue) < temp) {
        temp = Math.abs(value - item.netValue);
        data = {
          index,
          times: item.times
        };
      }
    });
    return data;
  };

  getNetValueDistributionOption = () => {
    const {recentData} = this.props;
    if (!recentData.netValueDistribution) {
      return {};
    }
    const netValueDistribution = recentData.netValueDistribution;
    let xData = [];
    let yData = [];
    netValueDistribution.forEach(function (item) {
      xData.push(item.netValue);
      yData.push(item.times);
    });
    const point = this.getCloseData(this.props.valuation, netValueDistribution);
    console.log(point)
    let option = {
      title: {
        text: '净值值分布',
        textStyle: {
          color: 'rgba(0, 0, 0, 0.85)',
          fontWeight: '500'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '次数',
          data: yData,
          type: 'line',
          markPoint: {
            data: [
              {name: '估值', value: point.times, xAxis: point.index, yAxis: point.times}
            ]
          }
        }
      ]
    };
    return option;
  };

  render() {
    const recentData = this.props.recentData;
    const result = recentData.result || {};
    console.log(recentData);
    return (
      <Card title="近期涨跌" bordered={false}>
        <Row>
          <Col span={12}>
            {this.getUpAndDownCountText(recentData.upAndDownCount)}
            {this.getMaxUpAndDownText(recentData.maxUpAndDown)}
            <p>从涨跌分布来看，下一天涨的概率是{result.distribution}%</p>
            <p>从涨跌连续性来看，下一天涨的概率是{result.internal}%</p>
            <p>是否是新低: {result.isMin ? '是' : '不是'}</p>
            <p>近期是否暴跌: {result.isSlump ? '是' : '不是'}</p>
            <p>{this.getRecentSlump(recentData.recentSlump)}</p>
          </Col>
          <Col span={12}>
            <ReactEcharts
              option={this.getDistributionOption()}
              notMerge={true}
              style={{height: '220px'}}
              lazyUpdate={true}
              theme={'theme_name'}
            />
            <ReactEcharts
              option={this.getNetValueDistributionOption()}
              notMerge={true}
              style={{height: '220px'}}
              lazyUpdate={true}
              theme={'theme_name'}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Recent;
