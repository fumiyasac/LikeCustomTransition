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
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

//react-native-parallax-viewのインポート宣言(パララックス入りの詳細表示の実装)
//import ParallaxView from 'react-native-parallax-view';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  List,
  ListItem,
  Thumbnail,
  Icon,
  CardItem,
  Card,
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
                    <Thumbnail source={require('../../assets/otsuka_sample.jpg')} />
                  </Left>
                  <Body>
                    <Text>タイトルが入ります。</Text>
                    <Text style={styles.commentTextStyle} note>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</Text>
                  </Body>
                  <Right>
                  </Right>
                </ListItem>
              </Content>
            </View>
            {/* 2. 画像表示エリア */}
            <View>
              <Content>
                <Grid>
                  <Col style={{ backgroundColor: '#635DB7', width: DEVICE_WIDTH - 120, height: 240 }}>
                    <Text>1</Text>
                  </Col>
                  <Col>
                    <Row style={{ backgroundColor: '#00CE9F', width: 120, height: 120 }}>
                      <Text>2</Text>
                    </Row>
                    <Row style={{ backgroundColor: '#00DD9F', width: 120, height: 120 }}>
                      <Text>3</Text>
                    </Row>
                  </Col>
                </Grid>
              </Content>
            </View>
            {/* 3. テキスト */}
            <View>
              <Text style={styles.textDetailStyle}>歴史がありながらも最近の発展やまちづくりにも目覚ましい下町情緒が溢れるあたたかな街、大塚。オフィス街・地域のお祭り・ライブハウス・隠れ家的な名店等、様々な表情をこの街は見せてくれます。</Text>
            </View>
            {/* 4. お店の情報 */}
            <View>
              <ListItem>
                <Left>
                  <Text>タイトルが入ります。</Text>
                </Left>
                <Body>
                  <Text>タイトルが入ります。タイトルが入ります。タイトルが入ります。</Text>
                </Body>
                <Right>
                </Right>
              </ListItem>
            </View>
            {/* 5. サブメニュー */}
            <View>
              <ListItem bordered>
                <Text>Simon Mignolet</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Text>Simon Mignolet</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Text>Simon Mignolet</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Text>Simon Mignolet</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </View>
          </Content>
        </ScrollView>
          {/*
          <ParallaxView
            ref={component => this._scrollView = component}
            backgroundSource={{ uri: "http://i.imgur.com/mEVXC36.jpg" }}
            windowHeight={300}
            >
            <View>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
                cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
                Populo nemore qualisque vis te, at numquam persequeris duo.
              </Text>
              <TouchableOpacity onPress={ () => {this._scrollView.scrollTo(0, 0);}}>
                <Text style={{color: '#00A7FF'}}>
                  Scroll to top
                </Text>
              </TouchableOpacity>
            </View>
          </ParallaxView>
          */}
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
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
};

//このコンポーネントをインポート可能にする
export default ShopInfo;
