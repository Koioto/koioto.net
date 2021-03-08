# ログ

Koioto がどのように動作したのか記録されるファイルです。`Logs\` フォルダに格納されています。起動した日時がファイル名になります。

Koioto の不具合報告を行い場合は、このログファイルの提出が必要になることがあります。

ログファイルに、個人を特定できる情報は含まれませんが、以下の情報が含まれます。

- PC のスペック、環境
- 使用した[プラグイン](/plugin/)
- 使用した[テーマ](/theme/)
- ファイルパス
- 再生した曲

## ログの一例

![ログの一例](/images/features/log.png)

## フォーマット

ログファイルは以下のフォーマットになります。

```
[yyyy-mm-dd hh:mm:ss.fff]	[<Type>]	<Content>
```

日付の次に、ログの種類 `<Type>` が入り、その次にログの内容 `<Content>` が入ります。

### `<Type>`

- `Info` ―― 情報
- `Warn` ―― 警告。Koioto の動作に影響のない問題が発生した場合この表記が使われます
- `Error` ―― エラー。Koioto の動作に影響のある問題が発生した場合この表記が使われます

### `<Content>`

ログの内容です。