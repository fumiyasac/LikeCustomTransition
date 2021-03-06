/**
 * ベースコンテンツ用のコンポーネント
 */

import React, {
  Component,
  PropTypes
} from 'react';

import {
 StyleSheet,
 Text,
 View,
 WebView,
 Platform
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Drawer,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  Icon
} from 'native-base';

//ヘッダー用コンポーネントの宣言
import CommonHeader from './common/CommonHeader';

//ドロワー用コンポーネントの宣言
import SideContents from './SideContents';

//コンテンツ用コンポーネントの宣言
import ShopList from './BaseScreen/ShopList';
import ColumnList from './BaseScreen/ColumnList';
import PurchaseHistory from './BaseScreen/PurchaseHistory';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//コンポーネントの内容を定義する ※ ClassComponent
class BaseContents extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    //ステートの初期化を行う
    this.state = { drawerOpen: false, drawerDisabled: false, itemSelected: 'ShopList' };
  }

  //ドロワーメニューを閉じる際に関する設定をする
  closeDrawer = (item) => {
    this.setState({itemSelected: item})
    this._drawer._root.close()
  };

  //ドロワーメニューを開く際に関する設定をする
  openDrawer = () => {
    this._drawer._root.open()
  };

  //ドロワーメニューに対応したシーンの切り替えをする
  _onItemSelected = (selected) => {
    switch (selected) {
      case "ShopList":
        return <ShopList />
      case "ColumnList":
        return <ColumnList />
      case "MyPurchase":
        return <PurchaseHistory />
      case "GithubLink":
        return <WebView source={{uri: 'https://github.com/fumiyasac/LikeCustomTransition'}} />
      case "SlideshareLink":
        return <WebView source={{uri: 'https://www.slideshare.net/fumiyasakai37/nativebaseui'}} />
      default:
        return <ShopList />
    }
  };

  //ドロワーメニューに対応したタイトルの切り替えをする
  _onTitleSelected = (selected) => {
    switch (selected) {
      case "ShopList":
        return "紹介お店一覧"
      case "ColumnList":
        return "コラム一覧"
      case "MyPurchase":
        return "Myお買い物"
      case "GithubLink":
        return "リポジトリ"
      case "SlideshareLink":
        return "スライド"
      default:
        return "紹介お店一覧"
    }
  };

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   * NativeBaseのDrawerは下記のライブラリを拡張して作られている
   * (各種プロパティの参考) React Native Drawer
   * https://github.com/root-two/react-native-drawer#props
   */
  render() {
    return (
      <Drawer
        ref={ (ref) => this._drawer = ref }
        type={(Platform.OS === 'ios') ? "static" : "overlay"}
        content={
          <SideContents closeDrawer={this.closeDrawer} />
        }
        onOpen={ () => {
          this.setState({drawerOpen: true})
        }}
        onClose={ () => {
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
        closedDrawerOffset={ () => 0 }
        panOpenMask={0.04}
        negotiatePan={true}
        >
        <CommonHeader title={this._onTitleSelected(this.state.itemSelected)} icon={"menu"} onPress={ () => this.openDrawer() } />
        <Container>
          {this._onItemSelected(this.state.itemSelected)}
        </Container>
      </Drawer>
    );
  }
}

//スタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: '#000',
  },
  titleStyle: {
    color: '#fff',
  },
  searchStyle: {
    color: '#fff',
  },
  subTitleStyle: {
    color: '#fff',
    fontSize: 11,
  },
  menuStyle: {
    color: '#fff',
  },
};

export default BaseContents;
