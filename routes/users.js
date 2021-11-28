var express = require("express");
var router = express.Router();
var { users } = require("../data");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/authenticate", function (req, res, next) {
  var user = users.filter(
    (x) =>
      x.username === req.query.username && x.password === req.query.password
  );

  res.send({
    status: 200,
    data: user && user.length > 0 ? user[0] : {},
  });
});

module.exports = router;
