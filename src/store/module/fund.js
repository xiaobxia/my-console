/**
 * Created by xiaobxia on 2018/2/1.
 */
import http from 'localUtil/httpUtil';
const FUND_QUERY_FUNDS_BEGIN = 'FUND_QUERY_FUNDS_BEGIN';
const FUND_QUERY_FUNDS_SUC = 'FUND_QUERY_FUNDS_SUC';
const FUND_QUERY_FUND_BEGIN = 'FUND_QUERY_FUND_BEGIN';
const FUND_QUERY_FUND_SUC = 'FUND_QUERY_FUND_SUC';
const FUND_QUERY_FUND_ANALYZE_BEGIN = 'FUND_QUERY_FUND_ANALYZE_BEGIN';
const FUND_QUERY_FUND_ANALYZE_SUC = 'FUND_QUERY_FUND_ANALYZE_SUC';
const FUND_QUERY_FUND_ANALYZE_RECENT_BEGIN = 'FUND_QUERY_FUND_ANALYZE_RECENT_BEGIN';
const FUND_QUERY_FUND_ANALYZE_RECENT_SUC = 'FUND_QUERY_FUND_ANALYZE_RECENT_SUC';

export const fundActions = {
  queryFunds(query) {
    return (dispatch, getState) => {
      dispatch({type: FUND_QUERY_FUNDS_BEGIN});
      return http.get('fund/getFunds', query).then((data) => {
        dispatch({type: FUND_QUERY_FUNDS_SUC, data: data.data});
        return data;
      });
    };
  },
  queryFund(code) {
    return (dispatch, getState) => {
      dispatch({type: FUND_QUERY_FUND_BEGIN});
      return http.get('fund/getFund', {code}).then((data) => {
        dispatch({type: FUND_QUERY_FUND_SUC, data: data.data});
        return data;
      });
    };
  },
  queryFundAnalyzeBase(code) {
    return (dispatch, getState) => {
      dispatch({type: FUND_QUERY_FUND_ANALYZE_BEGIN});
      return http.get('analyze/getFundAnalyzeBase', {code}).then((data) => {
        dispatch({type: FUND_QUERY_FUND_ANALYZE_SUC, data: data.data});
        return data;
      });
    };
  },
  queryFundAnalyzeRecent(code) {
    return (dispatch, getState) => {
      dispatch({type: FUND_QUERY_FUND_ANALYZE_RECENT_BEGIN});
      return http.get('analyze/getFundAnalyzeRecent', {code}).then((data) => {
        dispatch({type: FUND_QUERY_FUND_ANALYZE_RECENT_SUC, data: data.data});
        return data;
      });
    };
  }
};

const fundStore = {
  tableLoading: false,
  fundList: [],
  pagination: {},
  currentFund: {},
  currentFundAnalyzeBase: {},
  currentFundAnalyzeRecent: {}
};
export const fundReducers = (state = fundStore, action) => {
  let store = Object.assign({}, state);
  switch (action.type) {
    case FUND_QUERY_FUNDS_BEGIN: {
      store.tableLoading = true;
      // store.fundList = [];
      // store.pagination = {};
      return store;
    }
    case FUND_QUERY_FUNDS_SUC: {
      const data = action.data;
      store.fundList = data.list;
      store.pagination = data.page;
      store.tableLoading = false;
      return store;
    }
    case FUND_QUERY_FUND_BEGIN: {
      store.currentFund = {};
      return store;
    }
    case FUND_QUERY_FUND_SUC: {
      store.currentFund = action.data;
      return store;
    }
    case FUND_QUERY_FUND_ANALYZE_BEGIN: {
      store.currentFundAnalyzeBase = {};
      return store;
    }
    case FUND_QUERY_FUND_ANALYZE_SUC: {
      store.currentFundAnalyzeBase = action.data;
      return store;
    }
    case FUND_QUERY_FUND_ANALYZE_RECENT_BEGIN: {
      store.currentFundAnalyzeRecent = {};
      return store;
    }
    case FUND_QUERY_FUND_ANALYZE_RECENT_SUC: {
      store.currentFundAnalyzeRecent = action.data;
      return store;
    }
    //TODO 需要有default返回返回旧的state
    default: {
      return state
    }
  }
};
