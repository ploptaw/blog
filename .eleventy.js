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

  // 日付フィルターの設定
  eleventyConfig.addFilter("dateJP", (date) =>
    new Date(date).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  return {
    dir: {
      input: "src",
      output: "docs",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
