# 曲フォルダ

Windows 上でフォルダを作っただけでは、選曲画面で階層構造 (フォルダ) になりません。

フォルダ内に、`folder.json` というファイルを作ることで、Koioto の選曲画面の「曲フォルダ」を作ることができます。

曲フォルダは、入れ子にすることも可能です。

## `folder.json` の置き方

Windows 上での配置:

- :file_folder: 何曲か入っているフォルダ
  - :file_folder: 曲 A フォルダ
    - :musical_note: 曲 A のファイル 1
    - :memo: 曲 A のファイル 2
    - ...
  - :file_folder: 曲 B フォルダ
    - :musical_note: 曲 B のファイル 1
    - :memo: 曲 B のファイル 2
    - ...
  - :file_folder: 曲 C フォルダ
    - :musical_note: 曲 C のファイル 1
    - :memo: 曲 C のファイル 2
    - ...
  - :memo: `folder.json`

Koioto 上での表示:

- :file_folder: 曲フォルダ (`folder.json` で指定したフォルダ名)
  - :musical_note: 曲 A
  - :musical_note: 曲 B
  - :musical_note: 曲 C

## `folder.json` の書き方

`folder.json` は JSON フォーマットで、UTF-8 で保存する必要があります。

``` json
{
    "name": "Hello, folder world!",
    "description": "This is super duper folder.",
    "albumart": "Folder.png"
}
```

このファイルを Koioto に読み込ませると、こうなります。

<!-- ここに画像 -->

### `name`

フォルダの名前です。選曲画面でタイトルとして使われます。

### `description`

フォルダの説明文です。選曲画面でサブタイトルとして使われます。

### `albumart`

フォルダのアルバムアートです。相対パスで画像ファイルを指定します。`null` を指定、または画像ファイルが存在しない場合は、[テーマ](/theme/)のデフォルトのアルバムアートが表示されます。