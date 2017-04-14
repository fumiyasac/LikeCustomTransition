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

import CommonHeader from './common/CommonHeader';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//
import ParallaxView from 'react-native-parallax-view';

//コンポーネントの内容を定義する ※ ClassComponent
class ColumnDetailContents extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    return (
      <Container>
        <Content>
          <ParallaxView
              backgroundSource={require('../assets/otsuka_sample.jpg')}
              windowHeight={300}
              header={(
                <Header iosBarStyle="light-content" style={styles.headerBackStyle} searchBar rounded>
                  <Left>
                    <Button transparent onPress={ () => Actions.pop() }>
                      <Icon style={styles.backStyle} name='arrow-back' />
                    </Button>
                  </Left>
                  <Body>
                  </Body>
                  <Right>
                  </Right>
                </Header>
              )}
              scrollableViewStyle={{ backgroundColor: 'red' }}
          >
            <View>
              <Text>
                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content                  Header ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader ContentHeader Content
              </Text>
            </View>
          </ParallaxView>
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, .0)',
  },
  backStyle: {
    color: 'rgba(255, 255, 255, 1)',
  },
};

//このコンポーネントをインポート可能にする
export default ColumnDetailContents;
