/**
 * 一番最初の画面を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  Icon
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//react-native-scrollable-tab-viewのインポート宣言(TabBar実装)
import ScrollableTabView from 'react-native-scrollable-tab-view';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopDetailContents extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    return (
      <Container>
        <Header iosBarStyle="light-content" style={styles.headerBackStyle} hasTabs>
          <Left>
            <Button transparent onPress={ () => Actions.pop() }>
              <Icon style={styles.backStyle} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyle}>{this.props.title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Container>
          <ScrollableTabView
            tabBarActiveTextColor={'#333'}
            tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
            tabBarTextStyle={styles.tabBarTextStyle}
            >
            <View tabLabel="詳細情報">
              <Text>First Tab.</Text>
            </View>
            <View tabLabel="みんなのコメント">
              <Text>Second Tab.</Text>
            </View>
            <View tabLabel="地図">
              <Text>Third Tab.</Text>
            </View>
          </ScrollableTabView>
        </Container>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  backStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  subTitleStyle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 11,
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#333',
  },
  tabBarTextStyle: {
    fontSize: 13
  },
};

//このコンポーネントをインポート可能にする
export default ShopDetailContents;
