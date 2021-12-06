var express = require("express");
var router = express.Router();
const users = [
  {
    id: 1,
    name: "Tessie Black",
    email: "tblack@gmail.com",
    phone: "(226) 234-7896",
    password: "tblack",
  },
  {
    id: 2,
    name: "Amanda James",
    email: "ajames@gmail.com",
    phone: "(231) 234-4589",
    password: "ajames",
  },
  {
    id: 3,
    name: "Stacey Morgan",
    email: "smorgan@gmail.com",
    phone: "(345) 556-5372",
    password: "smorgan",
  },
];

var crrentUser = {};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/authenticate", function (req, res, next) {
  var user = users.filter(
    (x) =>
      x.username === req.query.username && x.password === req.query.password
  );

  crrentUser = user;
  console.log(222, crrentUser);

  res.send({
    status: 200,
    data: user && user.length > 0 ? user[0] : {},
  });
});

router.get("/current", function (req, res, next) {
  res.send({
    status: 200,
    data: crrentUser,
  });
});

router.get("/create", function (req, res, next) {
  var newUser = {
    id: users && users.length == 0 ? 1 : users.length + 1,
    name: req.query.name,
    email: req.query.email,
    phone: req.query.phone,
    password: req.query.password,
  };

  console.log(1111, newUser);

  users.push(newUser);
  crrentUser = newUser;

  res.send({
    status: 200,
    data: newUser,
  });
});

module.exports = router;
