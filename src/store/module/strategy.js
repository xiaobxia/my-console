/**
 * Created by xiaobxia on 2018/1/26.
 */
import http from 'localUtil/httpUtil';
const STRATEGY_QUERY_STRATEGYS_BEGIN = 'STRATEGY_QUERY_STRATEGYS_BEGIN';
const STRATEGY_QUERY_STRATEGYS_SUC = 'STRATEGY_QUERY_STRATEGYS_SUC';

export const strategyActions = {
  queryStrategy(queryString) {
    return (dispatch, getState) => {
      dispatch({type: STRATEGY_QUERY_STRATEGYS_BEGIN});
      return http.get('analyze/getStrategy').then((data) => {
        dispatch({type: STRATEGY_QUERY_STRATEGYS_SUC, data: data.data});
        console.log(data)
        return data;
      });
    };
  }
};

const strategyStore = {
  tableLoading: false,
  strategyList: []
};
export const strategyReducers = (state = strategyStore, action) => {
  let store = Object.assign({}, state);
  switch (action.type) {
    case STRATEGY_QUERY_STRATEGYS_BEGIN: {
      store.strategyList = [];
      store.tableLoading = true;
      return store;
    }
    case STRATEGY_QUERY_STRATEGYS_SUC: {
      const data = action.data;
      store.strategyList = data.strategy;
      store.tableLoading = false;
      return store;
    }
    //TODO 需要有default返回返回旧的state
    default: {
      return state
    }
  }
};

