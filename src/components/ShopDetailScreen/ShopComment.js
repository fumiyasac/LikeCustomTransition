/**
 * お買い物履歴を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
  View
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Text
} from 'native-base';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopComment extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>タイトルが入ります。</Text>
              <Text style={styles.commentTextStyle} note>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>タイトルが入ります。</Text>
              <Text style={styles.commentTextStyle} note>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>タイトルが入ります。</Text>
              <Text style={styles.commentTextStyle} note>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  commentTextStyle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 18
  },
};

//このコンポーネントをインポート可能にする
export default ShopComment;
