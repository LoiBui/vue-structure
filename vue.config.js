// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_fonts.scss";
        `
      }
    }
  },

  devServer: {
    watchOptions: {
      clientLogLevel: 'warning'
    }
  }
}
