/**
 * カード型のUIのベース部分を表示するコンポーネント
 */
import React from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  Image
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Text,
  Button,
  Icon,
  Thumbnail
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//一覧情報表示用のベースコンポーネントの内容を定義する
const CommonCard = ({ shop }) => {

  //取得した引数（オブジェクト：{ shop }）を分割する
  const { id, title, category, kcpy, detail, image_url } = shop;

  //表示する要素を返す
  return (
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text>{title}</Text>
            <Text style={styles.noteStyle} note>カテゴリー：{category}</Text>
            <Text note>{kcpy}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image style={styles.imageStyle} source={{ uri: image_url }} />
        </CardItem>
        <CardItem content>
          <Text style={styles.cardContentTextStyle}>{detail}</Text>
        </CardItem>
        <CardItem style={styles.cardBottomStyle}>
          <Text style={styles.cardBottomTextStyle}>更新日：2017/04/17</Text>
          <Button onPress={ () => Actions.ShopDetailContents({id: id, title: "お店詳細"}) } transparent>
            <Icon active name="chatbubbles" />
            <Text style={styles.cardBottomTextStyle}>詳細情報を見る</Text>
          </Button>
        </CardItem>
      </Card>
    </Content>
  );
};

//このコンポーネントのStyle定義
const styles = {
  noteStyle: {
    marginTop: 5,
  },
  imageStyle: {
    marginLeft: 15,
    marginRight: 15,
    height: 240,
    flex: 1
  },
  cardContentTextStyle: {
    fontSize: 14,
    lineHeight: 22
  },
  cardBottomStyle: {
    justifyContent: 'space-around'
  },
  cardBottomTextStyle: {
    fontSize: 13
  },
};

//このコンポーネントをインポート可能にする
export default CommonCard;
