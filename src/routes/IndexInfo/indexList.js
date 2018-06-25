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
    const threshold = this.props.threshold;
    return numberUtil.countDifferenceRate(record.low, record.preClose) <= -threshold;
  };
  //收盘拉起
  ifSessionUpClose = (record) => {
    const threshold = this.props.threshold;
    return numberUtil.countDifferenceRate(record.close, record.low) >= threshold;
  };

  //盘中上升
  ifSessionUp = (record) => {
    const threshold = this.props.threshold;
    return numberUtil.countDifferenceRate(record.high, record.preClose) >= threshold;
  };
  //收盘回落
  ifSessionDownClose = (record) => {
    const threshold = this.props.threshold;
    return numberUtil.countDifferenceRate(record.close, record.high) <= -threshold;
  };
  ifHighPreCloseDown = (record) => {
    //有用，买入信号，上证0.5
    const threshold = this.props.threshold;
    return numberUtil.countDifferenceRate(record.high, record.preClose) < -threshold;
  };

  ifLowPreCloseHigh = (record) => {
    const threshold = this.props.threshold;
    return numberUtil.countDifferenceRate(record.low, record.preClose) > threshold;
  };

  ifSellShangzheng = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose && !ifSessionDownCloseOne) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionUpOne && !ifSessionDownClose) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionUpOne) {
        return true;
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifSessionUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    return false
  };

  ifBuyShangzheng = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record) && ifSessionDownCloseOne) {
      return true;
    }
    if (!ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && !ifSessionUpOne && !ifSessionUpCloseOne && !ifSessionDownCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!(ifUpOpenOne && !ifUpCloseOne)) {
        return true;
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!(ifUpOpenOne && !ifUpCloseOne)) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownCloseOne && !ifSessionUpOne) {
        return true;
      }
    }
    // 新
    // if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    return false
  };

  ifSellChuangye = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (record.date === '20180212') {
      console.log('in')
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose && !ifSessionDownCloseOne) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (record.netChangeRatio > 0 && oneDayRecord.netChangeRatio > 0 && twoDayRecord.netChangeRatio > 0) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionUpOne) {
        return true;
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne) {
        return true;
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifSessionUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpCloseOne) {
        return true;
      }
    }
    return false
  };

  ifBuyChuangye = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record) && ifSessionUpCloseOne) {
      return true;
    }
    if (!ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && !ifSessionUpOne && !ifSessionUpCloseOne && !ifSessionDownCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!(ifUpOpenOne && !ifUpCloseOne)) {
        return true;
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!(ifUpOpenOne && !ifUpCloseOne)) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownCloseOne && !ifSessionUpOne) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  };

  ifSellGangtie = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (record.date === '20170828') {
      console.log('in')
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (record.netChangeRatio > 0 && oneDayRecord.netChangeRatio > 0 && twoDayRecord.netChangeRatio > 0) {
        return true;
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifSessionUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne) {
        if (!(!ifUpOpenOne && ifUpCloseOne)) {
          return true;
        }
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne) {
        return true;
      }
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne) {
        return true;
      }
    }
    return false
  };

  ifBuyGangtie = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record) && ifSessionUpCloseOne) {
      return true;
    }
    // 新
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownCloseOne && !ifSessionUpOne) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownCloseOne) {
        if (!(ifUpCloseOne && !ifSessionDownOne && !ifSessionDownCloseOne)) {
          return true;
        }
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionUpOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    return false
  };

  ifSellJungong = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne) {
        if (!(!ifUpOpenOne && ifUpCloseOne)) {
          return true;
        }
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifUpCloseOne) {
        return true;
      }
    }
    return false
  };

  ifBuyJungong = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record)) {
      return true;
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownCloseOne && !ifSessionUpOne) {
        return true;
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownCloseOne && !ifSessionUpCloseOne) {
        return true
      }
    }
    return false
  };

  ifSellYiyao = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpCloseOne && !ifSessionDownOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionUpCloseOne) {
        return true
      }
    }
    return false
  };

  ifBuyYiyao = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record) && ifSessionUpCloseOne) {
      return true;
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownCloseOne && !ifSessionUpOne) {
        return true;
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionUpOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionUpOne && !ifSessionUpCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    return false
  };

  ifSellMeitan = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne) {
        return true;
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true;
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionDownCloseOne && !ifSessionUpOne) {
        return true;
      }
    }
    return false
  };

  ifBuyMeitan= (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionUpOne && ifSessionDownCloseOne) {
        if (!(ifSessionDownOne && !ifSessionUpCloseOne)) {
          return true
        }
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  };

  ifSellYouse = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifSessionUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionUpCloseOne && ifSessionUpOne) {
        return true;
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownCloseOne) {
        return true;
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true;
    }
    return false
  };

  ifBuyYouse = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionUpOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    return false
  };

  ifSellDichan = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionUpOne && !ifSessionDownClose) {
      return true;
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true;
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true;
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true;
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpCloseOne) {
        return true;
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionUpCloseOne && ifSessionDownCloseOne) {
        return true;
      }
    }
    return false
  };

  ifBuyDichan = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    if (this.ifHighPreCloseDown(record) && ifSessionUpCloseOne && ifSessionDownCloseOne) {
      return true;
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false;
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false;
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false;
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return false;
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return false;
      }
      return true;
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!(!ifSessionUpCloseOne && !ifSessionUpOne)) {
        return true;
      }
    }
    return false
  };

  ifSellJisuanji = (record, oneDayRecord, twoDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    // if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
    //   return true;
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   if (!ifSessionDownOne && !ifSessionUpCloseOne) {
    //     if (!(!ifUpOpenOne && ifUpCloseOne)) {
    //       return true;
    //     }
    //   }
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
    //   if (!ifUpOpenOne) {
    //     return true;
    //   }
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
    //   return true;
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   if (ifUpCloseOne) {
    //     return true;
    //   }
    // }
    return false
  };

  ifBuyJisuanji = (record, oneDayRecord) => {
    const ifUpOpen = this.ifUpOpen(record);
    const ifUpClose = this.ifUpClose(record);
    const ifSessionDown = this.ifSessionDown(record);
    const ifSessionUpClose = this.ifSessionUpClose(record);
    const ifSessionUp = this.ifSessionUp(record);
    const ifSessionDownClose = this.ifSessionDownClose(record);
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord);
    const ifUpCloseOne = this.ifUpClose(oneDayRecord);
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord);
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord);
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord);
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord);
    // if (this.ifHighPreCloseDown(record) && ifSessionUpCloseOne) {
    //   return true;
    // }
    // if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
    //   return true
    // }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      //return true
    }
    return false
  };

  getChartOption = () => {
    const recentNetValue = this.props.dataSource;
    let xData = [];
    let yData = [];
    let points = [];
    const fnMap = {
      shangzhengBuy: 'ifBuyShangzheng',
      shangzhengSell: 'ifSellShangzheng',
      chuangyeBuy: 'ifBuyChuangye',
      chuangyeSell: 'ifSellChuangye',
      gangtieBuy: 'ifBuyGangtie',
      gangtieSell: 'ifSellGangtie',
      jungongBuy: 'ifBuyJungong',
      jungongSell: 'ifSellJungong',
      yiyaoBuy: 'ifBuyYiyao',
      yiyaoSell: 'ifSellYiyao',
      meitanBuy: 'ifBuyMeitan',
      meitanSell: 'ifSellMeitan',
      youseBuy: 'ifBuyYouse',
      youseSell: 'ifSellYouse',
      dichanBuy: 'ifBuyDichan',
      dichanSell: 'ifSellDichan',
      jisuanjiBuy: 'ifBuyJisuanji',
      jisuanjiSell: 'ifSellJisuanji'
    };
    recentNetValue.forEach((item, index) => {
      xData.unshift(item['date']);
      yData.unshift(item['close']);
      const oneDayRecord = recentNetValue[index < recentNetValue.length - 1 ? index + 1 : index];
      const twoDayRecord = recentNetValue[index < recentNetValue.length - 2 ? index + 2 : index + 1];
      if (this[fnMap[this.props.nowType + 'Buy']](item, oneDayRecord, twoDayRecord)) {
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
      if (this[fnMap[this.props.nowType + 'Sell']](item, oneDayRecord, twoDayRecord)) {
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
          const flag = this.ifLowPreCloseHigh(record);
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
            const recentNetValue = dataSource;
            const oneDayRecord = recentNetValue[index < recentNetValue.length - 1 ? index + 1 : index];
            const twoDayRecord = recentNetValue[index < recentNetValue.length - 2 ? index + 2 : index + 1];
            let active = false;
            if (this.ifBuyJisuanji(record, oneDayRecord, twoDayRecord)) {
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
