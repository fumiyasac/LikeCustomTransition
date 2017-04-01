/**
 * アプリコンテンツ用のコンポーネント
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//自作コンポーネント
import BaseContents from './components/BaseContents';
import AnimationExample from './components/AnimationExample';

//コンポーネントの内容を定義する ※ ClassComponent
class App extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  //コンテンツのレンダリング
  render() {
    return (
      <BaseContents />
    );
  }
}

export default App;
