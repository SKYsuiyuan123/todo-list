/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: 操作 todo-list
 * @Date: 2019-02-19 23:01:36
 */
import { fromJS } from 'immutable';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

// 定义一个 immutable 类型的数据, fromJS 会把对象里边的对象也变成 immutable 类型的数据。
const defaultState = fromJS({
  inputValue: '',
  list: []
});

// const defaultState = {
//   inputValue: '',
//   list: []
// }


// reducer 可以接受 state, 但是绝不能修改 state
// 它是一个纯函数，不能有时间的操作，不能有异步的操作。
// 纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。
export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {

    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;

    case ADD_TODO_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      break;

    case DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      break;

    case INIT_LIST_ACTION:
      newState.list = [...action.data];
      break;

    default:
      break;
  }

  // immutable 对象的 set 方法，会结合之前 immutable 对象的值和设置的值，返回一个全新的对象
  return state.merge({
    inputValue: newState.inputValue,
    list: fromJS(newState.list)
  });

  // return state.set('inputValue', newState.inputValue)
  //   .set('list', fromJS(newState.list));

  // 返回新的 state
  // return newState;
}
