const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");

  // baseUrlの設定
  const isProd = process.env.ELEVENTY_ENV === "production";
  const baseUrl = isProd ? "https://ploptaw.github.io/blog" : "";
  eleventyConfig.addGlobalData("baseUrl", baseUrl);

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
