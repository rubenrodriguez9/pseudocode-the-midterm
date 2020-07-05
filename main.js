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


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
}
