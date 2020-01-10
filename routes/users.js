var express = require('express');
var router = express.Router();

const signinControl = require("../controller/admin/signin")

/* GET users listing. */

router.get('/signin', (req, res, next)=> {
    res.render("admin/signin")
});
router.get('/login',(req,res,next)=>{
    res.render("admin/login")
})



router.post("/signin",signinControl.signin)
router.post("/login",signinControl.login)
module.exports = router;
