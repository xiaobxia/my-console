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
          </Col>
          <Col span={12}>
            <ReactEcharts
              option={this.getDistributionOption()}
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
