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

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//タイムライン表示用の
import Timeline from 'react-native-timeline-listview';

//コンポーネントの内容を定義する ※ ClassComponent
class PurchaseHistory extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    //データスタブ
    const timelineItems = [
      { time: '2017.04.16', title: 'スーパーLIFEでお買い物をしました。', description: '日用品とか食器とかを¥5000程度のお買い物をしました。' },
      { time: '2017.04.16', title: 'ランニング中に缶ジュースを購入しました。', description: 'さくっとカルピスウォーターを¥140で！自動販売機でざっくりとな。' },
      { time: '2017.04.16', title: 'お昼にカツ丼を食べました。', description: '散歩中に近所で見つけたお店でカツ丼を¥860でボリュームゴツすぎ！' },
      { time: '2017.04.16', title: 'マルエツでお買い物をしました。', description: '今日は牛肉と野菜の炒め物を作りたかったので、中華の食材をはじめ¥5000ほどを使った！' },
    ];
    //コンポーネントのレンダリング
    return (
      <Container>
        <Content style={styles.backgroundDescription}>
          <Timeline
            innerCircle={'dot'}
            timeStyle={styles.timeStyle}
            descriptionStyle={styles.descriptionStyle}
            data={timelineItems}
            />
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  backgroundDescription: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  timeStyle: {
    textAlign: 'center',
    backgroundColor: '#999',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  },
  descriptionStyle: {
    color:'#666',
    lineHeight: 18,
  }
};

//このコンポーネントをインポート可能にする
export default PurchaseHistory;
