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
  getMonthRateOption = () => {
    const {recentData} = this.props;
    if (!recentData.listMonth) {
      return {};
    }
    const listMonth = recentData.listMonth;
    let xData = [];
    let yData = [];
    // listMonth.reverse();
    listMonth.forEach(function (item, index) {
      xData.push(index + 1);
      yData.push(item);
    });
    return {
      title: {
        text: '近期幅度',
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
          name: '幅度',
          data: yData,
          type: 'line',
          lineStyle: {
            color: '#f50'
          }
        }
      ]
    };
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
          lineStyle: {
            color: '#1890ff'
          },
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
  };

  render() {
    const recentData = this.props.recentData;
    const result = recentData.result || {};
    console.log(recentData);
    return (

      <Card title="近期涨跌" bordered={false}>
        <Row>
          <Col span={12} style={{textAlign: 'center'}}>
            <p>近一月是否暴跌: {this.colorText(result.isMonthSlump, '是', '不是')}</p>
            <p>近半月是否暴跌: {this.colorText(result.isHalfMonthSlump, '是', '不是')}</p>
            <p>是否是低位：{this.colorText(result.isLow, '是', '不是')}</p>
            <p>是否是半年低位：{this.colorText(result.isLowHalf, '是', '不是')}</p>
            <p>是否是新低: {this.colorText(result.isMin, '是', '不是')}</p>
          </Col>
          <Col span={12}>
            <ReactEcharts
              option={this.getMonthRateOption()}
              notMerge={true}
              style={{height: '300px'}}
              lazyUpdate={true}
              theme={'theme_name'}
            />
          </Col>
        </Row>
        <Row>
          <ReactEcharts
            option={this.getRecentNetValueOption()}
            notMerge={true}
            style={{height: '600px'}}
            lazyUpdate={true}
            theme={'theme_name'}
          />
        </Row>
      </Card>
    );
  }
}

export default Recent;
