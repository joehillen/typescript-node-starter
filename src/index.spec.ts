import * as assert from 'assert';
import { add } from './index';

describe('add', () => {
  it('adds 2 numbers', () => {
    assert.equal(add(1, 2), 3);
  });
});
