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


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
}
