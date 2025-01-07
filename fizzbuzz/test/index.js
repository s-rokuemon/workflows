const assert = require("assert");
const fizzbuzz = require("../index.js");

describe("fizzbuzz", () => {
    it("returns FizzBuzz when value is fivisible by 15", () => {
        assert(fizzbuzz(30) === "FizzBuzz");
    });
    it("returns FizzBuzz when value is fivisible by 3", () => {
        assert(fizzbuzz(9) === "Fizz");
    });
    it("returns FizzBuzz when value is fivisible by 5", () => {
        assert(fizzbuzz(10) === "Buzz");
    });

    it("returns FizzBuzz when value is not fivisible by 5 or 3", () => {
        assert(fizzbuzz(7) === "7");
    });
});
