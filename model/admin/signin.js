const signinModel = require("../../database/models/admin")
const psSecret = require("../../middleware/password-MD5/PwSecret")
exports.signinCreate = (params, res, callback) => {

  var password = psSecret.pwsecret(params.password)
  console.log(password);
  signinModel.create({
    nickName: params.name,
    email: params.email,
    telphone: params.telphone,
    password: password,
    createUser: params.name,
    updateUser: params.name
  }).then(msg => {

    console.log(msg);
    res.json({
      code: 200,
      data: "注册成功"
    })
  })
}