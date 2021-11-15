class FizzBuzz {
    fizz = function (number) {
        return number % 3 === 0;
    }
}

describe("FizzBuzz", function () {
    let fizzBuzz;

    beforeEach(function () {
        fizzBuzz = new FizzBuzz();
    });

    it("should be fizz if multiple of 3", function () {

        expect(fizzBuzz.fizz(6)).toEqual(true);
    });
})