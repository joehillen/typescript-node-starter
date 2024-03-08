import { expect, test } from '@jest/globals';
import { add } from './index';

describe('add', () => {
  test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
