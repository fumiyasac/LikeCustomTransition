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
          <Text style={styles.cardContentTextStyle}>このAPIから表示しているものはサンプルになります。後々に差し替えを行う予定ですので、申し訳ありませんがしばしお待ちくださいませ。</Text>
        </CardItem>
        <CardItem style={styles.cardBottomStyle}>
          <Text style={styles.cardBottomTextStyle}>更新日：2017/04/03</Text>
          <Button disabled={true} transparent>
            <Icon active name="chatbubbles" />
              <Text style={styles.cardBottomTextStyle}>今月イチオシのお店です！</Text>
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
