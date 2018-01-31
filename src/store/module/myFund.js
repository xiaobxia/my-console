/**
 * Created by xiaobxia on 2018/1/26.
 */
import http from 'localUtil/httpUtil';
const MYFUND_QUERY_MYFUNDS_BEGIN = 'MYFUND_QUERY_MYFUNDS_BEGIN';
const MYFUND_QUERY_MYFUNDS_SUC = 'MYFUND_QUERY_MYFUNDS_SUC';

export const myFundActions = {
  queryMyFunds(queryString) {
    return (dispatch, getState) => {
      dispatch({type: MYFUND_QUERY_MYFUNDS_BEGIN});
      return http.get('fund/getUserFunds').then((data) => {
        dispatch({type: MYFUND_QUERY_MYFUNDS_SUC, data: data.data});
        console.log(data)
        return data;
      });
    };
  }
  // clearCurrentMyFund() {
  //   return (dispatch, getState) => {
  //     dispatch({type: MYFUND_QUERY_MYFUND_BEGIN});
  //   };
  // },
  // addMyFund(data) {
  //   return (dispatch, getState) => {
  //     return http.post('myFunds/add', data).then((data) => {
  //       console.log(data)
  //       return data;
  //     });
  //   };
  // },
  // saveMyFund(data) {
  //   return (dispatch, getState) => {
  //     return http.post('myFunds/save', data).then((data) => {
  //       console.log(data)
  //       return data;
  //     });
  //   };
  // },
  // deleteMyFund(id) {
  //   return (dispatch, getState) => {
  //     return http.get('myFunds/delete?id=' + id).then((data) => {
  //       console.log(data)
  //       return data;
  //     });
  //   };
  // }
};

const myFundStore = {
  myFundList: [],
  myFundInfo: {},
  currentMyFund: {}
};
export const myFundReducers = (state = myFundStore, action) => {
  let store = Object.assign({}, state);
  switch (action.type) {
    case MYFUND_QUERY_MYFUNDS_BEGIN: {
      store.myFundList = [];
      store.myFundInfo = {};
      return store;
    }
    case MYFUND_QUERY_MYFUNDS_SUC: {
      const data = action.data;
      store.myFundList = data.list;
      store.myFundInfo = data.info;
      return store;
    }
    //TODO 需要有default返回返回旧的state
    default: {
      return state
    }
  }
};
