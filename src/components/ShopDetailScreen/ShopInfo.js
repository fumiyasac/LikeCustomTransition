/**
 * お買い物履歴を表示するコンポーネント
 */

import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Button,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Item,
  Text
} from 'native-base';

//react-native-easy-gridのコンポーネントの呼び出し
import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid';

//デバイスのサイズ取得
const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');

//ギャラリーの幅と高さの設定
const mainAreaWidth = DEVICE_WIDTH - 120;
const mainAreaHeight = 120 * 2;
const subAreaRect = 120;

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopInfo extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    return (
      <Container>
        <ScrollView>
          <Content>
            {/* 1. アバターエリア */}
            <View>
              <Content>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../assets/sample_avatar.jpg')} />
                  </Left>
                  <Body>
                    <Text>Shisui deux</Text>
                    <Text style={styles.commentTextStyle} note>美味しい料理と賑やかなエンターテイメントのコラボレーションが楽しめる大塚の新しい名物店。</Text>
                  </Body>
                  <Right>
                    <Text style={styles.genreTextStyle} note>イタリアン</Text>
                  </Right>
                </ListItem>
              </Content>
            </View>
            {/* 2. 画像表示エリア */}
            <View>
              <Content>
                <Grid>
                  <Col style={styles.firstImageStyle}>
                    <Image style={styles.firstImageStyle} source={require('../../assets/detail1.jpg')} />
                  </Col>
                  <Col>
                    <Row style={styles.secondImageStyle}>
                      <Image style={styles.secondImageStyle} source={require('../../assets/detail2.jpg')} />
                    </Row>
                    <Row style={styles.thirdImageStyle}>
                      <Image style={styles.thirdImageStyle} source={require('../../assets/detail3.jpg')} />
                    </Row>
                  </Col>
                </Grid>
              </Content>
            </View>
            {/* 3. テキスト */}
            <View>
              <ListItem itemDivider>
                <Text>お店の説明</Text>
              </ListItem>
              <Text style={styles.textDetailStyle}>
                大塚に新たにできたイタリアンと創作料理のお店「Shisui deux」はお料理だけでなくエンターテイメントも充実した名スポット。
                美味しいお料理やお酒を楽しむと共に「Tokyo Rouge」の素敵なイベントも開催しているので、是非お店のお近くをお通りの際はお立ち寄り下さい(^^)
              </Text>
            </View>
            {/* 4. お店の情報 */}
            <View>
              {/* この辺は項目考えて入れる */}
              <Content>
                <Button dark full onPress={ () => Actions.PhotoGalleryContents() }>
                  <Text>フォトギャラリー</Text>
                </Button>
              </Content>
            </View>
            <View>
              <ListItem itemDivider>
                <Text>お店の情報</Text>
              </ListItem>
              <ListItem>
                <Text>住所</Text>
                <Right>
                  <Text note>東京都豊島区南大塚1-60-20</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Text>建物名</Text>
                <Right>
                  <Text note>天翔大塚駅前ビル B1F</Text>
                </Right>
              </ListItem>
            </View>
            {/* 5. サブメニュー */}
            <View>
              <ListItem itemDivider>
                <Text>その他情報</Text>
              </ListItem>
              <ListItem bordered>
                <Text>食べログ</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Text>HotPepper</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Text>ぐるなび</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  genreTextStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ffa000",
  },
  commentTextStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    lineHeight: 18,
  },
  textDetailStyle: {
    color: '#666',
    textAlign: 'left',
    marginTop: 16,
    marginBottom: 16,
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 18,
  },
  firstImageStyle: {
    width: mainAreaWidth,
    height: mainAreaHeight,
  },
  secondImageStyle: {
    width: subAreaRect,
    height: subAreaRect,
  },
  thirdImageStyle: {
    width: subAreaRect,
    height: subAreaRect,
  },
};

//このコンポーネントをインポート可能にする
export default ShopInfo;
