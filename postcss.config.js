import autoprefixer from "autoprefixer";
import importCSS from "postcss-import";
import postcssNesting from "postcss-nesting";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";
import cssnanoPlugin from "cssnano";

const config = {
  map: { inline: false },
  plugins: [
    importCSS,
    postcssNesting({
      noIsPseudoSelector: true,
    }),
    autoprefixer({
      overrideBrowserslist: ["last 25 versions"],
    }),
    purgeCSSPlugin.default({
      content: ["./dist/index.html"],
      css: ["./src/css/main.css"],
      safelist: [
        "burger-btn--open-close",
        "navigation-side__side-bar--active",
        "active",
      ],
    }),
    cssnanoPlugin({ preset: "default" }),
  ],
};

export default config;
