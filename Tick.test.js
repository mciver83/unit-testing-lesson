let Tick = require('./Tick');
let axios = require('axios');
let fns = require('./functions');


test('tick',() => {
    let timer = new Tick()
    let initialValue = timer.checkTimer()
    timer.tick()
    let result = timer.checkTimer()

    expect(result).toBe(initialValue + 1)
})

test('async stuff', () => {
    expect.assertions(1)
    return fns.getCars().then(data)
})


