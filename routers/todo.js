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

const pool = require('../data/dbLink');

const writeFile = util.promisify(fs.writeFile);


/* 数据 */
const dataPath = './data/todoList.json';
const todoListData = require('../data/todoList.json');

const queryData = (sql) => new Promise((resolve, reject) => {
	pool.query(sql, (err, result) => {
		if (err) {
			reject(err);
		} else {
			resolve(result);
		}
	})
});

/**
 * GET /api/todo?id=xxx
 * 获取某一个todo
 */
router.get('/', async ctx => {
	let id = ctx.query.id;

	let data = await queryData(`select * from todo where id = ${id}`);

	ctx.body = {
		msg: 'success',
		data
	};
})

/**
 * GET /api/todo/all
 * 获取所有的 todoList
 */
router.get('/all', async ctx => {
	let data = await queryData('select * from todo');

	ctx.body = {
		msg: 'success',
		data
	};
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

	let data = await queryData(`insert into todo(title, creat_time, done) values('${title}', '2019-03-31 23:40', false)`);
	console.log(data);
	ctx.body = {
		msg: 'success',
	};
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

	let oldData = await queryData(`select done from todo where id = ${id}`);

	const done = !JSON.stringify(oldData)[0].done;

	let data = await queryData(`update todo set done=${done} where id=${id}`);
	ctx.body = {
		msg: 'success',
	};

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

	let data = await queryData(`delete from todo where id=${id}`);
	console.log(data);
	ctx.body = {
		msg: 'success',
	};
})

module.exports = () => router.routes();
