/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: 详情页面
 * @Date: 2019-02-24 18:16:17
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class Detail extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        Detail
        <p>
          <Link to='/'>回首页</Link>
        </p>
      </div>
    )
  }
}


export default withRouter(Detail);
