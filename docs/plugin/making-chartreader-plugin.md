# 譜面読み込みプラグインの制作

譜面読み込みプラグインであると認識するために、インターフェースを実装する必要があります。 ``Koioto.Plugin.IChartReadable``を実装します。

例えば SampleReader という名前の譜面読み込みプラグインを作成する場合、このように名前空間とクラスを記述します。

```cs
namespace Space.AioiLight.KoiotoPlugin.SampleReader
{
    public class SampleReader : Koioto.Plugin.IChartReadable
    {
        // ここにプラグインの情報や処理を記述していく
    }
}
```

``Koioto.Plugin.IChartReadable`` はインターフェースのため、定義されているすべてのメソッド、プロパティを実装する必要があります。上記のように記述すると、``Koioto.Plugin.IChartReadable`` にエラーの波線が引かれ、クイック アクションとリファクタリングから実装すべきコードの補完が行えます。

実際にファイルを読み込む処理はフォーマットによって異なります。サンプルプラグインである[OpenTaikoChart](./samples.html#opentaikochart) を参考にしてください。