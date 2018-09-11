let Person = require('./Person');


describe('All my person tests', () => {
  test('nancy is millennial', () => {
    // arrange
    let nancy = new Person(1984);
    // act
    let result = nancy.isMillennial();
    // assert
    expect(result).toBeTruthy();
  });

  test('Harold is a retiree', () => {
    // arrange
    let harold = new Person(1908);
    // act
    let result = harold.isRetiree();
    // assert
    expect(result).toBeTruthy();
  });
});
