# Ver.0.40

[Ver.0.39](./ver.0.39.html) で発生していた不具合を修正し、安定性を高めた Ver. です。2021 年 3 月 16 日に公開されました。

<Download link="/files/Koioto-Ver.0.40.zip" label="Ver.0.40">ダウンロード (26.2 MB)</Download>

SHA1: `859306A13B40E9131594799280E7575B10BD7788`

::: warning Windows 標準の解凍機能で解凍する場合
こちらを参照してください: [Windows 標準の解凍機能で Koioto を解凍する場合](/unzip.html)
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

- 譜面の読み込みにかかった時間を[ログ](/features/log.html)に出力する機能を追加
- 選曲画面に戻ったとき、前回再生した曲を選択したままにする機能を追加
  - デフォルトでオン。[Settings.json](/config/settings-json.html#keepselectedsong) から変更可

## 変更

- 譜面の読み込み速度を改善

## 削除

- [曲フォルダ](/features/song-folder.html)から上の階層に戻ったときにスクロール位置を復元する設定を削除
  - 代替の機能がデフォルトで有効になっています
- 特定の条件を満たすと選曲画面で瞬間的にフリーズする不具合を削除
- 極端にノーツ数の多い譜面だと読み込み時間が激増する不具合を削除
- 再生画面で特定の操作をすると強制終了する不具合を削除