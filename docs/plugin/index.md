# プラグイン

Koioto では、プラグインを導入することで、Koioto の動作や見た目を変えることができます。[ダウンロード](/download/)したファイルにプラグインは入っていませんが、そのページから Koioto 本体と同様にサンプルプラグインをダウンロードすることができます。

::: warning プラグインの危険性
現在プラグインは Koioto が扱うファイル以外のファイルや、インターネットへのアクセスなどもできるようになっています。そのためプラグインは信頼できる制作者が作ったものや、プラグインのソースコードが公開されているもののみ使用することをおすすめします。

たとえば、このサイトからダウンロードできるプラグインは[GitHub](https://github.com/Koioto)でソースコードが閲覧・ダウンロードできます。
:::

::: tip プラグインの制作について
プラグインの使用は誰でも簡単にできますが、プラグインを制作しようとなるとプログラミングの知識(C#)が必要になります。
:::

## プラグインの配置場所

プラグインは Koioto の``Plugin``フォルダに配置されます。例えば、Sample-Pluginという名前のプラグインの場合、``Plugin\Sample-Plugin.dll``がプラグインのファイルとなります。

プラグインは複数同時に使用することができます。

## プラグインの仕様

プラグインは Koioto の決まったタイミングで呼ばれます。タイミングは大まかに分類すると2つに分かれます。

- 常時実行。演奏画面、タイトル画面など特定のシーンを表示している場合に処理される。
- イベント。音符を叩いた、スコアが変化した、などの条件を伴って処理される。

どちらも Koioto 内部の処理が終わった後に実行されます。イベントの場合、メソッドの引数からそのイベントでどのようなことが起こったか情報を得ることができるものもあります。

## プラグインの使用法

プラグインは[#プラグインの配置場所]で説明したように、プラグインのフォルダに配置するだけで自動的に Koioto が読み込んで使用します。

一時的にプラグインの使用をやめたいときは、[Settings.json](/config/)で使わないプラグインを指定して除外することができます。

## プラグインの制作法

自分でプラグインを制作することも可能です。プラグインを制作するには、プログラミング言語である C# の知識が必要になりますが、自分が思うように機能を追加できます。

Koioto のプラグインを制作するには、いくつかの DLL を使用する必要があるので、それがまとめられた [Koioto Plugin SDK](https://github.com/Koioto) を使う必要があります。

### 必要な環境

- Visual Studio (2019以降)
- .NET Framework 4.7.2
- Koioto Plugin SDK

### 制作の流れ

1. 新規プロジェクトを作成して、Koioto Plugin SDK をインポートする
2. プラグインの処理を記述する
3. プロジェクトをビルドして、実際に Koioto に読み込ませる

### プラグインに必要な実装

Koioto がプラグインであると認識するために、``Koioto.Plugin.PluginBase``を継承する必要があります。例えば、MissSoundという名前のプラグインを作成する場合、このように名前空間とクラスを記述します。

```cs
namespace AioiLight.KoiotoPlugin.MissSound
{
    public class MissSound : Koioto.Plugin.Base
    {
        // ここにプラグインの情報や処理を記述していく
    }
}
```

**名前空間は他のプラグインと衝突を避けるため、必ず被らないように命名してください**。推奨される命名規則としては、個人、組織、団体名を先頭に付けることです。

``KoiotoPlugin.PluginBase``を継承したことにより、処理を記述していくメソッドのオーバーライドができるようになりました。例えば、プラグインが有効化されたときに処理される``OnEnable()``や、音符が叩かれたときに処理される``OnHitNote(Chip)``などです。

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