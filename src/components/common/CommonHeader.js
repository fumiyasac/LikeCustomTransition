/**
 * ヘッダーを表示するコンポーネント
 */
import React, { Component } from 'react';

//ReactNativeを使用したコンポーネントの呼び出し
import {
  Text
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

//コンポーネントの内容を定義する
const CustomHeader = () => (
  <Header iosBarStyle="light-content" style={styles.headerBackStyle} hasTabs>
    <Left>
      <Button transparent>
        <Icon style={styles.arrowStyle} name='arrow-back' />
      </Button>
    </Left>
    <Body>
      <Title style={styles.titleStyle}>Header</Title>
    </Body>
    <Right>
      {/* Remark: 何もない場合にはここはブランクにする */}
    </Right>
  </Header>
);

//このコンポーネントのStyle定義
const styles = {
  headerBackStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 1)'
  },
  arrowStyle: {
    color: 'rgba(255, 255, 255, 1)'
  }
};

//このコンポーネントをインポート可能にする
export default CustomHeader;
