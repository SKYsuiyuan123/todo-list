/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: file content
 * @Date: 2019-02-19 17:43:08
 */
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

// 引入 action 操作
import { actionCreators } from './store';

// 引入 UI组件
import TodoListUI from './TodoListUI';


class TodoList extends PureComponent {

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
const mapStateToProps = (state) => ({
	// 这里的 todoList 和 inputValue,list 都是 immutable 类型的数据，所以都要使用 get() 去获取
	inputValue: state.get('todoList').get('inputValue'),
	// 与上边的等价
	list: state.getIn(['todoList', 'list'])
	// list: state.get('todoList').get('list')
});


// 方法的映射关系
const mapDispatchToProps = (dispatch) => {
	return {

		// input 输入框改变触发
		changeInputValue(e) {
			// const action = {
			// 	type: 'change_input_value',
			// 	value: e.target.value
			// }
			const action = actionCreators.getInputChangeAction(e.target.value);
			dispatch(action);
		},

		// 添加数据
		handleClick() {
			const action = actionCreators.getAddItemAction();
			dispatch(action);
		},

		// 删除数据
		handleDelete(index) {
			const action = actionCreators.getDeleteItemAction(index);
			dispatch(action);
		},

		// 获取所有的 item 值
		getTodoLists() {
			const action = actionCreators.getTodoList();
			dispatch(action);
		}
	}
};


// 返回一个容器组件 是 connect 执行后返回的结果。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
