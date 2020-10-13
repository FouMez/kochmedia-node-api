require('dotenv').config();
const app  = require('./app');

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`API server started on ${port}`)
);

module.exports = server;
