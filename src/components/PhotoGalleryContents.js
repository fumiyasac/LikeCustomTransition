/**
 * フォトギャラリー画面を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Header,
  Text
} from 'native-base';

//幅と高さを取得する
const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');

//共通ヘッダーのインポート宣言
import CommonHeader from './common/CommonHeader';

//グリッド表示用のライブラリのインポート宣言（NativeBaseのグリッドを使わない）
import GridView from 'react-native-super-grid';

//コンポーネントの内容を定義する ※ ClassComponent
class PhotoGalleryContents extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    //データスタブ
    const galleryItems = [
      { name: 'ギャラリー写真1', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery1.jpg' },
      { name: 'ギャラリー写真2', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery2.jpg' },
      { name: 'ギャラリー写真3', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery3.jpg' },
      { name: 'ギャラリー写真4', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery4.jpg' },
    ];
    //コンポーネントのレンダリング
    return (
      <Container>
        <CommonHeader title={"フォト一覧"} />
        <Content>
          {/* iOSでのUICollectionViewの様なレイアウト */}
          <GridView
            itemWidth={130}
            items={galleryItems}
            style={styles.gridView}
            renderItem={ item => (
              <Image style={styles.itemContainer} source={{ uri: item.gallery }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
              </Image>
            ) }
          />
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  gridView: {
    paddingTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    width: DEVICE_WIDTH / 2 - 15,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemDate: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
};

//このコンポーネントをインポート可能にする
export default PhotoGalleryContents;
