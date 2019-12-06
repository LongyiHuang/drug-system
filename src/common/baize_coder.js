// AES加密工具
var crypto = require('crypto-js');
// RSA加密工具
const JSEncrypt = require('jsencrypt'); // 引入模块

const NodeRSA = require('node-rsa');

// AES加密初始向量
const iv = 'chinavisionaryiv';
// const iv = 'liangzhanmingrix';

const dataSeparator = 'cvdata_separator';
// const dataSeparator = 'data_separator';

// baize加密
const baizeEncrypt = (data, publicKey) => {
  var result = '';
  if (data != null || data !== '') {
    data = data instanceof Object ? JSON.stringify(data) : data.toString()
    // 获取AES加密秘钥
    const aesKey = getAesKey();
    // console.log("aesKey:"+aesKey);
    // 用AES加密明文数据
    const dataAfterAes = getAesEncryptString(data, aesKey, iv);
    // console.log("dataAfterAes:" + dataAfterAes);
    // 用RSA加密AES加密秘钥
    const keyAfterRsa = getRsaEncryptString(aesKey, publicKey);
    // console.log("keyAfterRsa:" + keyAfterRsa);
    // 拼凑密文
    result = dataAfterAes + dataSeparator + keyAfterRsa;
  }
  return result;
}

const baizeDecrypt = (ciphertext, publicKey) => {
  var result = '';
  if (ciphertext) {
    // 分割密文， 分出用AES加密明文数据和用RSA加密AES加密秘钥
    const splitBuffer = ciphertext.split(dataSeparator);
    if (splitBuffer && splitBuffer.length === 2) {
      const aesKey = rsaDecrypt(splitBuffer[1], publicKey); // RSA公钥解密，得到AES加密的秘钥
      // console.log('RSA公钥解密，得到AES加密的秘钥：' + aesKey)
      result = getAesDecryptString(splitBuffer[0], aesKey, iv); // AES解密，得到明文
    }
  }
  return result;
}


// AES加密
const getAesEncryptString = (data, key, iv) => {
  const key2 = crypto.enc.Utf8.parse(key); ;
  const iv2 = crypto.enc.Utf8.parse(iv);
  return crypto.AES.encrypt(data, key2, {
    iv: iv2,
    mode: crypto.mode.CBC,
    padding: crypto.pad.ZeroPadding
  });
};

// AES解密
const getAesDecryptString = (ciphertext, key, iv) => {
  const key2 = crypto.enc.Utf8.parse(key); ;
  const iv2 = crypto.enc.Utf8.parse(iv);
  let decrypt = crypto.AES.decrypt(ciphertext, key2, {
    iv: iv2,
    mode: crypto.mode.CBC,
    padding: crypto.pad.ZeroPadding
  });
  return decrypt.toString(crypto.enc.Utf8);
};


// 前端RSA公钥加密
const getRsaEncryptString = (data, publicKey) => {
  const jencrypt = new JSEncrypt.JSEncrypt(); // 实例化加密对象
  jencrypt.setPublicKey(publicKey);
  return jencrypt.encrypt(data) // 加密明文
};

// 前端RSA私钥解密
const getRsaDecryptString = (ciphertext, privateKey) => {
  const jencrypt = new JSEncrypt.JSEncrypt(); // 实例化加密对象
  jencrypt.setPrivateKey(privateKey);
  return jencrypt.decrypt(ciphertext) // 加密明文
};

// NODE RSA 私钥加密
const rsaEncrypt = (data, privateKey) => {
  const priKey = new NodeRSA(privateKey, 'pkcs8-private'); // 导入私钥
  var encryData = priKey.encryptPrivate(data, 'base64', 'utf8');
  return encryData;
}

// NODE RSA 公钥解密
const rsaDecrypt = (ciphertext, publicKey) => {
  const pubKey = new NodeRSA(publicKey, 'pkcs8-public'); // 导入公钥
  var decryptData = pubKey.decryptPublic(ciphertext, 'utf8');
  return decryptData;
}



// 获取随机16位字符串
const randomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// 获取AES加密秘钥
var keyLength = 16;
const getAesKey = () => {
  return randomString(keyLength);
};


export default {
  baizeEncrypt: baizeEncrypt,
  baizeDecrypt: baizeDecrypt,
  getAesEncryptString: getAesEncryptString,
  getAesDecryptString: getAesDecryptString,
  getRsaEncryptString: getRsaEncryptString,
  getRsaDecryptString: getRsaDecryptString,
  rsaEncrypt: rsaEncrypt,
  rsaDecrypt: rsaDecrypt
};



