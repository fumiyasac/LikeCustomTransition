import 'react-native';
import React from 'react';
import CommonCard from '../../../src/components/common/CommonCard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('共通コンポーネント(店舗表示用部分)のスナップショットテスト', () => {
  const shopDataMock = jest.fn();
  shopDataMock.mockReturnValue(
    {"shops":{
      "contents":[
        {
          "id":"1",
          "title":"大塚の油そば「麺屋 帝旺」",
          "category":"ラーメン・油そば","kcpy":"ピリ辛の特製ラー油がうまさの秘訣！",
          "detail":"少しピリ辛のラー油と食べ応えのある太麺が一度食べるとやみつきになる一品です。",
          "image_url":"https://otsuka-shop.s3-ap-northeast-1.amazonaws.com/shops/images/1/large.jpg"}
      ]
    }}
  );
  const tree = renderer.create(
    <CommonCard shop={shopDataMock().shops.contents[0]} onPress={ () => console.log("テスト") } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
