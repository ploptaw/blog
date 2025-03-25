const codeHighlighter = require("@sardine/eleventy-plugin-code-highlighter");
const eleventyPluginFilesMinifier = require("@codestitchofficial/eleventy-plugin-minify");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy({ "./src/public": "/" });
  eleventyConfig.addPassthroughCopy("./src/js/*.min.js");
  eleventyConfig.addPassthroughCopy("./manifest.webmanifest");

  // codeHighlight plugin options
  const PRISM_THEME =
    "https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coy-without-shadows.min.css";
  eleventyConfig.addPlugin(codeHighlighter, { urlTheme: PRISM_THEME });

  // minify plugin options
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  // gallery のコレクション
  eleventyConfig.addCollection("gallery", () =>
    require("./src/gallery/gallery.json")
  );

  // 記事のコレクション
  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/article/article/**/*.md")
      .map((item) => {
        item.data.permalink = `article/article/${item.fileSlug}/index.html`;
        return item;
      })
  );

  // ツールのコレクション
  eleventyConfig.addCollection("tools", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/article/tool/**/*.html")
      .map((item) => {
        item.data.permalink = `article/tool/${item.fileSlug}/index.html`;
        return item;
      })
  );

  // メモのコレクション
  eleventyConfig.addCollection("notes", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/article/note/**/*.md").map((item) => {
      item.data.permalink = `notes/${item.fileSlug}/index.html`;
      return item;
    })
  );

  // タグのコレクション
  eleventyConfig.addCollection("tags", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (Array.isArray(tags)) {
          tags.forEach((tag) => tagSet.add(tag));
        }
      }
    });
    return [...tagSet];
  });

  // 日付フィルターの設定
  eleventyConfig.addFilter(
    "dateJP",
    (target) =>
      `${target.getFullYear()}年${target.getMonth() + 1}月${target.getDate()}日`
  );

  // 日付フィルターの設定 (最小表示)
  eleventyConfig.addFilter(
    "dateMIN",
    (target) => `${target.getYear() - 100}年${target.getMonth() + 1}月`
  );

  return {
    dir: {
      input: "src",
      output: "docs",
    },
    templateFormats: ["md", "njk", "html", "haml"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    hamlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
