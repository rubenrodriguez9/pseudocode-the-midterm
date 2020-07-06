const {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
} = require('./main.js')


describe('capitalizeSentences', () => {
  it(`capitalizes every sentence after the first in the given paragraph`, () => {
    const original1 = 'Binge-watching is the best. why would you pause. when you can just. keep. going.';
    const capitalized1 = 'Binge-watching is the best. Why would you pause. When you can just. Keep. Going.';
    const original2 = 'Example sentences are hard to come up with. you just try it. you will, huh. go on, try it then.';
    const capitalized2= 'Example sentences are hard to come up with. You just try it. You will, huh. Go on, try it then.';

    expect(capitalizeSentences(original1)).toBe(capitalized1)
    expect(capitalizeSentences(original2)).toBe(capitalized2)
  })

  it(`capitalizes the first sentence as well`, () => {
    const original1 = `and once the storm is over you won't remember how you made it through, how you managed to survive. you won't even be sure, in fact, whether the storm is really over. but one thing is certain. when you come out of the storm you won't be the same person who walked in. that's what this storm's all about.`;
    const capitalized1 = `And once the storm is over you won't remember how you made it through, how you managed to survive. You won't even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won't be the same person who walked in. That's what this storm's all about.`;
    const original2 = 'the ministry of truth, which concerned itself with news, entertainment, education and the fine arts. the ministry of peace, which concerned itself with war. the ministry of love, which maintained law and order. and the ministry of plenty, which was responsible for economic affairs. their names, in newspeak: minitrue, minipax, miniluv and miniplenty.'
    const capitalized2 = 'The ministry of truth, which concerned itself with news, entertainment, education and the fine arts. The ministry of peace, which concerned itself with war. The ministry of love, which maintained law and order. And the ministry of plenty, which was responsible for economic affairs. Their names, in newspeak: minitrue, minipax, miniluv and miniplenty.'
    expect(capitalizeSentences(original1)).toBe(capitalized1)
    expect(capitalizeSentences(original2)).toBe(capitalized2)
  })

  it(`lowercases all other characters`, () => {
    const original1 = 'In a way fighting was just like using Magic. You said the words, and they alterEd the universe. By merely speaking you could create damage and pain, cause tEars to fall, drive people Away, make yourself feel better, make your life worsE.'
    const capitalized1 = 'In a way fighting was just like using magic. You said the words, and they altered the universe. By merely speaking you could create damage and pain, cause tears to fall, drive people away, make yourself feel better, make your life worse.'
    const original2 = 'A magIcian is strong because he feels pain. He Feels the difference beTween what the world is and what he would make of it.'
    const capitalized2 = 'A magician is strong because he feels pain. He feels the difference between what the world is and what he would make of it.'
    expect(capitalizeSentences(original1)).toBe(capitalized1)
    expect(capitalizeSentences(original2)).toBe(capitalized2)
  })
})

describe('isValidPassword', () => {
  it(`returns false if there is a space in the given string`, () => {
    expect(isValidPassword('hey no this is not how it should be')).toBe(false);
    expect(isValidPassword('bad password')).toBe(false);
  })

  it(`returns false if the given string's length is less than 12 characters`, () => {
    expect(isValidPassword('shorty')).toBe(false);
    expect(isValidPassword('ritemoarpls')).toBe(false);
  })

  it(`returns true otherwise`, () => {
    expect(isValidPassword('longpasswordwithnospaces')).toBe(true)
    expect(isValidPassword('justlongenuf')).toBe(true)
  })
})

