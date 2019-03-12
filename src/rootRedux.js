import { combineReducers } from 'redux';
import TaskRedux from './pages/AddTask/index.redux.js'


//多个reducer合并
const rootReducer = combineReducers({
  TaskRedux,
})

export default rootReducer;
