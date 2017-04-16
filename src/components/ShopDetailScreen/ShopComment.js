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
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
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
              <Thumbnail source={require('../../assets/sample_avatar.jpg')} />
            </Left>
            <Body>
              <Text>ランチもディナーも大満足できる！</Text>
              <Text style={styles.commentTextStyle} note>ランチもお手頃な値段で楽しむことができ、それでいてディナーも大満足のメニューラインナップ。また定期的にもお客さん参加型のイベント等も開催されておりとても楽しむことができます。</Text>
            </Body>
            <Right>
              <Text note>3 hours ago</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../assets/sample_avatar.jpg')} />
            </Left>
            <Body>
              <Text>結婚式の2次会から普段の食事まで幅広く対応。</Text>
              <Text style={styles.commentTextStyle} note>近くに「ホテルベルクラシック東京」があるので、結婚式の2次会でも利用されることが多いお店。色々とサポートも手厚く貸切イベントでも安心してご利用することができます。</Text>
            </Body>
            <Right>
              <Text note>12 hours ago</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../assets/sample_avatar.jpg')} />
            </Left>
            <Body>
              <Text>名物店長と毎週開催のイベントもCheck it out!</Text>
              <Text style={styles.commentTextStyle} note>店長がとにかく面白い！劇団の振り付けも担当する経歴もさることながら、お店で働くメンバーもとても面白い方々が勢揃い。お料理やワインを楽しみながら「Tokyo Rouge」のショーも一緒にお楽しみに！</Text>
            </Body>
            <Right>
              <Text note>a day ago</Text>
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
