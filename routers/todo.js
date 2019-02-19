/*
 * @Author: sky
 * @Date: 2019-01-29 14:55:38
 * @email: 13011316073@163.com
 * @Description: todo router
 */
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);


/* 数据 */
const dataPath = './data/todoList.json';
const todoListData = require('../data/todoList.json');


/**
 * GET /api/todo?id=xxx
 * 获取某一个todo
 */
router.get('/', async ctx => {
    let id = ctx.query.id;

    let todo = todoListData.todos.find(todo => todo.id == id);
    todo = todo || [];

    let data = {
        msg: 'success',
        result: todo
    }
    ctx.body = data;
})


/**
 * GET /api/todo/all
 * 获取所有的 todoList
 */
router.get('/all', async ctx => {
    let data = {
        msg: 'success',
        result: todoListData.todos
    }
    ctx.body = data;
})


/**
 * POST /api/todo
 * 添加一个新的状态
 */
router.post('/', async ctx => {

    let title = ctx.request.body.title;

    if (!title) {
        ctx.status = 400;
        ctx.body = {
            msg: 'error',
            result: '请传入 title 值。'
        };
        return;
    }

    let newTodo = {
        id: ++todoListData._id,
        title,
        done: false
    }
    todoListData.todos.push(newTodo);

    // 数据更改完毕，将数据存储回去。
    let wf = await writeFile(dataPath, JSON.stringify(todoListData));

    if (!wf) {
        ctx.body = {
            msg: 'success',
            result: newTodo
        };
    }
})


/**
 * PUT /api/todo
 * 更改某一个的状态
 */
router.put('/', async ctx => {
    let id = parseInt(ctx.request.body.id);
    if (!id) {
        ctx.status = 400;
        ctx.body = {
            msg: 'error',
            result: '请传入 id 值。'
        };
        return;
    }

    let todo = todoListData.todos.find(todo => todo.id === id);
    todo.done = !todo.done;

    let wf = await writeFile(dataPath, JSON.stringify(todoListData));

    if (!wf) {
        ctx.body = {
            msg: 'success',
            result: todo
        };
    }
})


/**
 * DELETE /api/todo
 * 删除某一个的状态
 */
router.delete('/', async ctx => {
    let id = parseInt(ctx.request.body.id);
    if (!id) {
        ctx.status = 400;
        ctx.body = {
            msg: 'error',
            result: '请传入 id 值。'
        };
        return;
    }

    todoListData.todos = todoListData.todos.filter(todo => todo.id !== id);

    let wf = await writeFile(dataPath, JSON.stringify(todoListData));

    if (!wf) {
        ctx.body = {
            msg: 'success',
            result: '删除成功'
        };
    }
})



module.exports = () => router.routes();