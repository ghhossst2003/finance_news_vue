const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
        propList: ['*']
      }
    }
  })