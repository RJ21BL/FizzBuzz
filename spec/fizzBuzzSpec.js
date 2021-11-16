const path = require('../src/fizzBuzz');

describe("Fizzbuzz Class", function () {

    let fizzBuzz;

    beforeEach(function () {
        fizzBuzz = new path.FizzBuzz();
    });

    it("should be fizz if multiple of 3", function () {

        expect(fizzBuzz.fizz(6)).toEqual(true);
    });

    it("should be fizz if multiple of 5", function () {

        expect(fizzBuzz.buzz(10)).toEqual(true);
    });

    it("should be fizzbuzz if multiple of 3 and 5", function () {

        expect(fizzBuzz.fizzbuzz(15)).toEqual(true);
    });

})