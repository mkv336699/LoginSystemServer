var express = require('express');
const { getAllUsers, createUser } = require('../actions/user');
var router = express.Router();

/* GET all users. */
router.get('/', function (req, res, next) {
  getAllUsers()
    .then(data => {
      console.log("then", data);
      res.send({ success: true, data: data });
    })
    .catch(error => {
      console.log("catch", error);
      res.send({ success: false, errors: [error] });
    })
});

/** Add User */
router.post('/', async (req, res, next) => {
  console.log("reqqqqq", req.body);
  createUser(req).then(data => {
    console.log("then", data);
    res.send({ success: true, data: data })
  }).catch(error => {
    console.log("catch", error);
    res.send({ success: false, errors: [error] })
  })
});

module.exports = router;
