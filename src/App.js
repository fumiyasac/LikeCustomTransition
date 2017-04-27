/**
 * アプリコンテンツ用のコンポーネント
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Router, Scene } from 'react-native-router-flux';

//自作コンポーネント
import BaseContents from './components/BaseContents';
import ShopDetailContents from './components/ShopDetailContents';
import PhotoGalleryContents from './components/PhotoGalleryContents';

//コンポーネントの内容を定義する ※ ClassComponent
class App extends Component {

  //各種ルーティングに対応するコンポーネントの内容をレンダリングする
  /**
   * Memo:
   * モーダルのような遷移をする場合は「direction="vertical"」を属性に設定する。
   */
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="BaseContents" initial={true} component={BaseContents} hideNavBar={true} />
          <Scene key="ShopDetailContents" component={ShopDetailContents} hideNavBar={true} />
          <Scene key="PhotoGalleryContents" component={PhotoGalleryContents} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

export default App;
