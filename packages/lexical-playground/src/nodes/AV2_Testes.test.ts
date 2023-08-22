/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {TweetNode} from './TweetNode'; // Import the component

describe('TwitterNode', () => {
  it('returns the correct Twitter status URL', () => {
    const tweetID = '1693806978533876163'; // Replace with a valid Twitter ID
    const tweetNode = new TweetNode(tweetID);

    const result = tweetNode.getTextContent();

    const expectedURL = `https://twitter.com/i/web/status/${tweetID}`;
    expect(result).toBe(expectedURL);
  });
});
