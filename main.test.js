const {
  capitalizeSentences,
  isValidPassword,
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
