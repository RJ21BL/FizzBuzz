class FizzBuzz {
    fizz(number) {
        return number % 3 === 0;
    }

    buzz(number) {
        return number % 5 === 0;
    }

    fizzbuzz(number) {
        return this.fizz(number) && this.buzz(number);
    }
}

module.exports = {
    FizzBuzz: FizzBuzz,
}