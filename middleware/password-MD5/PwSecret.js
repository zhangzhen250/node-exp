const Buffer = require("buffer");
const crypto = require("crypto");


var md5 = (data) => {
  let hash = crypto.createHash("md5");
  return hash.update(data).digest("base64");
}

var hmac = (data) => {
  let hmac = crypto.createHmac('md5', '250');
  return hmac.update(data).digest('base64');
}
// 对密码进行加密
exports.pwsecret = (pw) => {

  let pwamd = "";
  var random = parseInt(Math.random() * 1000000000000);
  var bufpassword = Buffer.Buffer.from(toString(random), "base64").toString("base64");
  pwamd = hmac(md5(bufpassword.concat(pw)));
  return pwamd;
}