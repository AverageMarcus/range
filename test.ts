import test from 'ava';
import range from '.';

/**
 * Error handling
 */

const errorMacro = (t, input: [number, number, number?], expected: string) => {
  const error = t.throws(() => range(...input));
  t.is(error.message, expected);
};

test('should throw on missing start', errorMacro, [undefined, 5], 'Please provide both a start and end value');
test('should throw on missing end', errorMacro, [5], 'Please provide both a start and end value');
test('should throw on no arguments provided', errorMacro, [], 'Please provide both a start and end value');
test('should throw when start is not a number', errorMacro, ['abc', 5], 'Values must be numbers');
test('should throw when end is not a number', errorMacro, [5, 'abc'], 'Values must be numbers');
test('should throw when both arguments are not a number', errorMacro, ['abc', 'xyz'], 'Values must be numbers');
test('should throw when NaN is passed in', errorMacro, [NaN, NaN], 'Please provide both a start and end value');
test('should throw when Infinity is passed in', errorMacro, [Infinity, Infinity], 'Please provide only real integers');
test('should throw when decimals are passed in', errorMacro, [1.5, 2.5], 'Please provide only real integers');
test('should throw when step is not a number', errorMacro, [1, 5, 'abc'], 'Values must be numbers');
test('should throw when NaN is passed in for the step', errorMacro, [1, 5, NaN], 'Values must be numbers');
test('should throw when Infinity is passed in for the step', errorMacro, [1, 5, Infinity], 'Please provide only real integers');
test('should throw when decimals are passed in for the step', errorMacro, [1, 5, 1.5], 'Please provide only real integers');
test('should throw on negative step being passed in', errorMacro, [1, 5, -1], 'Step must be a positive integer');
test('should throw on step being passed in as 0', errorMacro, [1, 5, 0], 'Step must be a positive integer');

/**
 * Expected outcomes
 */
const outcomeMacro = (t, input: [number, number, number?], expected: string) => t.deepEqual(range(...input), expected);

test('should return an increasing range', outcomeMacro, [1, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
test('should return a decreasing range', outcomeMacro, [10, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
test('should handle start and end being the same', outcomeMacro, [1, 1], [1]);
test('should handle step value being provided', outcomeMacro, [1, 10, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
test('should handle positive step value being provided', outcomeMacro, [2, 10, 2], [2, 4, 6, 8, 10]);
test('should handle large positive step value being provided', outcomeMacro, [10, 100, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
test('should handle step value being provided with decrementing range', outcomeMacro, [10, 1, 2], [10, 8, 6, 4, 2]);
