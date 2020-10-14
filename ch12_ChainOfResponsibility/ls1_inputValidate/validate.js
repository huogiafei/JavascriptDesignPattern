/**
 * form validate
 */

function checkEmail(email){
    const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    return emailReg.test(email)
}

function checkExistEmail(email){
    //请求接口，判断此邮箱是否已经注册
    //此处省略具体实现
    console.log('该邮件已被注册，请重新填写');
    return false;
}

export {
    checkEmail,
    checkExistEmail
}
