import { fixture, assert } from '@open-wc/testing';
import * as sinon from 'sinon/pkg/sinon-esm.js';
import { UuidGenerator } from '../uuid-generator.js';

describe('uuid-generator', () => {
  it('can be initialized with the constructor', () => {
    const element = new UuidGenerator();
    assert.ok(element);
  });

  it('can be initialized with the web apis', () => {
    const element = document.createElement('uuid-generator');
    assert.typeOf(element.generate, 'function');
  });

  it('has by default an empty string as label', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator></uuid-generator>'));
    const uuid = element.generate();
    assert.isString(uuid, 'UUID is a string');
    assert.lengthOf(uuid, 36, 'uuid has length of 36');
    const parts = uuid.split('-');
    assert.equal(parts.length, 5, 'uuid has 5 parts');
    assert.equal(parts[0].length, 8, 'part 1 has 8 characters');
    assert.equal(parts[1].length, 4, 'part 2 has 4 characters');
    assert.equal(parts[2].length, 4, 'part 3 has 4 characters');
    assert.equal(parts[3].length, 4, 'part 4 has 4 characters');
    assert.equal(parts[4].length, 12, 'part 5 has 12 characters');
  });

  it('Sets lastUuid', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator></uuid-generator>'));
    const uuid = element.generate();
    assert.typeOf(element.lastUuid, 'string');
    assert.equal(element.lastUuid, uuid);
  });
});

describe('auto property', () => {
  it('Generates UUID automatically', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator auto></uuid-generator>'));
    assert.typeOf(element.lastUuid, 'string');
  });

  it('Regenrates uuid when auto status changes', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator auto></uuid-generator>'));
    const first = element.lastUuid;
    element.auto = false;
    element.auto = true;
    const last = element.lastUuid;
    assert.typeOf(last, 'string');
    assert.notEqual(last, first);
  });

  it('Has "auto" property set from the attribute', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator auto></uuid-generator>'));
    assert.isTrue(element.auto);
  });

  it('Won\'t change lastUuid when removing "auto" attribute', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator auto></uuid-generator>'));
    element.removeAttribute('auto');
    assert.typeOf(element.lastUuid, 'string');
  });

  it('Removes "auto" attribute when setting "auto" property to false', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator auto></uuid-generator>'));
    element.auto = false;
    assert.isFalse(element.hasAttribute('auto'));
  });

  it('Adds "auto" attribute when setting "auto" property to true', async () => {
    const element = /** @type {UuidGenerator} */ (await fixture('<uuid-generator></uuid-generator>'));
    element.auto = true;
    assert.isTrue(element.hasAttribute('auto'));
  });
});

describe('last-uuid-changed event', () => {
  it('Dispatches the event', () => {
    const element = new UuidGenerator();
    const spy = sinon.spy();
    element.addEventListener('last-uuid-changed', spy);
    const uuid = element.generate();
    assert.equal(spy.args[0][0].detail.value, uuid);
  });
});
