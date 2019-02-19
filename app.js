/*
 * @Author: sky
 * @Date: 2019-01-29 14:51:26
 * @email: 13011316073@163.com
 * @Description: app
 */
const Koa = require('koa');


// import middleware
const middleware = require('./middleware');


const port = 3000;

const app = new Koa();


/* middleware */
middleware(app);


app.listen(port, () => {
    console.log(`server is running at ${port} port...`);
});