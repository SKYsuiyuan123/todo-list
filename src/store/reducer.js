/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: file content
 * @Date: 2019-02-19 17:54:50
 */
import { combineReducers } from 'redux';
import { reducer as todoListReducer } from '../Components/TodoList/store';

// 管理所有的 reducer
const reducer = combineReducers({
  todoList: todoListReducer
})


export default reducer;
