/**
 * コラム一覧を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  TouchableWithoutFeedback,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Spinner,
  Button,
  H1
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//react-native-snap-carouselのインポート宣言
import Carousel from 'react-native-snap-carousel';

//HTTP通信用のライブラリ'axios'のインポート宣言
import axios from 'axios';

//
const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');

//
const sample = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    title: 'The lone tree,',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

//コンポーネントの内容を定義する ※ ClassComponent
class ColumnList extends Component {

  getSlides () {
    return sample.map((entry, index) => {
      return (
        <View key={`${index}`} style={styles.slideThumbnailContainerStyle}>
          <Image style={styles.slideThumbnailStyle} source={{ uri: entry.illustration }} />
          <TouchableWithoutFeedback onPress={ () => console.log("AAA") }>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTitleStyle}>{entry.title}</Text>
              <Text style={styles.overlayCategoryStyle}>Category</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    });
  }

  //コンポーネントの内容をレンダリングする
  render() {
    return (
      <Container style={styles.backgroundContainer}>
        <H1 style={styles.backgroundTitle}>衣食住に困らない街</H1>
        <Text style={styles.backgroundDescription}>歴史がありながらも最近の発展やまちづくりにも目覚ましい大塚。オフィス街・地域のお祭り・ライブハウス・隠れ家的な名店等、様々な表情をこの街は見せてくれます。</Text>
        <View style={styles.buttonWrapperStyle}>
          <Button style={styles.buttonStyle} onPress={ () => console.log("BBB") } dark block>
            <Text style={styles.buttonTextStyle}>キャンペーン情報を確認(〜2017/4/22)</Text>
          </Button>
        </View>
        <View style={styles.containerWrappedViewStyle}>
          <Carousel
            ref={(carousel) => { this._carousel = carousel; }}　
            sliderWidth={DEVICE_WIDTH}
            itemWidth={DEVICE_WIDTH - 80}
            firstItem={0}
            inactiveSlideScale={0.86}
            inactiveSlideOpacity={0.38}
            enableMomentum={false}
            containerCustomStyle={styles.containerCustomStyle}
            contentContainerCustomStyle={styles.contentContainerCustomStyle}
            showsHorizontalScrollIndicator={false}
            snapOnAndroid={true}
            >
            {this.getSlides()}
          </Carousel>
        </View>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  backgroundContainer: {
    backgroundColor: '#fff',
  },
  backgroundTitle: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
  },
  backgroundDescription: {
    color: '#666',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 24,
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 22,
  },
  buttonWrapperStyle: {
    marginTop: 20,
  },
  buttonStyle: {
    marginLeft: 36,
    marginRight: 36,
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  slideThumbnailContainerStyle: {
    height: 200,
    backgroundColor: '#F5FCFF',
    position: 'relative',
  },
  slideThumbnailStyle: {
    width: DEVICE_WIDTH - 80,
    height: 200,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlayCategoryStyle: {
    marginTop: 5,
    fontSize: 13,
    color: '#fff',
  },
  containerWrappedViewStyle: {
    position: 'absolute',
    height: 200,
    left: 0,
    right: 0,
    bottom: 24,
  },
  containerCustomStyle: {
  },
  contentContainerCustomStyle: {
    height: 200,
  },
};

//インポート可能にする宣言
export default ColumnList;
