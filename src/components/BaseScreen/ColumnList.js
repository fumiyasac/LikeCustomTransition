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
  H3
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//react-native-snap-carouselのインポート宣言
import Carousel from 'react-native-snap-carousel';

//HTTP通信用のライブラリ'axios'のインポート宣言
import axios from 'axios';

//デバイスのサイズ取得
const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');

//ギャラリーの幅と高さ
const sliderWidth = DEVICE_WIDTH;
const sliderHeight = DEVICE_WIDTH * 2 / 3;

//サンプルデータ
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
          <TouchableWithoutFeedback onPress={ () => Actions.ColumnCategoryContents() }>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTitleStyle}>{entry.title}</Text>
              <Text style={styles.overlayCategoryStyle}>▶︎ このカテゴリーの記事一覧へ</Text>
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
        <H3 style={styles.backgroundTitle}>衣食住に困らない街</H3>
        <View style={styles.containerWrappedViewStyle}>
          <Carousel
            ref={(carousel) => { this._carousel = carousel; }}　
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
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
        <ScrollView>
          <Text style={styles.backgroundDescription}>歴史がありながらも最近の発展やまちづくりにも目覚ましい下町情緒が溢れるあたたかな街、大塚。オフィス街・地域のお祭り・ライブハウス・隠れ家的な名店等、様々な表情をこの街は見せてくれます。</Text>
          <View style={styles.buttonWrapperStyle}>
            <Button style={styles.buttonStyle} onPress={ () => Actions.CampaignArchiveContents() } dark block>
              <Text style={styles.buttonTextStyle}>キャンペーン情報をチェック</Text>
            </Button>
          </View>
        </ScrollView>
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
    marginTop: 16,
    marginBottom: 16,
  },
  backgroundDescription: {
    color: '#666',
    textAlign: 'left',
    marginTop: 16,
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 20,
  },
  buttonWrapperStyle: {
    marginTop: 16,
  },
  buttonStyle: {
    marginLeft: 16,
    marginRight: 16,
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
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
    height: sliderHeight,
  },
  contentContainerCustomStyle: {
    height: sliderHeight,
  },
};

//インポート可能にする宣言
export default ColumnList;
