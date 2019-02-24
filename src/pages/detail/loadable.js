/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: 使用异步组件
 * @Date: 2019-02-24 23:33:53
 */
import React from 'react';
import Loadable from 'react-loadable';


const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>正在加载!</div>
  }
});


export default () => <LoadableComponent />
