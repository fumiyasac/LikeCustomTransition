/**
 * お買い物履歴を表示するコンポーネント
 */

import React, {
  Component
} from 'react';

//NativeBaseを使用したコンポーネントの呼び出し
import {
  Container,
  Content,
} from 'native-base';

//コメント一覧表示の共通コンポーネントのインポート宣言
import CommonComment from '../common/CommonComment';

//表示データの読み込み
import { getCommentList } from '../../stub/SampleDataStub';

//コンポーネントの内容を定義する ※ ClassComponent
class ShopComment extends Component {

  //コメント用のコンポーネントを組み立てる処理
  _getCommonts() {
    return getCommentList().map((comment, index) => {
      return (
        <CommonComment key={index} comment={comment} />
      );
    });
  }

  //コンポーネントの内容をレンダリングする
  /**
   * Memo:
   *
   */
  render() {
    return (
      <Container>
        <Content>
          {this._getCommonts()}
        </Content>
      </Container>
    );
  }
}

//このコンポーネントをインポート可能にする
export default ShopComment;
