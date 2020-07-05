const {
  makeRunOn,
} = require('./main.js')


describe('makeRunOn', () => {
  it(`replaces periods with commas to make the given string a run-on sentence`, () => {
    const original1 = 'Run-ons are the best. Why would you pause. When you can just. Keep. GOING';
    const runOn1 = 'Run-ons are the best, Why would you pause, When you can just, Keep, GOING';
    const original2 = 'See spot run. See spot run on and on and on and';
    const runOn2 = 'See spot run, See spot run on and on and on and';
    
    expect(makeRunOn(original1)).toBe(runOn1)
    expect(makeRunOn(original2)).toBe(runOn2)
  })

  it(`keeps the string as a sentence--does NOT remove the last period.`, () => {
    const original1 = `And once the storm is over you won't remember how you made it through, how you managed to survive. You won't even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won't be the same person who walked in. That's what this storm's all about.`;
    const runOn1 = `And once the storm is over you won't remember how you made it through, how you managed to survive, You won't even be sure, in fact, whether the storm is really over, But one thing is certain, When you come out of the storm you won't be the same person who walked in, That's what this storm's all about.`;

    const original2 = 'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'
    const runOn2 = 'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts, The Ministry of Peace, which concerned itself with war, The Ministry of Love, which maintained law and order, And the Ministry of Plenty, which was responsible for economic affairs, Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'
    expect(makeRunOn(original1)).toBe(runOn1)
    expect(makeRunOn(original2)).toBe(runOn2)
  })
})