describe('makeHalfSquares', () => {
  it(`returns a new array where every number in the given array has been squared and then halved (divided by two)`, () => {
    const nums1 = [6, 7, -8, 10];
    const halfSquares1 = [18, 24.5, 32, 50];
    const nums2 = [12, 3, 5, 3.5];
    const halfSquares2 = [72, 4.5, 12.5, 6.125];
    expect(makeHalfSquares(nums1)).toEqual(halfSquares1);
    expect(makeHalfSquares(nums2)).toEqual(halfSquares2);
  })

  it(`does not modify the original array`, () => {
    const originalNums1 = [3, 5, 7, 9];
    const originalNums2 = [2, 8, 10, 12];
    const nums1 = [3, 5, 7, 9];
    const nums2 = [2, 8, 10, 12];
    makeHalfSquares(nums1)
    makeHalfSquares(nums2)
    expect(nums1).toEqual(originalNums1)
    expect(nums2).toEqual(originalNums2)
  })
})

describe('countAs', () => {
  it(`returns the number of grades that are at least 90 in the given array`, () => {
    const grades1 = [90, 50, 63, 87, 100, 93, 76, 0];
    const grades2 = [90, 50, 80, 87, 100, 90, 106, 110];
    expect(countAs(grades1)).toBe(3);
    expect(countAs(grades2)).toBe(5);
  })

  it(`does not modify the original array`, () => {
    const originalGrades1 = [30, 50, 70, 90];
    const originalGrades2 = [20, 80, 100, 102];
    const grades1 = [30, 50, 70, 90];
    const grades2 = [20, 80, 100, 102];
    countAs(grades1)
    countAs(grades2)
    expect(grades1).toEqual(originalGrades1)
    expect(grades2).toEqual(originalGrades2)
  })
})

describe('deleteMiddleLetters', () => {
  it(`deletes the middle letter from a word, returning the resulting string`, () => {
    const str1 = 'hello';
    const result1 = 'helo';
    const str2 = 'goodbye';
    const result2 = 'goobye';
    expect(deleteMiddleLetters(str1)).toBe(result1);
    expect(deleteMiddleLetters(str2)).toBe(result2);
  })

  it(`deletes the middle two letters from a string with an even number of characters`, () => {
    const str1 = 'yessir';
    const result1 = 'yeir';
    const str2 = 'oh hello there';
    const result2 = 'oh hel there';
    expect(deleteMiddleLetters(str1)).toBe(result1);
    expect(deleteMiddleLetters(str2)).toBe(result2);
  })
})

describe('lastIndexOfSpace', () => {
  it(`returns the last appearance of a space within the given string`, () => {
    const str1 = 'hey you';
    const indexOfSpace1 = 3;
    const str2 = `what even I can't`;
    const indexOfSpace2 = 11;
    expect(lastIndexOfSpace(str1)).toBe(indexOfSpace1)
    expect(lastIndexOfSpace(str2)).toBe(indexOfSpace2)
  })

  it(`returns -1 if there is no space in the string`, () => {
    const noSpace1 = 'pizzapizza';
    const noSpace2 = 'hardtoreadwithnospaceshuh';
    expect(lastIndexOfSpace(noSpace1)).toBe(-1)
    expect(lastIndexOfSpace(noSpace2)).toBe(-1)
  })
});

describe('hyphenateName', () => {
  it(`inserts hyphen in between first and second names in place of the space`, () => {
    const name1 = 'Jaffe Obama'
    const name2 = 'Kaleziq Musk'
    const hyphenatedName1 = 'Jaffe-Obama'
    const hyphenatedName2 = 'Kaleziq-Musk'
    expect(hyphenateName(name1)).toBe(hyphenatedName1);
    expect(hyphenateName(name2)).toBe(hyphenatedName2);
  })

  it(`only hyphenates the last two names`, () => {
    const name1 = 'Colin Jaffe Obama'
    const name2 = 'Mesuara Kaleziq Musk'
    const name3 = 'Edward James Olmos McDonnell'
    const hyphenatedName1 = 'Colin Jaffe-Obama'
    const hyphenatedName2 = 'Mesuara Kaleziq-Musk'
    const hyphenatedName3 = 'Edward James Olmos-McDonnell'
    expect(hyphenateName(name1)).toBe(hyphenatedName1);
    expect(hyphenateName(name2)).toBe(hyphenatedName2);
  })
})
