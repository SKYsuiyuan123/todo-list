/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: home 页面
 * @Date: 2019-02-24 18:15:26
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 引入组件
import TodoList from '../../Components/TodoList/TodoList';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3 style={{ margin: '20px auto' }}>Hello TodoList!</h3>
        <TodoList />
        <p>
          <Link to={'/detail/' + 1}>去详情页</Link>
        </p>
      </div>
    )
  }
}


export default Home;
