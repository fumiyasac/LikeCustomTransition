import 'react-native';
import React from 'react';
import CommonColumnListItem from '../../../src/components/common/CommonColumnListItem';
import { getArchiveList } from '../../../src/stub/SampleDataStub';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('共通コンポーネント(コラムアーカイブ表示用部分)のスナップショットテスト', () => {
  const archive = getArchiveList();
  const tree = renderer.create(
    <CommonColumnListItem archive={archive[0]} onPress={ () => console.log("テスト") } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
