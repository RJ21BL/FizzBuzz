class FizzBuzz {
    fizz(number) {
        return number % 3 === 0;
    }

    buzz(number) {
        return number % 5 === 0;
    }

    fizzbuzz(number) {
        return number % 15 === 0;
    }

    count(max) {
        for (let number = 1; number <= max; number++) {
            console.log(this.determine(number));
        }
    }
    determine(number) {
        if (this.fizzbuzz(number)){return "fizzbuzz"}
        if (this.buzz(number)){ return "buzz"}
        if (this.fizz(number)){ return "fizz"}
        return number.toString()
    }

}

module.exports = {
    FizzBuzz: FizzBuzz,
}