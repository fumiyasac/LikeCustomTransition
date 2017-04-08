/**
 * NativeBaseのシンプルなリストUIのベース部分を表示するコンポーネント
 */
import React from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  ListItem,
  Left,
  Body,
  Right,
  Text,
  Button,
  Icon,
  Thumbnail
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//一覧シンプルリスト表示用のベースコンポーネントの内容を定義する
const CommonSimpleListItem = ({ campaign }) => {

  //取得した引数（オブジェクト：{ campaign }）を分割する
  const { id, title, catchcopy, image_url } = campaign;

  //表示する要素を返す
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square size={80} source={require('../assets/otsuka_sample.jpg')} />
      </Left>
      <Body>
        <Text>{title}</Text>
        <Text note>{catchcopy}</Text>
      </Body>
      <Right>
        <Button transparent onPress={ () => console.log("Display Campaign QR Code.") }>
          <Text>詳細</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

//このコンポーネントのStyle定義
const styles = {};

//このコンポーネントをインポート可能にする
export default CommonSimpleListItem;
