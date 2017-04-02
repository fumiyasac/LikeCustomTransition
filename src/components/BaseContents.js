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
  //ドロワーのステートに関する処理
  state = {
    drawerOpen: false,
    drawerDisabled: false,
  };
  //ドロワーメニューの開閉に関する設定をする
  closeDrawer = () => {
    this._drawer._root.close()
  };
  openDrawer = () => {
    this._drawer._root.open()
  };
  //コンポーネントの内容をレンダリングする
  /**
   * NativeBaseのDrawerは下記のライブラリを拡張して作られている
   * (各種プロパティの参考) React Native Drawer
   * https://github.com/root-two/react-native-drawer#props
   */
  render() {
    return (
      <Drawer
        ref={ (ref) => this._drawer = ref }
        type="overlay"
        content={
          <SideContents closeDrawer={this.closeDrawer} />
        }
        onOpen={ () => {
          console.log('Drawer Open.')
          this.setState({drawerOpen: true})
        }}
        onClose={ () => {
          console.log('Drawer Close.')
          this.setState({drawerOpen: false})
        }}
        tweenHandler={ (ratio) => {
          return {
            mainOverlay: { opacity: ratio / 2, backgroundColor: 'black' }
          }
        }}
        captureGestures={true}
        tweenDuration={200}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={ (viewport) => {
          return 80
        }}
        side={"left"}
        closedDrawerOffset={() => 0}
        panOpenMask={0.2}
        negotiatePan={false}
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
