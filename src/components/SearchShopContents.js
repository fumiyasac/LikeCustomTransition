/**
 * 検索画面を表示するコンポーネント
 */
import React, {
  Component
} from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
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
  Text,
  Item,
  Input,
  Footer,
  FooterTab
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//コンポーネントの内容を定義する ※ ClassComponent
class SearchShopContents extends Component {

 //コンポーネントの内容をレンダリングする
 /**
  * Memo:
  *
  */
 render() {
   return (
     <Container>
      <Header iosBarStyle="light-content" style={styles.headerBackStyle} searchBar rounded>
        <Item>
          <Icon name="search" />
          <Input placeholder="お店を検索する" />
        </Item>
        <Button transparent>
          <Text style={styles.searchButtonStyle}>検索</Text>
        </Button>
      </Header>
      <Content>
      {/* 中身はあとから考える */}
      </Content>
      <Footer>
        <FooterTab>
          <Button style={styles.footerBackStyle} full onPress={ () => Actions.pop() }>
            <Text style={styles.footerTextStyle}>戻る</Text>
          </Button>
        </FooterTab>
      </Footer>
     </Container>
   );
 }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  searchButtonStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
  footerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  footerTextStyle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
  },
};

//このコンポーネントをインポート可能にする
export default SearchShopContents;
