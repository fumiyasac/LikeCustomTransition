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
 WebView
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
  onItemSelected = (selected) => {
    switch (selected) {
      case "ShopList":
        return <ShopList />
      case "ColumnList":
        return <ColumnList />
      case "MyPurchase":
        return <PurchaseHistory />
      case "GithubLink":
        return <WebView source={{uri: 'https://github.com/fumiyasac'}} />
      case "SlideshareLink":
        return <WebView source={{uri: 'https://www.slideshare.net/fumiyasakai37'}} />
      default:
        return <ShopList />
    }
  };

  //ドロワーメニューに対応したタイトルの切り替えをする
  onTitleSelected = (selected) => {
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
        type="overlay"
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
        <Header iosBarStyle="light-content" style={styles.headerBackStyle} hasTabs>
          <Left>
            <Button transparent onPress={ () => this.openDrawer() }>
              <Icon style={styles.menuStyle} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyle}>{this.onTitleSelected(this.state.itemSelected)}</Title>
          </Body>
          <Right>
            <Button transparent onPress={ () => Actions.SearchShopContents() }>
              <Icon style={styles.searchStyle} name="search" />
            </Button>
          </Right>
        </Header>
        <Container>
          {this.onItemSelected(this.state.itemSelected)}
        </Container>
      </Drawer>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  searchStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  subTitleStyle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 11,
  },
  menuStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
};

export default BaseContents;
