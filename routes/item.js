var express = require("express");
var router = express.Router();
var { items } = require("../data");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(items);
});

router.post("/:id", function (req, res, next) {
  res.send(items.filter((x) => x.id == id));
});

module.exports = router;
