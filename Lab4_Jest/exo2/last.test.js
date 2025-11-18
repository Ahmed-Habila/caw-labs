const last = require('./last');

describe("last() function", () => {
    test("returns last n elements", () => {
        expect(last([1,2,3,4], 2)).toEqual([3,4]);
    });

    test("returns last element when n is null", () => {
        expect(last([10,20,30], null)).toBe(30);
    });

    test("returns empty array when array is null", () => {
        expect(last(null, 2)).toEqual([]);
    });
});
