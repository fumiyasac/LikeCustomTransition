/**
 * コラム一覧ページを表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  TouchableWithoutFeedback,
  ScrollView,
  View,
  Image,
  Dimensions
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Spinner,
  Button,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Separator,
  Text,
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

//ギャラリーの幅と高さの設定
const sliderWidth = DEVICE_WIDTH;
const sliderHeight = DEVICE_WIDTH / 2;

//データスタブ
const columnItems = [
  {
    title: 'コラムタイトル1',
    illustration: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column1.jpg'
  },
  {
    title: 'コラムタイトル2',
    illustration: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column2.jpg'
  },
  {
    title: 'コラムタイトル3',
    illustration: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column3.jpg'
  },
  {
    title: 'コラムタイトル4',
    illustration: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column4.jpg'
  },
  {
    title: 'コラムタイトル5',
    illustration: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column5.jpg'
  }
];

//コンポーネントの内容を定義する ※ ClassComponent
class ColumnList extends Component {

  //スライド用のコンポーネントを組み立てる処理
  _getSlides () {
    return columnItems.map((entry, index) => {
      return (
        <View key={index} style={styles.slideThumbnailContainerStyle}>
          <Image style={styles.slideThumbnailStyle} source={{ uri: entry.illustration }} />
          <TouchableWithoutFeedback onPress={ () => console.log("Detail Contents is WIP.") /*Actions.ColumnDetailContents()*/ }>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTitleStyle}>{entry.title}</Text>
              <Text style={styles.overlayCategoryStyle}>▶︎ 記事詳細へ</Text>
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
            {/* スライド用のコンテンツを表示する */}
            {this._getSlides()}
          </Carousel>
        </View>
        <ScrollView>
          <Content>
            <Separator bordered>
              <Text>過去のアーカイブ</Text>
            </Separator>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square size={80} source={require('../../assets/wine_sample.jpg')} />
              </Left>
              <Body>
                <Text>ワインのお店</Text>
                <Text note>美味しいワインを楽しむことができます。</Text>
              </Body>
              <Right>
                <Button transparent onPress={ () => console.log("Detail Contents is WIP.") /*Actions.ColumnDetailContents()*/ }>
                  <Text>More</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square size={80} source={require('../../assets/pasta_sample.jpg')} />
              </Left>
              <Body>
                <Text>パスタのお店</Text>
                <Text note>美味しいパスタを楽しむことができます。</Text>
              </Body>
              <Right>
                <Button transparent onPress={ () => console.log("Detail Contents is WIP.") /*Actions.ColumnDetailContents()*/ }>
                  <Text>More</Text>
                </Button>
              </Right>
            </ListItem>
          </Content>
          <Separator bordered>
            <Text>コラムについて</Text>
          </Separator>
          <Text style={styles.backgroundDescription}>歴史がありながらも最近の発展やまちづくりにも目覚ましい下町情緒が溢れるあたたかな街、大塚。オフィス街・地域のお祭り・ライブハウス・隠れ家的な名店等、様々な表情をこの街は見せてくれます。</Text>
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
  backgroundDescription: {
    color: '#666',
    textAlign: 'left',
    fontSize: 14,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    lineHeight: 20,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlayCategoryStyle: {
    marginTop: 5,
    fontSize: 12,
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
