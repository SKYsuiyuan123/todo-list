/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: 主模块
 * @Date: 2019-02-19 17:35:22
 */
import React, { Component, Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';


// 引入 路由相关 页面
import Home from './pages/home';
import Detail from './pages/detail/loadable';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Fragment>
              <Route
                path='/'
                exact
                component={Home}>
              </Route>
              <Route
                path='/detail/:id'
                exact
                component={Detail}>
              </Route>
            </Fragment>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
