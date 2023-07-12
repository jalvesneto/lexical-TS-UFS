/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {isArray} from '../../LexicalUtils';
import {initializeUnitTest} from '../utils';

describe('Testes Unitarios Ativ01', () => {
  initializeUnitTest(() => {
    test('isArray()', () => {
      const a = new Int16Array();
      const result = isArray(a);
      const b = Array.prototype;
      expect(isArray).toBeInstanceOf(Function);
      expect(result).toBe(false);
      expect(isArray(b)).toBe(true);
    });
  });
});
