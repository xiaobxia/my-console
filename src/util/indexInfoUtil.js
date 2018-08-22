/**
 * Created by xiaobxia on 2018/6/28.
 */
import numberUtil from './numberUtil'

function Util(threshold) {
  this.threshold = threshold
}

Util.prototype = {
  ifUpOpen: function (record) {
    const preClose = record.preClose
    const open = record.open
    return open >= preClose
  },
  ifUpClose: function (record) {
    return record.netChangeRatio > 0
  },
  // 盘中下跌
  ifSessionDown: function (record) {
    const threshold = this.threshold
    return numberUtil.countDifferenceRate(record.low, record.preClose) <= -threshold
  },
  // 收盘拉起
  ifSessionUpClose: function (record) {
    const threshold = this.threshold
    return numberUtil.countDifferenceRate(record.close, record.low) >= threshold
  },

  // 盘中上升
  ifSessionUp: function (record) {
    const threshold = this.threshold
    return numberUtil.countDifferenceRate(record.high, record.preClose) >= threshold
  },
  // 收盘回落
  ifSessionDownClose: function (record) {
    const threshold = this.threshold
    return numberUtil.countDifferenceRate(record.close, record.high) <= -threshold
  },
  ifHighPreCloseDown: function (record) {
    const threshold = this.threshold
    return numberUtil.countDifferenceRate(record.high, record.preClose) < -threshold
  },

  ifLowPreCloseHigh: function (record) {
    const threshold = this.threshold
    return numberUtil.countDifferenceRate(record.low, record.preClose) > threshold
  },
  //2018-07-29
  ifSellChuangye: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-07-29
  ifBuyChuangye: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-29
  ifSellGangtie: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-27
  ifBuyGangtie: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record) && ifSessionUpCloseOne) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-08-03
  ifSellJungong: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-08-03
  ifBuyJungong: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-03
  ifSellYiyao: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-03
  ifBuyYiyao: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifSellMeitan: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifBuyMeitan: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-30
  ifSellYouse: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-30
  ifBuyYouse: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifSellDichan: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionUpOne && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifBuyDichan: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-29
  ifSellJisuanji: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-07-29
  ifBuyJisuanji: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        if (ifUpOpenOne && ifUpCloseOne) {
          return true
        }
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-7-27
  ifSellBaijiu: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-7-27
  ifBuyBaijiu: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-27
  ifSellXinxi: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-27
  ifBuyXinxi: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        if (ifUpOpenOne && !ifUpCloseOne) {
          return true
        }
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-01
  ifSellZhengquan: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-01
  ifBuyZhengquan: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-27
  ifSellXiaofei: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-07-27
  ifBuyXiaofei: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-29
  ifSellBaoxian: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-29
  ifBuyBaoxian: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifSellWulin: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionUpOne && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifBuyWulin: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    return false
  },

  //2018-07-20
  ifSellYinhang: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionUpOne && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-20
  ifBuyYinhang: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        if (ifUpOpenOne && ifUpCloseOne) {
          return false
        }
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        if (ifUpOpenOne && ifUpCloseOne) {
          return true
        }
        if (!ifUpOpenOne && !ifUpCloseOne) {
          return true
        }
      }
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-30
  ifSellChuanmei: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-07-30
  ifBuyChuanmei: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-29
  ifSellDianzi: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    // if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
    //     return false
    //   }
    //   return true
    // }
    // if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return false
    //   }
    //   if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return false
    //   }
    //   if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
    //     return false
    //   }
    //   return true
    // }
    // if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
    //     return false
    //   }
    //   return true
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    //   if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    //   if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    // if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    // if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   return true
    // }
    // if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
    //   return true
    // }
    // if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   return true
    // }
    return false
  },
  //2018-07-29
  ifBuyDianzi: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    // if (this.ifHighPreCloseDown(record)) {
    //   return true
    // }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      //不要
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      //return true
    }
    // if (!ifUpOpen &&true !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    //   if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    // if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
    //   if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    //   if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    // if (ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
    //   return true
    // }
    // if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   return true
    // }
    // if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
    //   if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
    //     return true
    //   }
    // }
    return false
  },
  //2018-08-07
  ifSellYiliao: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionUpOne && !ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return false
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return false
      }
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-07
  ifBuyYiliao: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (!ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-08-06
  ifSellShengwu: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && !ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifUpOpenOne && !ifUpCloseOne && ifSessionDownOne && !ifSessionUpCloseOne && ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-08-06
  ifBuyShengwu: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      return true
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifUpOpenOne && ifUpCloseOne && !ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && ifSessionDown && ifSessionUpClose && ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && !ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  },
  //2018-07-23
  ifSellJijian: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (ifUpOpen && ifUpClose && !ifSessionDown && !ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && ifUpClose && !ifSessionDown && ifSessionUpClose && ifSessionUp && !ifSessionDownClose) {
      return true
    }
    return false
  },
  //2018-07-23
  ifBuyJijian: function (record, oneDayRecord) {
    const ifUpOpen = this.ifUpOpen(record)
    const ifUpClose = this.ifUpClose(record)
    const ifSessionDown = this.ifSessionDown(record)
    const ifSessionUpClose = this.ifSessionUpClose(record)
    const ifSessionUp = this.ifSessionUp(record)
    const ifSessionDownClose = this.ifSessionDownClose(record)
    const ifUpOpenOne = this.ifUpOpen(oneDayRecord)
    const ifUpCloseOne = this.ifUpClose(oneDayRecord)
    const ifSessionDownOne = this.ifSessionDown(oneDayRecord)
    const ifSessionUpCloseOne = this.ifSessionUpClose(oneDayRecord)
    const ifSessionUpOne = this.ifSessionUp(oneDayRecord)
    const ifSessionDownCloseOne = this.ifSessionDownClose(oneDayRecord)
    if (this.ifHighPreCloseDown(record)) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && ifSessionDownCloseOne) {
        return true
      }
      if (!ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && ifSessionDown && ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    if (!ifUpOpen && !ifUpClose && !ifSessionDown && !ifSessionUpClose && !ifSessionUp && !ifSessionDownClose) {
      if (ifSessionDownOne && !ifSessionUpCloseOne && !ifSessionUpOne && !ifSessionDownCloseOne) {
        return true
      }
    }
    return false
  }
}

