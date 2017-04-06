/**
 * カテゴリー別のコラム一覧画面を表示するコンポーネント
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

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//コンポーネントの内容を定義する ※ ClassComponent
class ColumnCategoryContents extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    return (
      <Container>
        <Header iosBarStyle="light-content" style={styles.headerBackStyle} hasTabs>
          <Left>
            <Button transparent onPress={ () => Actions.pop() }>
              <Icon style={styles.backStyle} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyle}>カテゴリー一覧</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          {/* 中身はあとから考える */}
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  backStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
};

//このコンポーネントをインポート可能にする
export default ColumnCategoryContents;
