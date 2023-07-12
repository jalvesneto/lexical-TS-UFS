/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {
  $getNodeByKey,
  $getRoot,
  generateRandomKey,
  isArray,
} from '../../LexicalUtils';
import {ParagraphNode} from '../../nodes/LexicalParagraphNode';
import {TextNode} from '../../nodes/LexicalTextNode';
import {initializeUnitTest} from '../utils';

describe('Testes Unitarios Ativ01', () => {
  initializeUnitTest((testEnv) => {
    test('isArray()', () => {
      const a = new Int16Array();
      const result = isArray(a);
      const b = Array.prototype;
      expect(isArray).toBeInstanceOf(Function);
      expect(result).toBe(false);
      expect(isArray(b)).toBe(true);
    });

    test('$getNodeByKey', async () => {
      const {editor} = testEnv;
      let paragraphNode;
      let textNode;

      await editor.update(() => {
        const rootNode = $getRoot();
        paragraphNode = new ParagraphNode();
        textNode = new TextNode('foo');
        paragraphNode.append(textNode);
        rootNode.append(paragraphNode);
      });

      await editor.getEditorState().read(() => {
        expect($getNodeByKey('1')).toBe(paragraphNode);
        expect($getNodeByKey('2')).toBe(textNode);
        expect($getNodeByKey(generateRandomKey())).toBe(null);
        expect($getNodeByKey(generateRandomKey())).toBe(null);
      });
    });
  });
});
