/* eslint-disable prettier/prettier */
const Timestamp = new Date().getTime();
module.exports = {
    publicPath: "./",

    outputDir: "./Recycle",

    indexPath: "app.html",

    assetsDir: "./static/",

    filenameHashing: true,

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `static/js/[name].${Timestamp}.js`,
            chunkFilename: `static/js/[name].${Timestamp}.js`
        }
    },
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch')

            }

        }
    },
    productionSourceMap: false,
    // 配置高于chainWebpack中关于 css loader 的配置

    // All options for webpack-dev-server are supported
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: true
        // before: () => {}
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require("os").cpus().length > 1,

    // 第三方插件配置
    pluginOptions: {}
};