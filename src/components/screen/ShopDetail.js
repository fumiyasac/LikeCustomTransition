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
  Container
} from 'native-base';

//react-native-scrollable-tab-viewのインポート宣言(TabBar実装)
import ScrollableTabView from 'react-native-scrollable-tab-view';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopDetail extends Component {
  render() {
    return (
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
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  tabBarUnderlineStyle: {
    backgroundColor: '#333'
  },
  tabBarTextStyle: {
    fontSize: 14
  },
};

//このコンポーネントをインポート可能にする
export default ShopDetail;
