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

//共通ヘッダーのインポート宣言
import CommonHeader from './common/CommonHeader';

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
        <CommonHeader title={"キャンペーン"} />
        <Content>
          {/* モックなんであとで差し替える */}
          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={80} source={require('../assets/otsuka_sample.jpg')} />
            </Left>
            <Body>
              <Text>【終了】~2017/04/01</Text>
              <Text note>美容室「○○○」でヘッドスパをサービス！</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>詳細を見る</Text>
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
