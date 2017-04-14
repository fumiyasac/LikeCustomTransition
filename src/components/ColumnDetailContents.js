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
  Text
} from 'native-base';

//共通ヘッダーのインポート宣言
import CommonHeader from './common/CommonHeader';

//パララックス表示用のライブラリのインポート宣言（NativeBaseのグリッドを使わない）
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
        <CommonHeader title={"コラム詳細"} />
        <Content>
          <ParallaxView
            backgroundSource={require('../assets/otsuka_sample.jpg')}
            windowHeight={300}
            header={(
              <Text>
                test
              </Text>
            )}
            scrollableViewStyle={{ backgroundColor: 'red' }}
          >
          <View>
            <Text>
              test
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
};

//このコンポーネントをインポート可能にする
export default ColumnDetailContents;
