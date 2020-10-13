const users = require("./users");

module.exports = (router) => {
  router.use("/users", users);
};
