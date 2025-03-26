---
title: css/js圧縮
date: 2025-03-21
layout: "post"
tags: [note, 11ty]
---

### uglifyjs によるサイズ削減

```bash
npx uglifyjs ./src/js/lottery.js -c -m --output ./src/js/lottery.min.js
```

### その他の最適化について

eleventy-critical-css を用いることを考えたが，ビルド時間がやけに長くなったのでいったん保留
