/*
 * @Author: sky
 * @Date: 2019-02-19 14:47:58
 * @email: 13011316073@163.com
 * @Description: 封装 action 的创建
 */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import Axios from 'axios';


// 初始化数据
const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})


// 监听 input 输入
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

// 添加一个数据
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

// 删除某一个数据
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index: index
})

// 异步获取 初始化数据
export const getTodoList = () => async dispatch => {

  try {
    let res = await Axios.get('http://localhost:3000/api/todo-list.json');
    if (res.data.msg === 'success') {
      const action = initListAction(res.data.result.list);
      dispatch(action);
    } else {
      throw new Error('接口请求失败');
    }
  } catch (error) {
    console.log(error);
  }

  // Axios.get('http://localhost:3000/api/todolist')
  // 	.then(res => {
  // 		const action = initListAction(res.data);
  // 		dispatch(action);
  // 	})
  // 	.catch(err => console.log(err));
}
