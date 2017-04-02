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
import {
  Container,
  Drawer
} from 'native-base';

//自作コンポーネントの宣言
import CommonHeader from './common/CommonHeader';
import SideContents from './SideContents';

//コンポーネントの内容を定義する ※ ClassComponent
class BaseContents extends Component {
  //ドロワーのステートに関する定義
  state = {
    drawerOpen: false,
    drawerDisabled: false,
  };
  //ドロワーメニューの開閉に関するメソッドを定義する
  closeDrawer = () => {
    this.drawer.root.close()
  };
  openDrawer = () => {
    this.drawer.root.open()
  };
  //コンポーネントの内容をレンダリングする
  render() {
    return (
      <Drawer
        ref={(ref) => {this.drawer = ref;}}
        type="overlay"
        content={
          <SideContents closeDrawer={this.closeDrawer} />
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 80
        }}
        closedDrawerOffset={() => 0}
        panOpenMask={0.2}
        side={"left"}
        negotiatePan
        >
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
      </Drawer>
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
