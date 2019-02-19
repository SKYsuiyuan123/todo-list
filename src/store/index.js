/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: store
 * @Date: 2019-02-19 17:48:54
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);


export default store;
