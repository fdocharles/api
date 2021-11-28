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

  console.log("users", user);

  if (user && user.length > 0) {
    res.send({
      status: 200,
      message: "Valid user",
      data: {
        id: user.id,
      },
    });
  } else {
    res.send({
      status: 401,
      message: "Username or Password Invalid",
      data: {},
    });
  }
});

module.exports = router;
