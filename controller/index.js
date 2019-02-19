/*
 * @Author: sky
 * @Date: 2019-01-29 14:55:20
 * @email: 13011316073@163.com
 * @Description: routers controller
 */
const Router = require('koa-router');
const router = new Router();


// import todo
const todoRouter = require('../routers/todo');
router.use('/api/todo', todoRouter());


module.exports = () => router.routes();