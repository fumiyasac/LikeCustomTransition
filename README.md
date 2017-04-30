# LikeCustomTransition
NativeBaseをはじめReactNativeの便利ライブラリを使ったUIサンプル

ReactNative等のクロスプラットフォームを用いてのアプリ開発の際に頭を悩ませる問題として「端末間のデザインの差異に対するアプローチ」があるかと思います。
今回はUIを作成する際に、iOS/Androidのネイティブアプリに近いUI部品を提供するUIコンポーネントライブラリである「NativeBase」を使用してできるだけアプリに近しい形でのUI実装を行なったサンプルになります。

また、その他サードパーティ製のUIライブラリとも組み合わせたUI表現に関してもモック程度のものではありますが実装を行なっています。

### 本サンプルの画面キャプチャ

__キャプチャ画像その1：__

![sample_capture1.jpg](https://qiita-image-store.s3.amazonaws.com/0/17400/7dcfe7ea-83fc-e599-0b94-3fd3648f29b6.jpeg)

__キャプチャ画像その2：__

![sample_capture2.jpg](https://qiita-image-store.s3.amazonaws.com/0/17400/256bb32f-e3d7-5ab1-a2d8-3a130f12da39.jpeg)


### 画面に関するスケッチと遷移チャート

__アイデアスケッチ：__

![idea_sketch.jpg](https://qiita-image-store.s3.amazonaws.com/0/17400/0e698d22-b003-0a6b-5176-c115856bbd56.jpeg)

__遷移チャート図：__

![flow_chart.jpg](https://qiita-image-store.s3.amazonaws.com/0/17400/8abdeff5-e64d-801c-0359-9d798272a068.jpeg)

### 使用ライブラリ

本サンプルでは下記のライブラリを使用しています。

+ [native-base](https://github.com/GeekyAnts/NativeBase)
+ [axios](https://github.com/mzabriskie/axios)
+ [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)
+ [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel)
+ [react-native-super-grid](https://github.com/saleel97/react-native-super-grid)
+ [react-native-timeline-listview](https://github.com/thegamenicorus/react-native-timeline-listview)

### 詳細解説

このサンプル全体の詳細解説とポイントをまとめたものは下記に掲載しております。
+ http://qiita.com/fumiyasac@github/items/12707f93f5c96fa3fc3f
