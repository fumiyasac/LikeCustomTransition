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
  Text,
  Dimensions
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

//幅と高さを取得する
const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');

//コンポーネントの内容を定義する ※ ClassComponent
class SideContents extends Component {

  //このコンポーネントのpropTypesの定義（this.propsで受け取れる情報に関するもの）
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
  };

  //コンポーネントの内容をレンダリングする
  /**
   * Memo: アイコン選定の参考はこちら
   * https://github.com/oblador/react-native-vector-icons
   * https://oblador.github.io/react-native-vector-icons/
   */
  render() {
    return (
      <Container style={styles.containerBackgroundStyle}>
        <View style={styles.containerHeaderStyle}>
          <Image style={styles.containerHeaderImageStyle} source={require('../assets/otsuka_sample.jpg')} />
          <View style={styles.overlayStyle}>
            <Text style={styles.overlayTextStyle}>大塚Deお買い物Menu</Text>
          </View>
        </View>
        <Content>
          <Separator bordered>
            <Text>コンテンツ</Text>
          </Separator>
          <ListItem onPress={ () => {this.props.closeDrawer("ShopList")} }>
            <Icon ios='ios-pizza' android="md-pizza" style={{color: '#ffc125'}}/>
            <Text style={styles.menuTextStyle}>紹介お店一覧</Text>
          </ListItem>
          <ListItem onPress={ () => {this.props.closeDrawer("ColumnList")} }>
            <Icon ios='ios-book' android="ios-book" style={{color: '#ff6600'}}/>
            <Text style={styles.menuTextStyle}>コラム一覧</Text>
          </ListItem>
          <ListItem onPress={ () => {this.props.closeDrawer("MyPurchase")} } last>
            <Icon ios='ios-cart' android="md-cart" style={{color: '#ff3333'}}/>
            <Text style={styles.menuTextStyle}>Myお買い物</Text>
          </ListItem>
          <Separator bordered>
            <Text>このサンプルに関して</Text>
          </Separator>
          <ListItem onPress={ () => {this.props.closeDrawer("GithubLink")} }>
            <Icon ios='logo-octocat' android="logo-octocat" style={{color: '#333333'}}/>
            <Text style={styles.menuTextStyle}>Githubへのリンク</Text>
          </ListItem>
          <ListItem onPress={ () => {this.props.closeDrawer("SlideshareLink")} }>
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
  containerHeaderImageStyle: {
    height: 160,
    width: DEVICE_WIDTH - 80,
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
