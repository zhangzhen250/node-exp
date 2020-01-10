const sqlCreate = require("../../model/admin/signin")
const verificat = require("../../middleware/admin-verification/admin")
const pwMD5 = require("../../middleware/password-MD5/PwSecret")
exports.signin = (req, res, next) => {


  verificat.emailver(req.body, (emailmsg) => {
    if (emailmsg == 200) {
      sqlCreate.signinCreate(req.body, res);
    }else{
      res.json({
        code:400,
        data:emailmsg
      })
    }
  })
}

exports.login = (req,res,next)=>{
  let md5pw = pwMD5.pwsecret(req.body.password)
  console.log(md5pw);+-
  res.json({
    code:200,
    message:"收到了"
  })
}