import 'react-native';
import React from 'react';
import CommonSliderItem from '../../../src/components/common/CommonSliderItem';
import { getSliderList } from '../../../src/stub/SampleDataStub';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('共通コンポーネント(コラムのスライダー表示用部分)のスナップショットテスト', () => {
  const slider = getSliderList();
  const tree = renderer.create(
    <CommonSliderItem slider={slider[0]} onPress={ () => console.log("テスト") } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
