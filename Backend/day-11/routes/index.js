var express = require("express");
const register = require("../controllers/register");
var router = express.Router();
const registerInitialCheck = require("../middlewares/registerCheck");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/**
 * @requires-> {email, name, password, confirmPassword}
 * @desciption
 * Security, Edge cases, and performance
 * validation -> email, password
 *
 */
router.post("/register", registerInitialCheck, register);
module.exports = router;
