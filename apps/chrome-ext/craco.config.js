const CracoAlias = require("craco-alias");
const { getLoader, loaderByName } = require("@craco/craco");

const path = require("path");

const packages = ["messaging"];
const apps = ["chrome-ext"];

const absolutePaths = [
  ...packages.map((p) => path.join(__dirname, `../../packages/${p}/src`)),
  ...apps.map((p) => path.join(__dirname, `../../apps/${p}/src`)),
];

module.exports = {
  webpack: {
    configure: (config) => {
      const { isFound, match } = getLoader(
        config,
        loaderByName("babel-loader")
      );
      if (isFound) {
        match.loader.include = Array.from(
          new Set(absolutePaths.concat(match.loader.include))
        );
        console.log("included projects:", match.loader.include);
      }
      return config;
    },
  },
  style: {
    postOptions: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss"),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "tsconfig.paths.json",
        debug: false,
      },
    },
  ],
};
