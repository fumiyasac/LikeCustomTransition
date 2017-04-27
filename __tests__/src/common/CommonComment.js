import 'react-native';
import React from 'react';
import CommonComment from '../../../src/components/common/CommonComment';
import { getCommentList } from '../../../src/stub/SampleDataStub';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('共通コンポーネント(コメント表示用部分)のスナップショットテスト', () => {
  const comment = getCommentList();
  const tree = renderer.create(
    <CommonComment comment={comment[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
