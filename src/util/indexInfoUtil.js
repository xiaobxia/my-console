/**
 * Created by xiaobxia on 2018/6/28.
 */
import numberUtil from './numberUtil'

function Util(config) {
  this.threshold = config.threshold
  this.rate = config.rate
  this.wave = config.wave
}
function ifMatch(raw, target) {
  let match = true
  for (let key in target) {
    if (target[key] !== raw[key]) {
      match = false
      break
    }
  }
  return true
}

Util.prototype = {
  getFlag: function (record) {
    let flag = {}
    flag.ifUpOpen = this.ifUpOpen(record)
    flag.ifOpenHigh = this.ifOpenHigh(record)
    flag.ifUpClose = this.ifUpClose(record)
    flag.ifCloseHigh = this.ifCloseHigh(record)
    flag.ifSessionDown = this.ifSessionDown(record)
    flag.ifSessionDownHigh = this.ifSessionDown(record)
    flag.ifSessionUpClose = this.ifSessionUpClose(record)
    flag.ifSessionUpCloseHigh = this.ifSessionUpClose(record)
    flag.ifSessionUp = this.ifSessionUp(record)
    flag.ifSessionUpHigh = this.ifSessionUp(record)
    flag.ifSessionDownClose = this.ifSessionDownClose(record)
    flag.ifSessionDownCloseHigh = this.ifSessionDownClose(record)
    flag.ifHighPreCloseDown = this.ifHighPreCloseDown(record)
    flag.ifHighPreCloseDownHigh = this.ifHighPreCloseDownHigh(record)
    return flag
  },
  //是否高开
  ifUpOpen: function (record) {
    const preClose = record.preClose
    const open = record.open
    return open >= preClose
  },
  //是否开盘高幅度
  ifOpenHigh: function (record) {
    const rate = this.rate
    const preClose = record.preClose
    const open = record.open
    return Math.abs(numberUtil.countDifferenceRate(open, preClose)) >= rate
  },
  //是否上涨
  ifUpClose: function (record) {
    return record.netChangeRatio > 0
  },
  // 是否大幅上涨
  ifCloseHigh: function (record) {
    const rate = this.rate
    return Math.abs(record.netChangeRatio) >= rate
  },
  // 盘中下跌
  ifSessionDown: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.low, record.preClose) <= -wave
  },
  // 盘中大幅下跌
  ifSessionDownHigh: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.low, record.preClose) <= -(2 * wave)
  },
  // 收盘拉起
  ifSessionUpClose: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.close, record.low) >= wave
  },
  // 收盘大幅拉起
  ifSessionUpCloseHigh: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.close, record.low) >= (2 * wave)
  },
  // 盘中上升
  ifSessionUp: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.high, record.preClose) >= wave
  },
  // 盘中大幅上升
  ifSessionUpHigh: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.high, record.preClose) >= (2 * wave)
  },
  // 收盘回落
  ifSessionDownClose: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.close, record.high) <= -wave
  },
  // 收盘大幅回落
  ifSessionDownCloseHigh: function (record) {
    const wave = this.wave
    return numberUtil.countDifferenceRate(record.close, record.high) <= -(2 * wave)
  },
  // 无抵抗下跌
  ifHighPreCloseDown: function (record) {
    const rate = this.rate
    return numberUtil.countDifferenceRate(record.high, record.preClose) < -rate
  },
  // 大幅无抵抗下跌
  ifHighPreCloseDownHigh: function (record) {
    const rate = this.rate
    return numberUtil.countDifferenceRate(record.high, record.preClose) < -(2 * rate)
  },
  //2018-08-23
  ifSellChuangye: function (record, oneDayRecord) {
    const today = this.getFlag(record)
    const lastDay = this.getFlag(oneDayRecord)
    if (ifMatch(today, {

    })) {

    }
    return false
  },
  //2018-08-23
  ifBuyChuangye: function (record, oneDayRecord) {
    return false
  }
}

