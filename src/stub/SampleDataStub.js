/**
 * 表示用データのスタブ
 */

//ギャラリー用の表示データ
const getGalleryList = () => {
  return [
    { name: 'ギャラリー写真1', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery1.jpg' },
    { name: 'ギャラリー写真2', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery2.jpg' },
    { name: 'ギャラリー写真3', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery3.jpg' },
    { name: 'ギャラリー写真4', date: '2017.04.15', gallery: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/gallery/gallery4.jpg' },
  ];
};

//コラムアーカイブ用の表示データ
const getArchiveList = () => {
  return [
    { id: 1, title: 'パスタのお店', catchcopy: '美味しいパスタを楽しむことができます。', image_url: require('../assets/pasta_sample.jpg') },
    { id: 2, title: 'ワインのお店', catchcopy: '美味しいワインを楽しむことができます。', image_url: require('../assets/wine_sample.jpg') },
  ];
};

//スライダー用の表示データ
const getSliderList = () => {
  return [
    { title: 'コラムタイトル1', image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column1.jpg' },
    { title: 'コラムタイトル2', image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column2.jpg' },
    { title: 'コラムタイトル3', image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column3.jpg' },
    { title: 'コラムタイトル4', image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column4.jpg' },
    { title: 'コラムタイトル5', image_url: 'https://s3-ap-northeast-1.amazonaws.com/otsuka-shop/images/column/column5.jpg' }
  ];
};

//買い物履歴用の表示データ
const getPurchaseHistory = () => {
  return [
    { time: '2017.04.16', title: 'スーパーLIFEでお買い物をしました。', description: '日用品とか食器とかを¥5000程度のお買い物をしました。' },
    { time: '2017.04.16', title: 'ランニング中に缶ジュースを購入しました。', description: 'さくっとカルピスウォーターを¥140で！自動販売機でざっくりとな。' },
    { time: '2017.04.16', title: 'お昼にカツ丼を食べました。', description: '散歩中に近所で見つけたお店でカツ丼を¥860でボリュームゴツすぎ！' },
    { time: '2017.04.16', title: 'マルエツでお買い物をしました。', description: '今日は牛肉と野菜の炒め物を作りたかったので、中華の食材をはじめ¥5000ほどを使った！' }
  ];
};

//コメント用の表示データ
const getCommentList = () => {
  return [
    { id: '1', title: 'ランチもディナーも大満足できる！', time: '3 hours ago', description: 'ランチもお手頃な値段で楽しむことができ、それでいてディナーも大満足のメニューラインナップ。また定期的にもお客さん参加型のイベント等も開催されておりとても楽しむことができます。', image_url: require('../assets/sample_avatar.jpg') },
    { id: '2', title: '結婚式の2次会から普段の食事まで幅広く対応。', time: '12 hours ago', description: '近くに「ホテルベルクラシック東京」があるので、結婚式の2次会でも利用されることが多いお店。色々とサポートも手厚く貸切イベントでも安心してご利用することができます。', image_url: require('../assets/sample_avatar.jpg') },
    { id: '3', title: '名物店長と毎週開催のイベントもCheck it out!', time: 'a day ago', description: '店長がとにかく面白い！劇団の振り付けも担当する経歴もさることながら、お店で働くメンバーもとても面白い方々が勢揃い。お料理やワインを楽しみながら「Tokyo', image_url: require('../assets/sample_avatar.jpg') }
  ];
};

module.exports = { getGalleryList, getArchiveList, getSliderList, getPurchaseHistory, getCommentList };
