const first = require('./first');

describe("first() function", () => {
    test("returns first n elements", () => {
        expect(first([1,2,3,4], 2)).toEqual([1,2]);
    });

    test("returns empty array for n <= 0", () => {
        expect(first([1,2], 0)).toEqual([]);
    });

    test("returns first element when n is null", () => {
       expect(first([10,20,30], null)).toEqual([]);
    });

    test("returns empty array when array is null", () => {
        expect(first(null, 3)).toEqual([]);
    });
});
