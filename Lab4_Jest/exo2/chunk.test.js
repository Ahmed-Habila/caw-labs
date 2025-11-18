const chunk = require('./chunk');

describe("chunk() function", () => {
    test("splits array into chunks", () => {
        expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
    });

    test("works when size > array", () => {
        expect(chunk([1,2], 10)).toEqual([[1,2]]);
    });

    test("works with exact multiples", () => {
        expect(chunk([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    });
});