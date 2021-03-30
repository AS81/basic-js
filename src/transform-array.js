const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let rez = [];
    let delNext = 0;
    arr.forEach((el, i) => {
      switch (arr[i]) {  
        case "--discard-next":
          if((i+1) in arr) delNext = 1;
          break;
        case "--double-next":
          if((i+1) in arr) rez.push(arr[i+1]);
          break; 
        case "--discard-prev":
          if(arr[i-2] != "--discard-next"){
          rez.pop(rez.length - 1);}
          break;
        case "--double-prev":
          if((rez.length-1 in rez) && arr[i-2] != "--discard-next") rez.push(arr[i-1]);
          break;
        default:
          if (delNext) {delNext = 0} else {rez.push(arr[i]); delNext = 0;}
          break;
      };
    });
    return rez;
  } else 
  {
    throw new Error("is not array");
  }
}
