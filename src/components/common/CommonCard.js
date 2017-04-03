/**
 * カード型のUIのベース部分を表示するコンポーネント
 */
import React from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Text,
  Button
} from 'native-base';

//デバイス幅の取得
var width = Dimensions.get('window').width;

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
            <Text note>写真番号：No.{id} ({category})</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image style={styles.imageStyle} source={{ uri: image_url }} />
        </CardItem>
        <CardItem content>
          <Text>このAPIから表示しているものはサンプルになります。</Text>
        </CardItem>
        <CardItem style={{ justifyContent: 'space-around' }}>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
          <Text>2 days ago</Text>
        </CardItem>
      </Card>
    </Content>
  );
};

//このコンポーネントのStyle定義
const styles = {
  imageStyle: {
    width: width,
    marginLeft: 15,
    marginRight: 15,
    height: 300,
    flex: 1
  }
};

//このコンポーネントをインポート可能にする
export default CommonCard;
