# Ver.0.45

いくつかの不具合を修正し、Windows 11 での動作の確認を検証した初めての Ver. です。2021 年 11 月 24 日に公開されました。

<Download link="/files/Koioto-Ver.0.45.zip" label="Ver.0.45">ダウンロード (26.2 MB)</Download>

SHA1: `F6BE8B1CF18DB69982C3523F677307B1ABC36B1F`

::: warning Windows 標準の解凍機能で解凍する場合
こちらを参照してください: [Windows 標準の解凍機能で Koioto を解凍する場合](/unzip.html)
:::

::: warning 古い Koioto からアップデートする場合
こちらを参照してください: [アップデートをするときは](/update.html)
:::

ダウンロードされるファイルには以下の内容が含まれています。

- Koioto 本体
- デフォルトテーマ Supernova
- [Koioto Songs](/features/koioto-songs.html)
  - 春色ジェミネーション
  - Psyched Fevereiro
- [サンプルプラグイン](/plugin/samples.html)
  - MissSound
  - SyncLyrics
  - OpenTaikoChart

## 追加

- Windows 11 での動作確認
- サポートライブラリに MIME タイプを取得するメソッドの追加
- 実行ファイルに巨大アイコンを追加
- Direct3D のバージョンをチェックする処理を追加

## 変更

- 選曲画面のボタン座標の微調整
- 描画処理の最適化
- `Score\Base.png` を[テーマ](/theme/)で編集可能に
- サンプルプラグイン OpenTaikoChart で、背景画像・動画の判別に MIME タイプを使用するように

## 削除

- サンプルプラグイン OpenTaikoChart で、動画のオフセット時間が指定されていないと動画が正しく再生されない不具合を削除