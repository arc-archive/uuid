import { assert } from '@open-wc/testing';
import { v4 } from '../index.js';

describe('v4', () => {
  it('returns a string', () => {
    const result = v4();
    assert.typeOf(result, 'string');
  });

  it('generates uuid v4', async () => {
    const uuid = v4();
    assert.lengthOf(uuid, 36, 'uuid has length of 36');
    const parts = uuid.split('-');
    assert.equal(parts.length, 5, 'uuid has 5 parts');
    assert.equal(parts[0].length, 8, 'part 1 has 8 characters');
    assert.equal(parts[1].length, 4, 'part 2 has 4 characters');
    assert.equal(parts[2].length, 4, 'part 3 has 4 characters');
    assert.equal(parts[3].length, 4, 'part 4 has 4 characters');
    assert.equal(parts[4].length, 12, 'part 5 has 12 characters');
  });
});