const codeMap = {
  //2018-08-23
  'chuangye': {
    code: 'sz399006',
    name: '创业',
    threshold: 0.91
  }
  // //2018-08-23
  // 'gangtie': {
  //   code: 'sz399440',
  //   name: '钢铁',
  //   threshold: 0.88
  // },
  // //2018-08-27
  // 'jungong': {
  //   code: 'sz399959',
  //   name: '军工',
  //   threshold: 0.79
  // },
  // //2018-08-24
  // 'yiyao': {
  //   code: 'sh000037',
  //   name: '医药',
  //   threshold: 0.85
  // },
  // //2018-08-23
  // 'meitan': {
  //   code: 'sz399998',
  //   name: '煤炭',
  //   threshold: 0.92
  // },
  // //2018-08-28
  // 'youse': {
  //   code: 'sh000823',
  //   name: '有色',
  //   threshold: 0.84
  // },
  // //2018-08-24
  // 'jisuanji': {
  //   code: 'sz399363',
  //   name: '计算机',
  //   threshold: 0.98
  // },
  // //2018-08-24
  // 'baijiu': {
  //   code: 'sz399997',
  //   name: '白酒',
  //   threshold: 1.24
  // },
  // //2018-08-27
  // 'xinxi': {
  //   code: 'sh000993',
  //   name: '信息',
  //   threshold: 0.99
  // },
  // //2018-08-24
  // 'xiaofei': {
  //   code: 'sh000990',
  //   name: '消费',
  //   threshold: 0.95
  // },
  // //2018-08-24
  // 'baoxian': {
  //   code: 'sz399809',
  //   name: '保险',
  //   threshold: 1.03
  // },
  // //2018-08-23
  // 'wulin': {
  //   code: 'sh000016',
  //   name: '50',
  //   threshold: 0.7
  // },
  // //2018-08-27
  // 'chuanmei': {
  //   code: 'sz399971',
  //   name: '传媒',
  //   threshold: 0.77
  // },
  // //2018-08-22
  // 'dianzi': {
  //   code: 'sz399811',
  //   name: '电子',
  //   threshold: 0.98
  // },
  // //2018-08-27
  // 'yiliao': {
  //   code: 'sz399989',
  //   name: '医疗',
  //   threshold: 0.82
  // },
  // //2018-08-27
  // 'shengwu': {
  //   code: 'sz399441',
  //   name: '生物',
  //   threshold: 0.83
  // },
  // 'sanbai': {
  //   code: 'sh000300',
  //   name: '300',
  //   threshold: 0.64
  // },
  // 'wubai': {
  //   code: 'sh000905',
  //   name: '500',
  //   threshold: 0.69
  // }
}
const fnMap = {
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
  jisuanjiBuy: 'ifBuyJisuanji',
  jisuanjiSell: 'ifSellJisuanji',
  baijiuBuy: 'ifBuyBaijiu',
  baijiuSell: 'ifSellBaijiu',
  xinxiBuy: 'ifBuyXinxi',
  xinxiSell: 'ifSellXinxi',
  xiaofeiBuy: 'ifBuyXiaofei',
  xiaofeiSell: 'ifSellXiaofei',
  baoxianBuy: 'ifBuyBaoxian',
  baoxianSell: 'ifSellBaoxian',
  wulinBuy: 'ifBuyWulin',
  wulinSell: 'ifSellWulin',
  chuanmeiBuy: 'ifBuyChuanmei',
  chuanmeiSell: 'ifSellChuanmei',
  dianziBuy: 'ifBuyDianzi',
  dianziSell: 'ifSellDianzi',
  yiliaoBuy: 'ifBuyYiliao',
  yiliaoSell: 'ifSellYiliao',
  shengwuBuy: 'ifBuyShengwu',
  shengwuSell: 'ifSellShengwu',
  sanbaiBuy: 'ifBuySanbai',
  sanbaiSell: 'ifSellSanbai',
  wubaiBuy: 'ifBuyWubai',
  wubaiSell: 'ifSellWubai'
}

const IndexInfoUtil = {
  Util,
  codeMap,
  fnMap,
  formatData: function (list) {
    let listTemp = []
    for (let i = 0; i < list.length; i++) {
      listTemp.push({
        date: '' + list[i].date,
        ...list[i].kline
      })
    }
    let xData = []
    for (let j = 0; j < 7; j = j + 0.1) {
      xData.push({
        number: j.toFixed(1),
        count: 0,
        countList: [],
        count2: 0,
        countList2: []
      });
    }
    list.forEach((item, index) => {
      let value = Math.abs(numberUtil.countDifferenceRate(item.kline.close, item.kline.preClose));
      let value2 = Math.abs(numberUtil.countDifferenceRate(item.kline.high, item.kline.low));
      for (let i = 0; i < xData.length; i++) {
        if (value >= xData[i].number && xData[i + 1] && value < xData[i + 1].number) {
          xData[i].count++
          xData[i].countList.push(value)
          break
        }
      }
      for (let j = 0; j < xData.length; j++) {
        if (value2 >= xData[j].number && xData[j + 1] && value2 < xData[j + 1].number) {
          xData[j].count2++
          xData[j].countList2.push(value2)
          break
        }
      }
    });
    let all = 0
    let count = 0
    let all2 = 0
    let count2 = 0
    for (let k = 0; k < xData.length; k++) {
      if (xData[k].count >= 5) {
        count = count + xData[k].count;
        for (let c = 0; c < xData[k].countList.length; c++) {
          all = all + xData[k].countList[c]
        }
      }
      if (xData[k].count2 >= 5) {
        count2 = count2 + xData[k].count2;
        for (let b = 0; b < xData[k].countList2.length; b++) {
          all2 = all2 + xData[k].countList2[b]
        }
      }
    }
    xData.sort((a, b) => {
      return b.count2 - a.count2
    })
    console.log(xData)
    let a = (all2 / count2) / 2
    let c = all / count
    let threshold = numberUtil.keepTwoDecimals((a + c) / 2)
    console.log(count)
    console.log(count2)
    console.log(a)
    console.log(c)
    console.log(threshold)
    return {list: listTemp, threshold: threshold, rate: c, wave: a}
  }
}

export default IndexInfoUtil
