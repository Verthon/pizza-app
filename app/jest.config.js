// const { compilerOptions } = require("./tsconfig.json");
// const { pathsToModuleNameMapper } = require("ts-jest/utils");
// const paths = pathsToModuleNameMapper(compilerOptions.paths, {
//   prefix: "<rootDir>",
// });

module.exports = {
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  //   "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  // },
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/tests/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/file-mock.js`,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/tests/loadershim.js`],
  //setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
};
