const cracoAlias = require("craco-alias");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const { getLoader, loaderByName } = require("@craco/craco");

const path = require("path");

const packages = ["messaging", "firebase"];
const apps = ["chrome-ext"];

const absolutePaths = [
  ...packages.map(p => path.join(__dirname, `../../packages/${p}/src`)),
  ...apps.map(p => path.join(__dirname, `../../apps/${p}/src`))
];

module.exports = {
  webpack: {
    configure: config => {
      // Inject monorepo packages
      const { isFound, match } = getLoader(config, loaderByName("babel-loader"));
      if (isFound) {
        match.loader.include = Array.from(new Set(absolutePaths.concat(match.loader.include)));
        console.log("included projects:", match.loader.include);
      }

      // Replace minifier
      const idx = config.optimization.minimizer.findIndex(m => m.constructor.name === "TerserPlugin");
      if (idx > -1) config.optimization.minimizer[idx] = new ESBuildMinifyPlugin({ target: "es2015", css: true });

      return config;
    }
  },
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer"), require("postcss")]
    }
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "tsconfig.paths.json",
        debug: false
      }
    }
  ]
};
