const mean = require('./notation');

describe('fileImport', () => {
    test('logs the average of scores', () => {
        const scores = [10, 8, 9.5, 7];
        console.log = jest.fn();
        const result = mean(scores);
        console.log('Average:', result);
        expect(console.log).toHaveBeenCalledWith('Average:', 8.625);
    });
});

