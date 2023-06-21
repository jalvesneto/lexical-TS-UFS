/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {CodeNode} from '@lexical/code';
import {createHeadlessEditor} from '@lexical/headless';
import {$generateHtmlFromNodes} from '@lexical/html';
import {LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {$createParagraphNode, $createTextNode, $getRoot} from 'lexical';

describe('Testes de Software - LexicalUtils', () => {
  test('createHeadlessEditor()', () => {
    const editor = createHeadlessEditor({
      nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        LinkNode,
      ],
    });

    editor.update(
      () => {
        const root = $getRoot();
        const p1 = $createParagraphNode();
        const text1 = $createTextNode('salve');
        p1.append(text1);
        const p2 = $createParagraphNode();
        const p3 = $createParagraphNode();
        const text2 = $createTextNode('jorge');
        const text3 = $createTextNode('na lua');
        p2.append(text2);
        p3.append(text3);
        root.append(p1).append(p2).append(p3);
        p1.select(0, text1.getTextContentSize());
      },
      {
        discrete: true,
      },
    );

    let html = '';

    editor.update(() => {
      html = $generateHtmlFromNodes(editor);
    });

    expect(html).toBe(
      '<p><span>salve</span></p><p><span>jorge</span></p><p><span>na lua</span></p>',
    );
  });
});
