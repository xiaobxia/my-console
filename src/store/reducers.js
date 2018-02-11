/**
 * Created by xiaobxia on 2017/10/19.
 */
import { combineReducers } from 'redux'
import {appReducers} from './module/app';
import {myFundReducers} from './module/myFund';
import {fundReducers} from './module/fund';
import {strategyReducers} from './module/strategy';
export default combineReducers({
  app: appReducers,
  myFund: myFundReducers,
  fund: fundReducers,
  strategy: strategyReducers
})
