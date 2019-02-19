/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: 主模块
 * @Date: 2019-02-19 17:35:22
 */
import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';

// 引入组件
import TodoList from './Components/TodoList/TodoList';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h3 style={{ margin: '20px auto' }}>Hello TodoList!</h3>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
