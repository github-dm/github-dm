const CracoAlias = require("craco-alias");

module.exports = {
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
