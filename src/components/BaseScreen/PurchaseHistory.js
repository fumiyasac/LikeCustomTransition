/**
 * お買い物履歴を表示するコンポーネント
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
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//react-native-timeline-listviewのインポート宣言
import Timeline from 'react-native-timeline-listview';

//表示データの読み込み
import { getPurchaseHistory } from '../../stub/SampleDataStub';

//コンポーネントの内容を定義する ※ ClassComponent
class PurchaseHistory extends Component {

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    //コンポーネントのレンダリング
    return (
      <Container style={styles.backgroundContainer}>
        <Content style={styles.backgroundDescription}>
          <Timeline
            innerCircle={'dot'}
            timeStyle={styles.timeStyle}
            descriptionStyle={styles.descriptionStyle}
            data={getPurchaseHistory()}
            />
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  backgroundContainer: {
    backgroundColor: '#fff',
  },
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
