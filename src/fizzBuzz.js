class FizzBuzz {
    fizz = function (number) {
        return number % 3 === 0;
    }
    buzz = function (number) {
        return number % 5 === 0;
    }
    fizzbuzz = function (number) {
        return FizzBuzz.fizz(number) && FizzBuzz.buzz(number);
    }

    static fizz(number) {
        return number % 3 === 0;
    }

    static buzz(number) {
        return number % 5 === 0;
    }
}
module.exports = {
    FizzBuzz: FizzBuzz,
}