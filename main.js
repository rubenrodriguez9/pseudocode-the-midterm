const capitalizeSentences = function(paragraph) {
  let result = '';

  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i - 2] === '.' || i === 0) {
      result = result + paragraph[i].toUpperCase();
    } else {
      result = result + paragraph[i].toLowerCase();
    }
  }

  return result;
}

const isValidPassword = function(password) {
  if (password.length < 12) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    if (password[i] === ' ') {
      return false;
    }
  }

  return true;

  // using includes instead of all above code
  // return !password.includes(' ') && password.length >= 12;
}

const makeHalfSquares = function(nums) {
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    results.push(nums[i] ** 2 / 2);
  }
  
  return results;

  // or, using map
  // (We'll be covering this soon!)
  // return nums.map((num) => num ** 2 / 2);
}

const countAs = function(grades) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 90) {
      count = count + 1;
    }
  }

  return count;
}

const deleteMiddleLetters = function(str) {
  // string building version:
  let result = '';
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i++) {
    // really long boolean version:
    if (str.length % 2 === 1 && i !== middle || str.length % 2 === 0 && i !== middle && i !== middle - 1) {
      result = result + str[i];
    }
    // else if string-building version
    // if (str.length % 2 === 1 && i !== middle) {
    //   result = result + str[i];
    // } else if (str.length % 2 === 0 && i !== middle && i !== middle - 1) {
    //   result = result + str[i];
    // }

    // nested if string building version:
    // if (str.length % 2 === 1) {
    //   if(i !== middle) {
    //     result = result + str[i];
    //   } 
    // } else if (i !== middle && i !== middle - 1) {
    //     result = result + str[i];
    // }
  }

  return result;

  // using .slice instead of all above code
  // const middle = Math.floor(str.length / 2);
  // if (str.length % 2 === 1) {
  // 
  //   return str.slice(0, middle) + str.slice(middle + 1);
  // }
  // 
  // return str.slice(0, middle - 1) + str.slice(middle + 1); 
}

const lastIndexOfSpace = function(str) {
  // looping forwards version, updating index as we go:
  // default to -1 in case we don't find one
  // let lastIndex = -1;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === ' ') {
  //     lastIndex = i;
  //   }
  // }
  // 
  // return lastIndex;

  // looping backwards version
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      return i;
    }
  }

  return -1;

  // .lastIndexOf version
  // return str.lastIndexOf(' ');
}

const hyphenateName = function(name) {
  let result = '';
  for(let i = 0; i < name.length; i++) {
    if (i === name.lastIndexOf(' ')) {
    // alternate if check using previous function:
    // if (i === lastIndexOfSpace(name)) {
      result = result + '-';
    } else {
      result = result + name[i];
    }
  }

  return result;
}


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
