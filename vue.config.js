module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:' @import "@/assets/style/etc.scss"; @import "@/assets/style/wadapt.scss";'
      }
    }
  }
};
//resources: ['./assets/style/etc.scss', './assets/style/wadapt.scss']