import  Koa from 'koa';
import  Router from "koa-router";
import AppRoutes from './router';
const { Nuxt, Builder } = require('nuxt');
const app = new Koa();
const router:any = new Router();
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = app.env !== 'production';
async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config);
    const host:any = process.env.HOST || '127.0.0.1'
    const port = process.env.PORT || 7777
    // const { host = process.env.HOST || '127.0.0.1', port = process.env.PORT || 7777 } = nuxt.options.server;
    // Build in development
    if (config.dev) {
      const builder = new Builder(nuxt);
      await builder.build();
    } else {
      await nuxt.ready();
    }
    // app.use(KoaBody({ multipart: true }));
    // app.use(router);
  
    app.use(ctx => {
      ctx.status = 200;
      ctx.respond = false; // Bypass Koa's built-in response handling
      // @ts-ignore
      ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res);
    });
    app.use(router.routes());
    app.use(router.allowedMethods)
    AppRoutes.forEach(route => router[route.method](route.path, route.action));
    app.listen(port, host);
    console.log(
      `Server listening on http://${host}:${port}`,
    );
  }
  
  start();