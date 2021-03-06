# プラグイン

Koioto では、プラグインを導入することで、Koioto の動作や見た目を変えることができます。

::: warning プラグインの危険性
現在プラグインは Koioto が扱うファイル以外のファイルや、インターネットへのアクセスなどもできるようになっています。そのためプラグインは信頼できる制作者が作ったものや、プラグインのソースコードが公開されているもののみ使用することをおすすめします。

たとえば、このサイトからダウンロードできるプラグインは[GitHub](https://github.com/Koioto)でソースコードが閲覧・ダウンロードできます。
:::

::: tip プラグインの制作について
プラグインの使用は誰でも簡単にできますが、プラグインを制作しようとなるとプログラミングの知識(C#)が必要になります。
:::

## プラグインの配置場所

プラグインは Koioto の``Plugin``フォルダに配置されます。例えば、Sample-Pluginという名前のプラグインの場合、``Plugins\Sample-Plugin.dll``がプラグインのファイルとなります。

プラグインは複数同時に使用することができます。

## プラグインの種類

プラグインは、大きく分けて2つの種類があります。

- ``Koioto.Plugin.Overlay``。ここでは、オーバーレイプラグインと呼びます。
- ``Koioto.Plugin.FileReader``。ここでは、ファイル読み込みプラグインと呼びます。

オーバーレイプラグインは、Koioto にさらに画像や文字を重ね合わせることができるものです。音を鳴らすことも可能です。画面の見た目を変えたい場合、こちらのプラグインを制作します。

ファイル読み込みプラグインは、Koioto で読み込めるファイルのフォーマット(拡張子)を増やすことができるものです。

## オーバーレイプラグイン

### 仕様

オーバーレイプラグインは Koioto の決まったタイミングで呼ばれます。タイミングは大まかに分類すると2つに分かれます。

- 常時実行。演奏画面、タイトル画面など特定のシーンを表示している場合に処理される。
- イベント。音符を叩いた、スコアが変化した、などの条件を伴って処理される。

どちらも Koioto 内部の処理が終わった後に実行されます。イベントの場合、メソッドの引数からそのイベントでどのようなことが起こったか情報を得ることができるものもあります。

オーバーレイプラグインを実装するには、``Koioto.Plugin.Overlay``を継承したクラスが必要です。必要に応じて、各メソッドをオーバーライドする必要があります。

オーバーレイプラグインのサンプルが、GitHubにあります([MissSound](https://github.com/Koioto)/[SyncLyric](https://github.com/Koioto)/[VisualJudge](https://github.com/Koioto))。

## ファイル読み込みプラグイン

### 仕様

ファイル読み込みプラグインは Koioto で読み込みるファイルのフォーマット(拡張子)を増やすことができます。ファイル読み込み機能を実装するために、いくつかの機能が必要になります:

- 何の拡張子を読み込めるか。(e.g. ``.tci``、``.tcm``、``.tja``、``.osu``)
- ファイル名を受け取ったら、演奏画面で表示するために必要な情報を Koioto に返す。
- ファイル名を受け取ったら、どのような譜面の配置なのかを Koioto に返す。

ファイル読み込みプラグインを実装するには、``Koioto.Plugin.IFileReadable``を実装したクラスが必要です。``IFileReadable``はインターフェースなので、全てのメソッドについて実装する必要があります。

ファイル読み込みプラグインのサンプルが、GitHubにあります([Open Taiko Chart Reader](https://github.com/Koioto))。

## プラグインの制作

自分でプラグインを制作することも可能です。プラグインを制作するには、プログラミング言語である C# の知識が必要になりますが、自分が思うように機能を追加できます。

Koioto のプラグインを制作するには、いくつかの DLL を使用する必要があるので、それがまとめられた [Koioto Plugin SDK](https://github.com/Koioto/KoiotoPluginSDK) を使う必要があります。

### 必要な環境

- Visual Studio (2019以降)
- .NET Framework 4.7.2
- Koioto Plugin SDK

### 制作の流れ

1. 新規プロジェクトを作成して、Koioto Plugin SDK をインポートする
2. プラグインの処理を記述する
3. プロジェクトをビルドして、実際に Koioto に読み込ませる

### プラグインに必要な実装

Koioto がプラグインであると認識するために、クラスを継承する必要があります。

オーバーレイプラグインの場合``Koioto.Plugin.Overlay``、ファイル読み込みプラグインの場合``Koioto.Plugin.IFileReadable``を継承します。

例えば、MissSoundという名前のオーバーレイプラグインを作成する場合、このように名前空間とクラスを記述します。

```cs
namespace AioiLight.KoiotoPlugin.MissSound
{
    public class MissSound : Koioto.Plugin.Overlay
    {
        // ここにプラグインの情報や処理を記述していく
    }
}
```

**名前空間は他のプラグインと衝突を避けるため、必ず被らないように命名してください**。推奨される命名規則としては、個人、組織、団体名を先頭に付けることです。

``Koioto.Plugin.Overlay``を継承したことにより、処理を記述していくメソッドのオーバーライドができるようになりました。例えば、プラグインが有効化されたときに処理される``OnEnable()``や、音符が叩かれたときに処理される``OnHitNote(Chip)``などです。

```cs
// プラグインが有効化されたときの処理
public override void OnEnable()
{
    // プラグインのフォルダとプラグイン名を結合してプラグインが使用するフォルダを決定する
    var dir = System.IO.Path.Combine(Bridge.PluginDir, Name);
    // Amaoto.Soundのインスタンスを作成して音を鳴らす準備をする
    Sound = new Amaoto.Sound(System.IO.Path.Combine(dir, @"miss-sound.wav"));
    base.OnEnable();
}
```

ここで、新たに``Amaoto``という名前空間が登場しました。Amaotoは、音の再生や画像の表示などを手助けするライブラリです。これを使用することで比較的容易に音声処理、描画処理が行えるようになります。

Amaoto の使い方はサンプルプラグインを参考にすることでよく理解できると思います。

### もっとプラグイン

プラグイン制作を助けるために、いくつかのクラスが用意されています。

- ``Amaoto.Animation``名前空間。この名前空間にあるクラスは簡易的なアニメーションをサポートします。
- ``Koioto.Support``名前空間。``Koioto.Support.Bridge``クラスでは Koioto のパスや設定の閲覧、システムサウンドの再生等が行えます。

アニメーションを使用する例:

```cs {4}
private void StartAnimation()
{
    // 0から100までを1秒かけてイーズアウトする
    Anim = new Amaoto.Animation.EaseOut(0, 100, 1000000);
}

// 曲読み込み中の描画処理
public override void OnSongLoading()
{
    var animeResult = Anim.GetAnimation() ?? 0;

    // 0から100までの値が入った animeResultを使って何かする
    // do something
}

private Amaoto.Animation.EaseOut Anim;
```

設定を読み取る例:

```cs
// プラグインが有効化されたときの処理
public override void OnEnable()
{
    // player にプレイ人数が格納される
    var player = Koioto.Support.Bridge.Settings.Player;
    
    if (player > 1)
    {
        // player が 2 以上だったら何かする
        // do something
    }

    base.OnEnable();
}
```