# サンプル プラグイン

Koioto には、初めからいくつかのサンプル プラグインが同梱されています。使用して便利なことはもちろん、これらのプラグインは [GitHub](https://github.com/Koioto) 上でソースコードが公開されているため、プラグイン開発のチュートリアルとしても役立ちます。

## サンプル プラグインのリスト

### MissSound

BAD 判定もしくは MISS 判定のとき音を鳴らすシンプルなプラグインです。

- 完全名: `Koioto.SamplePlugin.MissSound.MissSound`
- ソースコード: [https://github.com/Koioto/MissSound](https://github.com/Koioto/MissSound)
- 制作難易度: 2 / 10

#### 使用するまでの手順

効果音ファイルとプラグインのファイルを `Plugins\` フォルダにコピーして使用します。

### SyncLyrics

同期歌詞ファイル (.lrc) を読み込み、再生画面にて歌詞を表示するプラグインです。表示位置や文字の大きさのカスタマイズが可能になっています。

- 完全名: `Koioto.SamplePlugin.SyncLyrics.SyncLyrics`
- ソースコード: [https://github.com/Koioto/SyncLyrics](https://github.com/Koioto/SyncLyrics)
- 制作難易度: 5 / 10

#### 使用するまでの手順

プラグインと、`LRCDotNet.dll` のファイルを `Plugins\` フォルダにコピーして使用します。画面に表示される必要があるため、[DrawOrder](/theme/draworder.html) の編集が必要です。

音源と同名の同期歌詞ファイル (.lrc) を譜面ファイルと同じフォルダに入れる必要があります。

### OpenTaikoChart

[Open Taiko Chart](https://github.com/AioiLight/Open-Taiko-Chart) 形式の譜面を読み込むプラグインです。現時点では、「Open Taiko Chart Infomation」と「Open Taiko Chart Course」の読み込みに対応しています。

- 完全名: `Koioto.SamplePlugin.OpenTaikoChart.FileReader`
- ソースコード: [https://github.com/Koioto/OpenTaikoChart](https://github.com/Koioto/OpenTaikoChart)
- 制作難易度: 4 / 10

#### 使用するまでの手順

プラグインのファイルを `Plugins\` フォルダにコピーして使用します。