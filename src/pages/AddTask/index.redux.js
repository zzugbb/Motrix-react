//action types
const LOGIN_IN = 'ADD_TASK'

const initState = {
  fileList: []
};

//reducer处理函数, 入参为`state`及`action`
export default function TaskRedux(state = initState, action) {
  switch (action.type) {
    case LOGIN_IN : 
      return {
        fileList: [...state.fileList, action.fileInfo]
      }
    default: 
      return state;  
  }
} 

//reducer 相关的 action creators
export const AddTaskFunction = (fileInfo) => {
  return { 
    type: LOGIN_IN, 
    fileInfo
  }
} 
