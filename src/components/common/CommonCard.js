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

//コンポーネントの内容を定義する ※ FunctionalComponent
//参考：ES2015(ES6)新構文：アロー関数(Arrow function)
const CommonCard = ({ album }) => {

  //取得した引数（オブジェクト：{ album }）を分割する
  const { id, title, category, image_url } = album;

  //表示する要素を返す
  return (
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Text>{title}</Text>
            <Text style={styles.noteStyle} note>写真番号：No.{id} ({category})</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image style={styles.imageStyle} source={{ uri: image_url }} />
        </CardItem>
        <CardItem content>
          <Text>このAPIから表示しているものはサンプルになります。</Text>
        </CardItem>
        <CardItem style={styles.cardBottomStyle}>
          <Text>更新日：2017/04/03</Text>
          <Button transparent>
            <Icon active name="chatbubbles" />
              <Text>詳細やコメントを見る</Text>
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
    height: 300,
    flex: 1
  },
  cardBottomStyle: {
    justifyContent: 'space-around'
  }
};

//このコンポーネントをインポート可能にする
export default CommonCard;
