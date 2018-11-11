const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';

const redis = require('redis');
const client = redis.createClient({ host: REDIS_HOST });

const { promisify } = require('util');
const sismemberAsync = promisify(client.sismember).bind(client);
const smembersAsync = promisify(client.smembers).bind(client);

client.on('error', err => {
  console.error('' + err);
})

router.get('/', (ctx, next) => {
  return smembersAsync('gt8').then(res => {
    ctx.body = res;
  });
});

router.get('/:imdb_id', (ctx, next) => {
  return sismemberAsync('gt8', ctx.params.imdb_id).then(res => {
    ctx.body = res;
  });
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);