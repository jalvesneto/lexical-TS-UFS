/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  addClassNamesToElement,
  isHTMLElement,
  removeClassNamesFromElement,
} from '@lexical/utils';

describe('Testes de Software - LexicalUtils', () => {
  test('AddClassNameToElement()', async () => {
    const element = document.createElement('div');

    addClassNamesToElement(element, 'className');

    expect(element.className).toEqual('className');
  });

  test('removeClassNameFromElement', async () => {
    const element = document.createElement('div');
    element.className = 'className';

    removeClassNamesFromElement(element, 'className');

    expect(element.className).toEqual('');
  });

  test('isHTMLElement', async () => {
    const element = document.createElement('div');

    expect(isHTMLElement(element)).toEqual(true);
  });
});
