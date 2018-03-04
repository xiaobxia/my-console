/**
 * Created by xiaobxia on 2018/2/8.
 */
import React, {PureComponent} from 'react'
import {Card, Row, Col} from 'antd';
import ReactEcharts from 'echarts-for-react';

class Recent extends PureComponent {
  colorText = (flag, trueText, falseText) => {
    if (flag) {
      return (<span className="red-text">{trueText}</span>);
    } else {
      return (<span className="green-text">{falseText}</span>);
    }
  };

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
    if (data) {
      return (<p>幅度(包括今日)：{data ? data.map((item, index) => {
        return (<span>近{item.day}日:
          {this.colorText(item.rate > 0, item.rate, item.rate)}
          {index === data.length - 1 ? '。' : '，'}
          </span>);
      }) : '暂无数据'}</p>);
    }
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
              {
                name: '估值',
                value: point.times,
                xAxis: point.index,
                yAxis: point.times,
                itemStyle: {
                  color: '#1890ff'
                }
              }
            ]
          }
        }
      ]
    };
    return option;
  };

  getRecentNetValueOption = () => {
    const {recentData} = this.props;
    if (!recentData.recentNetValue) {
      return {};
    }
    const recentNetValue = recentData.recentNetValue;
    const result = recentData.result;
    let xData = [];
    let yData = [];
    recentNetValue.forEach(function (item) {
      xData.unshift(item['net_value_date']);
      yData.unshift(item['net_value']);
    });
    // const point = this.getCloseData(this.props.valuation, netValueDistribution);
    // console.log(point)
    let option = {
      title: {
        text: '净值变化',
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
      calculable: true,
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
          markLine: {
            data: [
              {
                label: {
                  normal: {
                    position: 'end',
                    formatter: '{c}'
                  }
                },
                type: 'average',
                name: '平均值',
                lineStyle: {
                  color: '#000'
                }
              },
              {
                label: {
                  normal: {
                    position: 'end',
                    formatter: '{c}'
                  }
                },
                type: 'max',
                name: '最高点',
                lineStyle: {
                  color: 'red'
                }
              },
              {
                label: {
                  normal: {
                    position: 'end',
                    formatter: '{c}'
                  }
                },
                type: 'min',
                name: '最小值',
                lineStyle: {
                  color: 'green'
                }
              },
              {
                label: {
                  normal: {
                    position: 'end',
                    formatter: '{c}'
                  }
                },
                name: '半年均线',
                lineStyle: {
                  color: '#f50'
                },
                yAxis: result.costLineHalf
              },
              {
                label: {
                  normal: {
                    position: 'end',
                    formatter: '{c}'
                  }
                },
                name: '当前',
                lineStyle: {
                  color: '#1890ff'
                },
                yAxis: this.props.valuation
              }
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
            <p>是否是低位：{this.colorText(result.isLow, '是', '不是')}</p>
            <p>是否是半年低位：{this.colorText(result.isLowHalf, '是', '不是')}</p>
            <p>是否是新低: {this.colorText(result.isMin, '是', '不是')}</p>
            <p>近期是否暴跌: {this.colorText(result.isSlump, '是', '不是')}</p>
            <p>近期是否处于支撑: {this.colorText(result.isSupport, '是', '不是')}</p>
            <p>{this.getRecentSlump(recentData.recentSlump)}</p>
            <div style={{marginTop: 50}}>
              <ReactEcharts
                option={this.getNetValueDistributionOption()}
                notMerge={true}
                style={{height: '300px'}}
                lazyUpdate={true}
                theme={'theme_name'}
              />
            </div>
          </Col>
          <Col span={12}>
            <ReactEcharts
              option={this.getRecentNetValueOption()}
              notMerge={true}
              style={{height: '450px'}}
              lazyUpdate={true}
              theme={'theme_name'}
            />
            <ReactEcharts
              option={this.getDistributionOption()}
              notMerge={true}
              style={{height: '250px'}}
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
