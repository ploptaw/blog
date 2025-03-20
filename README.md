# 🌟 Blog Project

このリポジトリは、Minecraft 関連のツール、個人ブログ、メモを提供する静的サイトプロジェクトです。

## 📂 プロジェクト構成

### 主なディレクトリ

- **docs/**: ビルド後の静的ファイルが格納されるディレクトリ
- **src/**: ソースコードやテンプレートファイルが格納されるディレクトリ
- **images/**: サイトで使用される画像ファイル
- **js/**: JavaScript ファイル（例: Unicode 変換ツール、抽選ツール）

## 🛠️ 使用技術

- **Eleventy**: 静的サイトジェネレーター
- **Netlify**: デプロイおよびホスティング
- **JavaScript**: フロントエンドのインタラクション

## 🧰 ツール一覧

### Unicode 変換ツール

> 特定の文字列を Unicode に変換、または逆変換するツール

### 抽選ツール

> 任意の数から被りなく抽選を行うツール

## 📜 ライセンス

### コード部分

本リポジトリ内のソースコードは [MIT License](LICENSE) の下で提供されています。

###コンテンツ部分

`images` フォルダ内の画像やその他のコンテンツ（例: ドット絵など）は [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/) の下でライセンスされています。

> [!WARNING]
> このコンテンツは**商用利用および無断加工禁止**です。ご利用の際は、必ず元の作品の**著作権表示**（作者名・出典）を行ってください。ライセンス条件を十分にご確認の上、ご利用ください。

## 🚀 デプロイ方法

1. 必要なパッケージをインストール

```bash
npm install
```

2. ビルドを実行

```bash
npm run build
```

3. `docs/` ディレクトリをデプロイ
