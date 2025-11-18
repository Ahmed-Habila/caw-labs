const mean = require('./notation');

describe('mean function', () => {
    test('calculates the average of numbers', () => {
        expect(mean([10, 8, 9.5, 7])).toBeCloseTo(8.625);
        expect(mean([1, 2, 3, 4])).toBe(2.5);
    });

    test('throws error on empty array', () => {
        expect(() => mean([])).toThrow("mean() expects a non-empty array of numbers");
    });

    test('throws error on non-array input', () => {
        expect(() => mean(5)).toThrow("mean() expects a non-empty array of numbers");
        expect(() => mean("string")).toThrow("mean() expects a non-empty array of numbers");
    });
});