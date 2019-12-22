var express = require('express');
var router = express.Router();

const signinControl = require("../controller/admin/signin")

/* GET users listing. */

router.get('/signin', (req, res, next)=> {
    res.render("admin/signin")
});



router.post("/signin",signinControl.signin)
module.exports = router;
