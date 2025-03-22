const { DateTime } = require("luxon");
const codeHighlighter = require("@sardine/eleventy-plugin-code-highlighter");
const eleventyPluginFilesMinifier = require("@codestitchofficial/eleventy-plugin-minify");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/style.min.css");
  eleventyConfig.addPassthroughCopy("./src/js/*.min.js");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/icon-192x192.png");
  eleventyConfig.addPassthroughCopy("./manifest.json");

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
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/article/post/**/*.md").map((item) => {
      item.data.permalink = `article/post/${item.fileSlug}/index.html`;
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

  // 日付フィルターの設定
  eleventyConfig.addFilter("dateJP", (date, format = "yyyy年MM月dd日") => {
    return DateTime.fromJSDate(new Date(date)).toFormat(format);
  });

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
