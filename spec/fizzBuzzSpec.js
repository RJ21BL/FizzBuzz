
describe("FizzBuzz", function () {
    let fizzBuzz;

    beforeEach(function () {
        fizzBuzz = new FizzBuzz();
    });

    it("should be fizz if multiple of 3", function () {

        expect(fizzBuzz.fizz(6)).toEqual(true);
    });

    it("should be fizz if multiple of 5", function () {

        expect(fizzBuzz.buzz(10)).toEqual(true);
    });

    it("should be fizz if multiple of 5", function () {

        expect(fizzBuzz.fizzbuzz(15)).toEqual(true);
    });

})