---
title: メモ3
date: 2025-03-21
layout: "post"
---

### uglifyjs によるサイズ削減

```bash
npx uglifyjs ./src/js/lottery.js -c -m --output ./src/js/lottery.min.js
```

### その他の optimize について

eleventy-critical-css を用いることを考えたが，ビルド時間がやけに長くなったのでいったん保留
