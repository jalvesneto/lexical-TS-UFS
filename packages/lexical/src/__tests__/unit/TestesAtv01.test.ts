/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {
  emptyFunction,
  generateRandomKey,
  isArray,
  resetRandomKey,
} from '../../LexicalUtils';
import {initializeUnitTest} from '../utils';

describe('Testes Unitarios Ativ01', () => {
  initializeUnitTest(() => {
    test('emptyFunction()', () => {
      expect(emptyFunction).toBeInstanceOf(Function);
      expect(emptyFunction.length).toBe(0);
      expect(emptyFunction()).toBe(undefined);
    });

    test('isArray()', () => {
      expect(isArray).toBeInstanceOf(Function);
      expect(isArray).toBe(Array.isArray);
    });

    test('generateRandomKey()', () => {
      const key1 = generateRandomKey();
      expect(typeof key1).toBe('string');
      expect(key1).not.toEqual('');
    });

    test('generateRandomKeySempreSequencial', () => {
      const key1 = generateRandomKey();
      const key2 = generateRandomKey();
      expect(typeof key1).toBe('string');
      expect(typeof key2).toBe('string');
      expect(key1).toEqual('1');
      expect(key2).toEqual('2');
    });

    test('resetRandomKey', () => {
      const key1 = generateRandomKey();
      const key2 = generateRandomKey();
      const key3 = generateRandomKey();
      expect(typeof key1).toBe('string');
      expect(typeof key2).toBe('string');
      expect(typeof key3).toBe('string');
      expect(key1).toEqual('1');
      expect(key2).toEqual('2');
      expect(key3).toEqual('3');
      resetRandomKey();
      const newKey = generateRandomKey();
      expect(typeof newKey).toBe('string');
      expect(newKey).toEqual('1');
      expect(newKey).toEqual(key1);
    });
  });
});
