/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: file content
 * @Date: 2019-02-19 17:54:50
 */
import { combineReducers } from 'redux-immutable';
import { reducer as todoListReducer } from '../Components/TodoList/store';


// 管理所有的 reducer 生成的是一个 immutable 类型的数据
const reducer = combineReducers({
  todoList: todoListReducer
})


export default reducer;
