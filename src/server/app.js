const Koa = require("koa");
const Router = require("koa-router");
const Logger = require("koa-logger");
const Cors = require("@koa/cors");
const BodyParser = require("koa-body");
const Helmet = require("koa-helmet");
const respond = require("koa-respond");

const app = new Koa();
const router = new Router();

require("./db");

app.use(Helmet());

if (process.env.NODE_ENV === "development") {
  app.use(Logger());
}

app.use(Cors({ credentials: true }));
app.use(
  BodyParser({
    jsonLimit: "5mb",
    multipart: true,
    strict: true,
    onerror: function(err, ctx) {
      ctx.throw(err);
    }
  })
);

app.use(respond());

app.keys = [
  "0\xc5\x11\xb4S9:\xbd\xbfK\xb2\xf5\xc7j\x01\xedBR\xe5\xb3\x1cpS\x8d"
];


require("../routes")(router);

app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;
