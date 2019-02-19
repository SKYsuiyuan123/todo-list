/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: file content
 * @Date: 2019-02-19 18:38:13
 */
import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';


const TodoListUI = (props) => {

  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;

  return (
    <div>
      <Input
        placeholder='Todo Info'
        value={inputValue}
        style={{ width: '40vw', marginRight: '10px' }}
        onChange={changeInputValue} />
      <Button type='primary' onClick={handleClick}>提交</Button>
      <List
        style={{ width: '80vw', margin: '20px auto' }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (<List.Item onClick={() => handleDelete(index)}>{item}</List.Item>)}>
      </List>
    </div>
  )
}


export default TodoListUI;
