/*
 * @Author: sky
 * @Date: 2019-01-29 14:55:02
 * @email: 13011316073@163.com
 * @Description: middleware
 */
const static = require('koa-static');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');


// import controller
const controller = require('../controller');


module.exports = app => {

    /* 允许跨域 */
    app.use(cors());

    /* request time */
    app.use(async (ctx, next) => {
        let time = new Date();
        console.log(time);
        await next();
    })

    /* logger */
    app.use(logger());

    /* post */
    app.use(bodyparser());

    /* routers controller */
    app.use(controller());

    /* static */
    app.use(static('static'));
}