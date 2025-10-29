const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownFigCaption = require('markdown-it-image-figures');

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const figOptions = {
    figcaption: "alt"
};


const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownFigCaption, figOptions)

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "blog", 
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "Vaida Plankytė",
      subtitle: "Designer in Edinburgh, Scotland",
      base: "https://vaida.me/",
      author: {
        name: "Vaida Plankytė",
      }
    }
  });

  const toISODate = (date) => new Date(date).toISOString().substring(0,10);
  eleventyConfig.addFilter('toISODate', toISODate);

  const toISOYear = (date) => new Date(date).toISOString().substring(0,4);
  eleventyConfig.addFilter('toISOYear', toISOYear);

  eleventyConfig.setLibrary('md', markdownLib)

  return {
    dir: {
      output: 'docs'
    }
  };
}
