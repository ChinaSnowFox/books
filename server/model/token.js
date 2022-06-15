// module.md5 =
const crypto = require('crypto')



// 加密
function encrypt (content) {
    try{
        const key = '0132456789abcdef',iv = 'fedcba9876543210'
        const aes = crypto.createCipheriv('aes-128-cbc',key,iv)
        return aes.update(content,'utf8','hex')+aes.final('hex')
    }catch (e) {
        console.log('加密失败')
        return e.message||e
    }
}
// 解密
function decode(content) {
    try {
        const key = '0132456789abcdef',iv = 'fedcba9876543210'
        const aes = crypto.createDecipheriv('aes-128-cbc',key,iv)
        return aes.update(content,'hex','utf8')+aes.final('utf8')
    }catch (e) {
        console.log('解密失败')
        return e.message||e
    }
}

// 使用MD5获取加密密码和用户名获取token
function token (code) {
    const md5 = crypto.createHash('md5')
    return md5.update(code).digest('hex')
}


module.exports = {
    encrypt,decode,token
}
