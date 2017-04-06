/**
 * キャンペーン一覧画面を表示するコンポーネント
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
class CampaignArchiveContents extends Component {

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
            <Title style={styles.titleStyle}>キャンペーン</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          {/* モックなんであとで差し替える */}
          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={80} source={require('../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={80} source={require('../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={80} source={require('../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
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
export default CampaignArchiveContents;
