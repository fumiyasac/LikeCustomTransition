/**
 * サイドコンテンツ用のコンポーネント
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Button,
  Content,
  ListItem,
  Separator,
  Icon
} from 'native-base';

//コンポーネントの内容を定義する ※ ClassComponent
class SideContents extends Component {

  //このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  //コンポーネントの内容をレンダリングする
  render() {
    let {closeDrawer} = this.props;
    return (
      <Container style={styles.containerBackgroundStyle}>
        <View style={styles.containerHeaderStyle}>
          <Image />
          <View style={styles.overlayStyle}>
            <Text style={styles.overlayTextStyle}>大塚Deお買い物Menu</Text>
          </View>
        </View>
        <Content>
          <Separator bordered>
            <Text>コンテンツ</Text>
          </Separator>
          <ListItem onPress={closeDrawer}>
            <Icon ios='ios-pizza' android="md-pizza" style={{color: '#ffc125'}}/>
            <Text style={styles.menuTextStyle}>紹介しているお店一覧</Text>
          </ListItem>
          <ListItem onPress={closeDrawer} last>
            <Icon ios='ios-search' android="md-search" style={{color: '#2e8b57'}}/>
            <Text style={styles.menuTextStyle}>お店を探す</Text>
          </ListItem>
          <ListItem onPress={closeDrawer}>
            <Icon ios='ios-cart' android="md-cart" style={{color: '#ff3333'}}/>
            <Text style={styles.menuTextStyle}>Myお買い物</Text>
          </ListItem>
          <Separator bordered>
            <Text>このサンプルに関して</Text>
          </Separator>
          <ListItem onPress={closeDrawer}>
            <Icon ios='logo-octocat' android="logo-octocat" style={{color: '#333333'}}/>
            <Text style={styles.menuTextStyle}>Githubへのリンク</Text>
          </ListItem>
          <ListItem onPress={closeDrawer}>
            <Icon ios='logo-linkedin' android="logo-linkedin" style={{color: '#0077b5'}}/>
            <Text style={styles.menuTextStyle}>SlideShareへのリンク</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

//このコンポーネントのスタイル設定
const styles = {
  containerHeaderStyle: {
    height: 160,
    backgroundColor: '#F5FCFF',
    position: 'relative',
  },
  overlayStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  overlayTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerBackgroundStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuTextStyle: {
    paddingLeft: 8,
  }
};

//インポート可能にする宣言
export default SideContents;
