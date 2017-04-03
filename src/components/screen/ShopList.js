/**
 * カード型のUIを表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  ScrollView
} from 'react-native';

//アルバム詳細用の共通コンポーネントのインポート宣言
import CommonCard from '../common/CommonCard';

//HTTP通信用のライブラリ'axios'のインポート宣言
import axios from 'axios';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopList extends Component {

  //ステートの初期化を行う
  state = { albums: [] };

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {
    //Memo: 自作APIとバインドする（ここはRails4.1.7で構築）
    axios.get('https://immense-journey-38002.herokuapp.com/articles.json')
    .then(response => this.setState({ albums: response.data.article.contents }));
  }

  //アルバムデータのレンダリングを行う
  renderAlbums() {
    return this.state.albums.map(album =>
      <CommonCard key={album.title} album={album} />
    );
  }

  //コンポーネントの内容をレンダリングする
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

//インポート可能にする宣言
export default ShopList;
