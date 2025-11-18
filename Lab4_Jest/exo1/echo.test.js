const { exf } = require('./echo');

describe('exf function', () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    test('prints the string n times', () => {
        exf('Hello', 3);
        expect(console.log).toHaveBeenCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith('Hello');
    });

    test('prints another string correctly', () => {
        exf('JS', 2);
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith('JS');
    });
});

