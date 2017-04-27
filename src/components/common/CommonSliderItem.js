/**
 * キャンペーンリスト表示用UIのベース部分を表示するコンポーネント
 */
import React from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
  Text,
} from 'react-native';

//デバイスのサイズ取得
const {
  width: DEVICE_WIDTH,
} = Dimensions.get('window');

//ギャラリーの幅と高さの設定
const sliderWidth = DEVICE_WIDTH;
const sliderHeight = DEVICE_WIDTH / 2;

//一覧シンプルリスト表示用のベースコンポーネントの内容を定義する
const CommonSliderItem = ({ slider, onPress }) => {

  //取得した引数（オブジェクト：{ slider }）を分割する
  const { id, title, image_url } = slider;

  //表示する要素を返す
  return (
    <View style={styles.slideThumbnailContainerStyle}>
      <Image style={styles.slideThumbnailStyle} source={{ uri: image_url }} />
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.overlayStyle}>
          <Text style={styles.overlayTitleStyle}>{title}</Text>
          <Text style={styles.overlayCategoryStyle}>▶︎ 記事詳細へ</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

//このコンポーネントのStyle定義
const styles = {
  slideThumbnailContainerStyle: {
    height: sliderHeight,
    backgroundColor: '#F5FCFF',
    position: 'relative',
  },
  slideThumbnailStyle: {
    width: sliderWidth,
    height: sliderHeight,
    backgroundColor: '#eee',
  },
  overlayStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayTitleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlayCategoryStyle: {
    marginTop: 5,
    fontSize: 12,
    color: '#fff',
  },
};

//このコンポーネントをインポート可能にする
export default CommonSliderItem;
