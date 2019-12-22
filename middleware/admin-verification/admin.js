
exports.emailver=(params,callback)=>{
  let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
  if(reg.test(params.email)){
    callback("200")
  }else{
    callback("请输入正确的邮箱格式")
  }
}