import 'react-native';
import React from 'react';
import CommonHeader from '../../../src/components/common/CommonHeader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('共通コンポーネント(遷移先コンテンツ用ヘッダー)のスナップショットテスト', () => {
  const tree = renderer.create(
    <CommonHeader title={'テスト'} onPress={ () => console.log("テスト") } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