const codeMap = {
  'chuangye': {
    code: 'sz399006',
    name: '创业',
    threshold: 0.99
  },
  'gangtie': {
    code: 'sz399440',
    name: '钢铁',
    threshold: 1.01
  },
  'jungong': {
    code: 'sz399959',
    name: '军工',
    threshold: 1.12
  },
  'yiyao': {
    code: 'sh000037',
    name: '医药',
    threshold: 1.05
  },
  'meitan': {
    code: 'sz399998',
    name: '煤炭',
    threshold: 1.15
  },
  'youse': {
    code: 'sh000823',
    name: '有色',
    threshold: 1.02
  },
  'dichan': {
    code: 'sz399393',
    name: '地产',
    threshold: 1.06
  },
  'jisuanji': {
    code: 'sz399363',
    name: '计算机',
    threshold: 1.14
  },
  'baijiu': {
    code: 'sz399997',
    name: '白酒',
    threshold: 1.45
  },
  'xinxi': {
    code: 'sh000993',
    name: '信息',
    threshold: 1.13
  },
  'zhengquan': {
    code: 'sz399975',
    name: '证券',
    threshold: 1
  },
  'xiaofei': {
    code: 'sh000990',
    name: '消费',
    threshold: 0.93
  },
  'baoxian': {
    code: 'sz399809',
    name: '保险',
    threshold: 1.19
  },
  'wulin': {
    code: 'sh000016',
    name: '50',
    threshold: 0.8
  },
  'yinhang': {
    code: 'sz399431',
    name: '银行',
    threshold: 0.76
  },
  'chuanmei': {
    code: 'sz399971',
    name: '传媒',
    threshold: 0.86
  },
  'dianzi': {
    code: 'sz399811',
    name: '电子',
    threshold: 0.81
  },
  'yiliao': {
    code: 'sz399989',
    name: '医疗',
    threshold: 1.13
  },
  'shengwu': {
    code: 'sz399441',
    name: '生物',
    threshold: 1.05
  },
  'jijian': {
    code: 'sz399995',
    name: '基建',
    threshold: 0.63
  }
}
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
  jisuanjiSell: 'ifSellJisuanji',
  baijiuBuy: 'ifBuyBaijiu',
  baijiuSell: 'ifSellBaijiu',
  xinxiBuy: 'ifBuyXinxi',
  xinxiSell: 'ifSellXinxi',
  zhengquanBuy: 'ifBuyZhengquan',
  zhengquanSell: 'ifSellZhengquan',
  xiaofeiBuy: 'ifBuyXiaofei',
  xiaofeiSell: 'ifSellXiaofei',
  baoxianBuy: 'ifBuyBaoxian',
  baoxianSell: 'ifSellBaoxian',
  wulinBuy: 'ifBuyWulin',
  wulinSell: 'ifSellWulin',
  yinhangBuy: 'ifBuyYinhang',
  yinhangSell: 'ifSellYinhang',
  chuanmeiBuy: 'ifBuyChuanmei',
  chuanmeiSell: 'ifSellChuanmei',
  dianziBuy: 'ifBuyDianzi',
  dianziSell: 'ifSellDianzi',
  yiliaoBuy: 'ifBuyYiliao',
  yiliaoSell: 'ifSellYiliao',
  shengwuBuy: 'ifBuyShengwu',
  shengwuSell: 'ifSellShengwu',
  jijianBuy: 'ifBuyJijian',
  jijianSell: 'ifSellJijian'
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
        if (value >= xData[i].number && value < xData[i + 1].number) {
          xData[i].count++
          xData[i].countList.push(value)
          break
        }
      }
      for (let j = 0; j < xData.length; j++) {
        if (value2 >= xData[j].number && value2 < xData[j + 1].number) {
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
      if (xData[k].count >= 4) {
        count = count + xData[k].count;
        for (let c = 0; c < xData[k].countList.length; c++) {
          all = all + xData[k].countList[c]
        }
      }
      if (xData[k].count2 >= 4) {
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
    return {list: listTemp, threshold: threshold}
  }
}

export default IndexInfoUtil
