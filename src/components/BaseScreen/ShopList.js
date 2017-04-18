/**
 * お店一覧を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Spinner,
  Button,
} from 'native-base';

//アルバム詳細用の共通コンポーネントのインポート宣言
import CommonCard from '../common/CommonCard';

//HTTP通信用のライブラリ'axios'のインポート宣言
import axios from 'axios';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopList extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    //ステートの初期化を行う
    this.state = { shops: [], isLoading: true, isError: false, modalVisible: false };
  }

  //ショップデータをフェッチする
  fetchShopData() {
    //Memo: 自作APIとバインドする（ここはRails4.1.7で構築）
    axios.get('https://rocky-dusk-33235.herokuapp.com/shops.json')
    .then(response => this.setState({ shops: response.data.shops.contents, isLoading: false }))
    .catch(error => this.setState({ shops: [], isLoading: false, isError: true }));
  }

  //ショップデータの再読み込みを行う
  reloadShops() {
    this.state = { shops: [], isLoading: true, isError: false };
    this.fetchShopData();
  }

  //ショップデータのレンダリングを行う
  renderShops() {
    return this.state.shops.map(shop =>
      <CommonCard key={shop.id} shop={shop} />
    );
  }

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    this.fetchShopData();
  }

  //コンポーネントの内容をレンダリングする
  render() {

    //ローデーィング時
    if (this.state.isLoading) {
      return (
        <View style={styles.spinnerWrapperStyle}>
          <Spinner color="#666" />
          <Text style={styles.spinnerInnerText}>データ取得中...</Text>
        </View>
      );
    }

    //エラー発生時
    if (this.state.isError) {
      return (
        <View style={styles.spinnerWrapperStyle}>
          <Text style={styles.spinnerInnerTextStyle}>エラー：データを取得できませんでした。</Text>
          <View>
            <Button style={styles.buttonStyle} onPress={ () => this.reloadShops() } dark>
              <Text style={styles.buttonTextStyle}>再度データを取得する</Text>
            </Button>
          </View>
        </View>
      );
    }

    return (
      <ScrollView style={styles.backgroundContainer}>
        {this.renderShops()}
      </ScrollView>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  backgroundContainer: {
    backgroundColor: '#fff',
  },
  spinnerWrapperStyle: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerInnerTextStyle: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
  },
  buttonStyle: {
    marginTop: 10,
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
};

//インポート可能にする宣言
export default ShopList;
