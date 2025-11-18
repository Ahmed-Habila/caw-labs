describe("concatenation of array of strings", () => {
    const myColor = ["Red", "Green", "White", "Black"];

    test("myColor.toString() produces comma-separated string", () => {
        expect(myColor.toString()).toBe("Red,Green,White,Black");
    });

    test("myColor.join() produces comma-separated string", () => {
        expect(myColor.join()).toBe("Red,Green,White,Black");
    });

    test("myColor.join('') concatenates without separators", () => {
        expect(myColor.join('')).toBe("RedGreenWhiteBlack");
    });
});
