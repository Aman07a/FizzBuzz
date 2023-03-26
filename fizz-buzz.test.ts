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
});
