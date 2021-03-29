const CustomError = require("../extensions/custom-error");

module.exports =  function transform(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    let rez = [];
    arr.forEach((el, i) => {
      switch (arr[i]) {
        case "--discard-prev":
          rez.pop(rez.length - 1);
          break;
        case "--double-prev":
          if(!!rez[rez.length-1]) rez.push(rez[rez.length]);
          break;
        //case "--discard-next":
        case "--double-next":
          if(!!arr[i+1]) rez.push(arr[i+1]);
          break;
        default:
          rez.push(arr[i]);
          break;
      };
      rez.forEach((el, i) => {
        if (rez[i] == '--discard-next') rez.splice(i,2);
      });
    });
    return rez;
  } else {
    throw new CustomError("is not array");
  }
  };
