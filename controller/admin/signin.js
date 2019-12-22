const sqlCreate = require("../../model/admin/signin")
const verificat = require("../../middleware/admin-verification/admin")
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