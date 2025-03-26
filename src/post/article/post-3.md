---
title: lightningcssについて
date: 2025-03-21
layout: "post"
tags: [post, 11ty]
---

### 問題点

`lightningcss`を使用していた際に，ヘルプを確認したくなり以下のコマンドを実行した．

```bash
npx lightningcss-cli --help
```

その後，ドキュメントに記載されているスクリプトが動作しなった．

```json
{
  "scripts": {
    "build": "lightningcss --minify --bundle --targets \">= 0.25%\" input.css -o output.css"
  }
}
```

### 解決法

以下の方法で問題を解決した．

1. `lightningcss-cli`のコマンドを直接実行する：

   ```bash
   npx lightningcss-cli --minify --bundle --targets ">= 0.25%" src/style.css -o src/style.min.css
   ```

2. `package.json`のスクリプトに組み込む：
   ```json
   {
     "scripts": {
       "compress": "npx lightningcss-cli --minify --bundle --targets \">= 0.25%, not dead\" src/style.css -o src/style.min.css"
     }
   }
   ```
