const Router = require("koa-router");

const router = new Router();
const UserController = require("../controllers/user");

router.get("/", UserController.findAll);
router.post("/", UserController.create);
router.get("/:id", UserController.findById);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.remove);

module.exports = router.routes();
