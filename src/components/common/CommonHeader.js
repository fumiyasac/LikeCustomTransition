/**
 * 共通ヘッダーのUI部分を表示するコンポーネント
 */
import React from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  StyleSheet,
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
} from 'native-base';

//react-native-router-fluxのインポート宣言(Actionを使用)
import { Actions } from 'react-native-router-flux';

//ヘッダー用のベースコンポーネントの内容を定義する
const CommonHeader = ({ title, icon }) => {

  //表示する要素を返す
  return (
    <Header iosBarStyle="light-content" style={styles.headerBackStyle} hasTabs>
      <Left>
        <Button transparent onPress={ () => Actions.pop() }>
          <Icon style={styles.backStyle} name={icon || "arrow-back"} />
        </Button>
      </Left>
      <Body>
        <Title style={styles.titleStyle}>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

//このコンポーネントのStyle定義
const styles = {
  headerBackStyle: {
    backgroundColor: '#000',
  },
  backStyle: {
    color: '#fff',
  },
  titleStyle: {
    color: '#fff',
  },
};

//このコンポーネントをインポート可能にする
export default CommonHeader;
