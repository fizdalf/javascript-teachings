const {sumTwoNumbers} = require('./index');
test('SumTwoNumbers: Should sum 1 and 1 and return 2', () => {
    const result = sumTwoNumbers(1, 1);
    expect(result).toBe(2);
})

test('SumTwoNumbers: Should sum 0 and 1 and return 1', () => {
    const result = sumTwoNumbers(0, 1);
    expect(result).toBe(1);
})
