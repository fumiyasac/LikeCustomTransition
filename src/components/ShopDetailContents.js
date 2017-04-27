/**
 * お店詳細画面を表示するコンポーネント
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
  Icon,
  ScrollableTab
} from 'native-base';

//共通ヘッダーのインポート宣言
import CommonHeader from './common/CommonHeader';

//react-native-scrollable-tab-viewのインポート宣言(TabBar実装)
import ScrollableTabView from 'react-native-scrollable-tab-view';

//コンテンツ用コンポーネントの宣言
import ShopList from './ShopDetailScreen/ShopInfo';
import ShopComment from './ShopDetailScreen/ShopComment';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

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
        <CommonHeader title={this.props.title} onPress={ () => Actions.pop() } />
        <Container>
          <ScrollableTabView
            tabBarActiveTextColor={'#333'}
            tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
            tabBarTextStyle={styles.tabBarTextStyle}
            >
            <ShopList tabLabel="詳細情報" />
            <ShopComment tabLabel="みんなのコメント" />
          </ScrollableTabView>
        </Container>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  tabBarUnderlineStyle: {
    backgroundColor: '#333',
  },
  tabBarTextStyle: {
    fontSize: 13
  },
};

//このコンポーネントをインポート可能にする
export default ShopDetailContents;
