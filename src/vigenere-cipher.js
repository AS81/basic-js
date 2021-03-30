const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direction = direct;
  }
  encrypt(message, key) {  
    if (!message || !key) throw new Error('Please, give message and key');
    message = (message).toUpperCase();
    key = (key).toUpperCase();
    const arrM = message.split('');
    const ABClen = 26;
    const arrEnc = [];
    let newSymb;
    let i = 0;
    let summOfCode;
  
    arrM.forEach((symb) => {
      let symbChar = symb.charCodeAt(0);
      if (symbChar >= 65 && symbChar <= 90) {
        summOfCode = symbChar-65 + (key.charCodeAt(i)-65);
        if (summOfCode >= ABClen) summOfCode -= ABClen
        arrEnc.push(String.fromCharCode(summOfCode + 65));      
        if (i != key.length-1) i++
        else i = 0
      } else arrEnc.push(symb);
    })
    if (this.direction === false) {arrEnc.reverse()}
    return arrEnc.join('');
  } 
      
  decrypt(messageEnc, key) {
  if (!messageEnc || !key) throw new Error('Please, give enc message and key');
  messageEnc = (messageEnc).toUpperCase();
  key = (key).toUpperCase();
  const arrMEnc = messageEnc.split('');
  const ABClen = 26;
  const arr = [];
  let sourceSymb;
  let i = 0;
  let diffOfCode;

  arrMEnc.forEach((symb) => {
    let symbChar = symb.charCodeAt(0);
    if (symbChar >= 65 && symbChar <= 90) {
      diffOfCode = symbChar-65 - (key.charCodeAt(i)-65);
      if (diffOfCode < 0) diffOfCode += ABClen;
      arr.push(String.fromCharCode(diffOfCode + 65));      
      if (i != key.length-1) i++
      else i = 0
    } else arr.push(symb);
  })
  if (this.direction === false) {arr.reverse()}
  return arr.join('');
  }
}

module.exports = VigenereCipheringMachine;
