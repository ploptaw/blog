---
title: CJSからESMへの移行
date: 2025-03-29
layout: "post"
tags: [note, 11ty]
---

## 環境

Eleventy v3.0.0

## 移行の際に変更する部分

**package.json**

- type を module に変更

```diff
-   "type": "commonjs",
+   "type": "module",
```

**.eleventy.js**

- import 文の変更
- export 文の変更
- json 読み込みの変更

```diff
import
- const hoge = require("hoge");
+ import hoge from "hoge";

export
- module.exports = function (eleventyConfig) { ...
+ export default function (eleventyConfig) { ...
```

```js
-  eleventyConfig.addCollection("gallery", () =>
-    require("./src/content/gallery_list/list.json")
-  );

+ import gallery from "./src/content/gallery_list/list.json" with/*or assert)*/ { type: "json" };
+ export default function (eleventyConfig) {
+    eleventyConfig.addCollection("gallery", () => gallery);
```

**各テンプレート言語**

- script に type="module" を記載

```diff
- script src="script.js"
+ script type="module" src="script.js"
```

なお本ブログでは，次の Eleventy メジャーアップデートに合わせ ESM へ移行することを考えている，
