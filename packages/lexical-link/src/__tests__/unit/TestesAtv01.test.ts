/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {LinkNode} from '@lexical/link';
import {initializeUnitTest} from 'lexical/src/__tests__/utils';

describe('Testes de Software - LexicalLink', () => {
  initializeUnitTest((testEnv) => {
    test('LinkNode.getTitle()', async () => {
      const {editor} = testEnv;
      await editor.update(() => {
        const linkNode = new LinkNode('https://example.com/foo', {
          title: 'Título Aplicação',
        });
        expect(linkNode.getTitle()).toBe('Título Aplicação');
      });
    });

    test('LinkNode.setTitle()', async () => {
      const {editor} = testEnv;
      await editor.update(() => {
        const linkNode = new LinkNode('https://example.com/foo', {
          title: 'Título Aplicação',
        });
        expect(linkNode.getTitle()).toBe('Título Aplicação');
        linkNode.setTitle('Título Aplicação');
        expect(linkNode.getTitle()).toBe('Título Aplicação');
      });
    });
  });
});
