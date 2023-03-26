import { createFizzBuzz } from "./fizz-buzz";

// Boundaries and Equivalence Partitions
// Triangulation Green Bar Pattern
// Test cases (.each())

// Also remember:
//  - 3 laws
//  - red-green-refactor
//  - Fake It Green Bar Pattern

describe("fizz-buzz", () => {
  describe("fizz", () => {
    test.each([{ input: 3 }, { input: 6 }, { input: 9 }])(
      "$input",
      ({ input }) => {
        // Arrange
        const expected = "Fizz";
        const sut = createFizzBuzz();

        // Act
        const actual = sut.go(input);

        // Assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("buzz", () => {
    test.each([{ input: 5 }, { input: 10 }, { input: 20 }])(
      "$input",
      ({ input }) => {
        // Arrange
        const expected = "Buzz";
        const sut = createFizzBuzz();

        // Act
        const actual = sut.go(input);

        // Assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("fizzbuzz", () => {
    test.each([{ input: 15 }, { input: 30 }, { input: 45 }])(
      "$input",
      ({ input }) => {
        // Arrange
        const expected = "FizzBuzz";
        const sut = createFizzBuzz();

        // Act
        const actual = sut.go(input);

        // Assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("number itself", () => {
    test.each([
      { input: 1, expected: "1" },
      { input: 2, expected: "2" },
      { input: 4, expected: "4" },
      { input: 76, expected: "76" },
    ])("$input", ({ input, expected }) => {
      // Arrange
      const sut = createFizzBuzz();

      // Act
      const actual = sut.go(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
