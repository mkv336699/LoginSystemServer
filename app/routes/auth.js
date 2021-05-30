var express = require('express');
const { login, loginViaGoogle } = require('../actions/auth');
var router = express.Router();

/* login. */
router.post('/login', function (req, res) {
    login(req).then(data => {
        console.log("then", data);
        if (data.length == 0) {
            res.send({ success: false, errors: ['No such user found'] });
        }
        res.send({ success: true, data: data[0] });
    }).catch(error => {
        console.log("catch", error);
        res.send({ success: false, errors: [error] });
    })
});


router.post('/loginViaGoogle', function (req, res) {
    loginViaGoogle(req).then(data => {
        console.log("then", data);
        if (data.length == 0) {
            res.send({ success: false, errors: ['No such user found'] });
        }
        res.send({ success: true, data: data[0] });
    }).catch(error => {
        console.log("catch", error);
        res.send({ success: false, errors: [error] });
    })
});

module.exports = router;
