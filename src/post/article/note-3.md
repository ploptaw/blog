---
title: css/js圧縮
date: 2025-03-21
layout: "post"
tags: [note, 11ty]
---

## uglifyjs によるサイズ削減

実行コマンド

```bash
npx uglifyjs ./js/script.js -c -m --output ./js/script.min.js
```

## その他の最適化について

eleventy-critical-css を用いることを考えたが，ビルド時間がやけに長くなったのでいったん保留
