/**
 * ベースコンテンツ用のコンポーネント
 */
import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import { Container } from 'native-base';

//自作コンポーネントの宣言
import CommonHeader from './common/CommonHeader';

//コンポーネントの内容を定義する ※ ClassComponent
class BaseContents extends Component {
  render() {
    return (
      <Container>
        <CommonHeader />
        <View style={styles.container}>
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
      </Container>
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

export default BaseContents;
