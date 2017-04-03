/**
 * サイドコンテンツ用のコンポーネント
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Button
} from 'native-base';

//コンポーネントの内容を定義する ※ ClassComponent
class SideContents extends Component {

  //このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  //コンポーネントの内容をレンダリングする
  render() {
    let {closeDrawer} = this.props;
    return (
      <View style={styles.container}>
        <Button primary onPress={closeDrawer}>
          <Text>Close Drawer</Text>
        </Button>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//インポート可能にする宣言
export default SideContents;
