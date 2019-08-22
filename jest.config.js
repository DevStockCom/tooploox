module.exports = {
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/*.(test|spec).(ts|tsx)"
  ],
  globals: {
    "ts-jest": {
      diagnostics: false,
      babelConfig: {
        "presets": [
          "next/babel" 
        ]
      },
      exclude: [
        "node_modules",
        "out",
        ".next"
      ],

      tsConfig: {
        "module": "commonjs",
        "target": "esnext",
        "jsx": "react",
        "sourceMap": false,
        "experimentalDecorators": true,
        "removeComments": true,
        "moduleResolution": "node",
        "lib": [
          "es2017",
          "dom"
        ],
        "typeRoots": [
          "node_modules/@types"
        ]
      }
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
  ],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
  }
};