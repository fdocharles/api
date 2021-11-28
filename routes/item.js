var express = require("express");
var router = express.Router();
var { items } = require("../data");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(items);
});

router.get("/:id", function (req, res, next) {
  res.send(items.filter((x) => x.id == req.params.id));
});

module.exports = router;
