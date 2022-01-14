# Ver.0.46

小節数表示機能を追加し、いくつかの挙動を変更した Ver. です。2022 年 1 月 16 日に公開されました。

<Download link="/files/Koioto-Ver.0.46.zip" label="Ver.0.46">ダウンロード (--.- MB)</Download>

SHA1: `-`

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

- [小節移動時](/features/measure-move.html)に現在の小節と小節数を表示する機能を追加
- 最新のログのみ残す設定 [`keepOnlyLatestLog`](/config/settings-json.html#keeponlylatestlog) を追加
- [譜面読み込みプラグイン](/plugin/making-chartreader-plugin.html)がひとつもないときエラーログを出力する機能を追加

## 変更

- 再生画面のセクション変更時のイベント発火タイミングを微調整
- 画面遷移時にログの一時保存をするように変更
- [小節移動時](/features/measure-move.html)の内部処理を変更
- 使用しているライブラリの更新

## 削除

- 削除された要素はありません