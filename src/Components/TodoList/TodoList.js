/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: file content
 * @Date: 2019-02-19 17:43:08
 */
import React, { Component, Fragment } from 'react';

// 引入 action 操作
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators';

import { connect } from 'react-redux';

// 引入 UI组件
import TodoListUI from './TodoListUI';

class TodoList extends Component {

	constructor(props) {
		super(props);

		// 发送请求
		this.props.getTodoLists();
	}

	render() {

		const { inputValue, list, changeInputValue, handleClick, handleDelete } = this.props;
		return (
			<Fragment>
				<TodoListUI
					inputValue={inputValue}
					list={list}
					changeInputValue={changeInputValue}
					handleClick={handleClick}
					handleDelete={handleDelete}
				/>
			</Fragment>
		)
	}
}


// 数据的映射关系
const mapStateToProps = (state) => {
	return {
		inputValue: state.todoList.inputValue,
		list: state.todoList.list
	}
}

// 方法的映射关系
const mapDispatchToProps = (dispatch) => {
	return {

		// input 输入框改变触发
		changeInputValue(e) {
			// const action = {
			// 	type: 'change_input_value',
			// 	value: e.target.value
			// }
			const action = getInputChangeAction(e.target.value);
			dispatch(action);
		},

		// 添加数据
		handleClick() {
			const action = getAddItemAction();
			dispatch(action);
		},

		// 删除数据
		handleDelete(index) {
			const action = getDeleteItemAction(index);
			dispatch(action);
		},

		// 获取所有的 item 值
		getTodoLists() {
			const action = getTodoList();
			dispatch(action);
		}
	}
}


// 返回一个容器组件 是 connect 执行后返回的结果。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
