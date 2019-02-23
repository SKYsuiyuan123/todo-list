/*
 * @Author: sky
 * @email: 13011316073@163.com
 * @Description: file content
 * @Date: 2019-02-19 18:38:13
 */
import React from 'react';
import { Input, Button, List, Modal } from 'antd';
import 'antd/dist/antd.css';


const TodoListUI = (props) => {

  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;

  function delItem(index) {
    if (list.size === 1) {

      const confirm = Modal.confirm;
      confirm({
        title: '你确定删除最后一项吗?',
        content: '点击确定按钮会删除最后一项，请注意：该删除无法恢复！',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          handleDelete(index);
        },
        onCancel() {
          console.log('删除取消');
        }
      });
    } else {
      handleDelete(index);
    }
  }

  return (
    <div>
      <Input
        placeholder='Todo Info'
        value={inputValue}
        style={{ width: '40vw', marginRight: '10px' }}
        onChange={changeInputValue}
        onKeyDown={(e) => e.keyCode === 13 && handleClick()} />
      <Button type='primary' onClick={handleClick}>提交</Button>
      <List
        style={{ width: '80vw', margin: '20px auto' }}
        bordered
        locale={{ emptyText: "目前暂无内容，请在上放输入内容，回车或点击按钮添加内容。" }}
        dataSource={list}
        renderItem={(item, index) => (<List.Item
          actions={[<Button
            type="danger"
            size="small"
            onClick={() => delItem(index)}>
            删除
              </Button>]}>
          {item}
        </List.Item>)}>
      </List>
    </div >
  )
}


export default TodoListUI;
