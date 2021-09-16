# プラグインの制作

自分でプラグインを制作することも可能です。プラグインを制作するには、プログラミング言語である C# の知識が必要になります。

Koioto のプラグインを制作するには、いくつかの DLL を使用する必要があるので、それがまとめられた [Koioto Plugin SDK](https://github.com/Koioto/KoiotoPluginSDK) を使う必要があります。

## 必要な環境

- [Visual Studio](https://visualstudio.microsoft.com/ja/vs/) (2019 以降)
- .NET Framework 4.7.2
- [Koioto Plugin SDK](https://github.com/Koioto/KoiotoPluginSDK)

## 制作の流れ

### 新規プロジェクトを作成して、Koioto Plugin SDK をインポートする

![Visual Studio のプロジェクト作成画面](/images/plugin/create-project.png)

Visual Studio で「クラス ライブラリ (.NET Framework)」プロジェクトを作成します。フレームワークのバージョンを「.NET Framework 4.7.2」に変更しておきます。

![ソリューション エクスプローラー](/images/plugin/solution-explorer.png)

プロジェクトが作成されたら、Koioto Plugin SDK をインポートします。ソリューション エクスプローラーで「参照」を探し、右クリックして「参照の追加...」をクリックします。

![参照マネージャー](/images/plugin/reference-manager.png)

参照マネージャーというウィンドウが表示されるので、「参照」タブの「参照...」ボタンをクリックします。ダウンロードした Koioto Plugin SDK の ``KoiotoSupport.dll``、``KoiotoPlugin.dll``、``Amaoto.dll`` を追加し (譜面読み込みプラグインの場合 ``Amaoto.dll`` は不要です)、「OK」をクリックして確定します。

### プラグインの処理を記述する

![// Hello, Koioto plugging world!](/images/plugin/hello-world.png)

Koioto プラグインと譜面読み込みプラグインではプラグインの処理が異なるため、記述するプログラムも異なります。

- [Koioto プラグインの制作](./making-koioto-plugin.html)
- [譜面読み込みプラグインの制作](./making-chartreader-plugin.html)

### プロジェクトをビルドして、実際に Koioto に読み込ませる

ある程度作り終わり、プラグインを Koioto で動かしたくなったらプロジェクトをビルドします。<kbd>Ctrl+B</kbd> を押すとプロジェクトのビルドが始まり、特定のフォルダにプラグインの .dll ファイルが出力されます。Visual Studio の「出力」タブから出力先を確認することができます。

![プラグインの実行を許可するかどうかのダイアログ](/images/plugin/task-dialog.png)

出力された .dll ファイルを Koioto の ``Plugins\`` フォルダにコピーして、Koioto を起動します。プラグインの実行を許可するかどうか訊かれるので許可をします。

![プラグインの一覧](/images/plugin/plugin-list.png)

情報パネルで確認すると、実際にプラグインが読み込まれていることが分かります。