# DrawOrder

エフェクトや文字などの描画順を定義するファイルです。このファイル名は `Themes\DrawOrder.json` です。

このファイルを変更することで、処理の順番を変えずに描画の順番を変更することができます。これは全てのテーマで共通です。

また、描画する必要のある[プラグイン](/plugin/)を使用する場合は、このファイルに追記する必要があります。

::: tip 描画のスキップ
DrawOrder で描画順を定義しない場合、処理を実行しながら描画をスキップすることができます。
:::

## 描画順の変更

`DrawOrder.json` ファイルは、このような中身になっています。

```json {24,25}
{
  "songSelect": [
    "Background",
    "AlbumArt",
    "SongItems",
    "InfoPanel",
    "AppBar",
    "SelectDifficulty"
  ],
  "player": [
    "Background",
    "Roll",
    "Balloon",
    "LaneFlash",
    "JudgeCircle",
    "NoteBump",
    "NoteHit",
    "Notes",
    "Cover",
    "JudgeText",
    "Combo",
    "MiniTaiko",
    "Score",
    "NoteFly",
    "GoGoSplash",
    "SongTitle",
    "Escape"
  ],
  "result": [
    "Background",
    "InfoPanel",
    "AlbumArt",
    "ScorePanel",
    "AppBar"
  ]
}
```

再生画面で `GoGoSplash` よりも後に (上に) `NoteFly` を描画したい場合、24 行目と 25 行目を入れ替えることで描画順が変わります。

## プラグインの描画

プラグインが描画を行う場合、このファイルにプラグインの完全名を追記する必要があります。

### 例: SyncLyrics

[サンプルプラグイン](/plugin/samples.html)である [SyncLyrics](/plugin/samples.html#synclyrics) は、歌詞を表示するので DrawOrder で描画順を定義する必要があります。

SyncLyrics の完全名は `Koioto.SamplePlugin.SyncLyrics.SyncLyrics` なので、これを追記します。

```json {19}
"player": [
    "Background",
    "Roll",
    "Balloon",
    "LaneFlash",
    "JudgeCircle",
    "NoteBump",
    "NoteHit",
    "Notes",
    "Cover",
    "JudgeText",
    "Combo",
    "MiniTaiko",
    "Score",
    "NoteFly",
    "GoGoSplash",
    "SongTitle",
    "Escape",
    "Koioto.SamplePlugin.SyncLyrics.SyncLyrics"
  ],
```

この場合、SyncLyrics は再生画面で一番後に (上に) 表示されることになります。

## 各設定項目

### `songSelect`

選曲画面の描画順。

- `Background` 背景
- `AlbumArt` アルバムアート
- `SongItems` 曲
- `InfoPanel` 曲タイトル、BPM などの表示
- `AppBar` 上部のバー

### `player`

再生画面の描画順。

- `Background` 背景
- `Roll` 黄色連打の打数表示
- `Balloon` ふうせん連打の打数表示
- `LaneFlash` レーンの発光エフェクト
- `JudgeCircle` 判定枠
- `NoteBump` 判定枠のエフェクト
- `NoteHit` 音符のヒットエフェクト
- `Notes` 音符
- `Cover` レーンのカバー
- `JudgeText` 判定文字
- `Combo` コンボ表示
- `MiniTaiko` 叩いた面・縁の表示
- `Score` スコア表示
- `NoteFly` 飛んでいく音符
- `GoGoSplash` ゴーゴータイム開始時のエフェクト
- `SongTitle` タイトル
- `Escape` 「\[Esc\] を押して前の画面に戻る」表示

### `result`

リザルト画面の描画順。

- `Background` 背景
- `InfoPanel` 曲タイトル、BPM などの表示
- `AlbumArt` アルバムアート
- `ScorePanel` スコアの表示
- `AppBar` 上部のバー