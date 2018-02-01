/**
 * Created by xiaobxia on 2018/2/1.
 */
import http from 'localUtil/httpUtil';
const FUND_QUERY_FUNDS_BEGIN = 'FUND_QUERY_FUNDS_BEGIN';
const FUND_QUERY_FUNDS_SUC = 'FUND_QUERY_FUNDS_SUC';

export const fundActions = {
  queryFunds(queryString) {
    return (dispatch, getState) => {
      dispatch({type: FUND_QUERY_FUNDS_BEGIN});
      return http.get('fund/getFunds').then((data) => {
        dispatch({type: FUND_QUERY_FUNDS_SUC, data: data.data});
        console.log(data);
        return data;
      });
    };
  }
};

const fundStore = {
  fundList: [],
  fundInfo: {},
  currentFund: {}
};
export const fundReducers = (state = fundStore, action) => {
  let store = Object.assign({}, state);
  switch (action.type) {
    case FUND_QUERY_FUNDS_BEGIN: {
      store.fundList = [];
      store.fundInfo = {};
      return store;
    }
    case FUND_QUERY_FUNDS_SUC: {
      const data = action.data;
      store.fundList = data.list;
      store.fundInfo = data.info;
      return store;
    }
    //TODO 需要有default返回返回旧的state
    default: {
      return state
    }
  }
};
