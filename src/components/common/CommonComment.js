/**
 * コメント表示用UIのベース部分を表示するコンポーネント
 */

import React from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  ListItem,
  Left,
  Body,
  Right,
  Text,
  Thumbnail
} from 'native-base';

//一覧シンプルリスト表示用のベースコンポーネントの内容を定義する
const CommonComment = ({ comment }) => {

  //取得した引数（オブジェクト：{ comment }）を分割する
  const { id, title, description, image_url, time } = comment;

  //表示する要素を返す
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={image_url} />
      </Left>
      <Body>
        <Text>{title}</Text>
        <Text style={styles.commentTextStyle} note>{description}</Text>
      </Body>
      <Right>
        <Text note>{time}</Text>
      </Right>
    </ListItem>
  );
};

//このコンポーネントのスタイル設定
const styles = {
  commentTextStyle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 18
  },
};

//このコンポーネントをインポート可能にする
export default CommonComment;
