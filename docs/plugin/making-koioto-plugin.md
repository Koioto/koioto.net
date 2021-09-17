# Koioto プラグインの制作

Koioto プラグインであると認識するために、クラスを継承する必要があります。 ``Koioto.Plugin.KoiotoPlugin``を継承します。

例えば SamplePlugin という名前の Koioto プラグインを作成する場合、このように名前空間とクラスを記述します。

```cs
namespace Space.AioiLight.KoiotoPlugin.SamplePlugin
{
    public class SamplePlugin : Koioto.Plugin.KoiotoPlugin
    {
        // ここにプラグインの情報や処理を記述していく
    }
}
```

**名前空間は他のプラグインと衝突を避けるため、必ず被らないように命名してください**。推奨される命名規則としては、個人・組織・団体名を先頭に付けることです。ドメインを所持しているのであればドメイン名を使用することを推奨します (例: ``Com.Example.Plugin.SamplePlugin``)。

``Koioto.Plugin.KoiotoPlugin`` を継承したことにより、処理を記述していくメソッドのオーバーライドができるようになりました。例えば、プラグインが有効化されたときに処理される ``OnEnable()`` や、音符が叩かれたときに処理される ``OnHitNote(Chip)`` などです。

```cs
// プラグインが有効化されたときの処理
public override void OnEnable()
{
    // プラグインのフォルダとプラグイン名を結合してプラグインが使用するフォルダを決定する
    var dir = System.IO.Path.Combine(Bridge.PluginDir, Name);
    // Amaoto.Sound のインスタンスを作成して音を鳴らす準備をする
    Sound = new Amaoto.Sound(System.IO.Path.Combine(dir, @"sound.wav"));
    base.OnEnable();
}
```

ここで、新たに ``Amaoto`` という名前空間が登場しました。Amaoto は、音の再生や画像の表示などを手助けするライブラリです。これを使用することで比較的容易に音声処理、描画処理が行えるようになります。

Amaoto の使い方は[サンプルプラグイン](./samples.html)を参考にすることでよく理解できると思います。

プラグイン制作を助けるために、いくつかのクラスが用意されています。

- ``Amaoto.Animation`` 名前空間。この名前空間にあるクラスは簡易的なアニメーションをサポートします。
- ``Koioto.Support`` 名前空間。``Koioto.Support.Bridge`` クラスでは Koioto のパスや設定の閲覧、システムサウンドの再生等が行えます。

アニメーションを使用する例:

```cs {4}
private void StartAnimation()
{
    // 0 から 100 までを 1 秒かけてイーズアウトする
    Anim = new Amaoto.Animation.EaseOut(0, 100, 1000000);
}

// 曲読み込み中の描画処理
public override void OnSongLoading()
{
    var animeResult = Anim.GetAnimation() ?? 0;

    // 0 から 100 までの値が入った animeResult を使って何かする
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