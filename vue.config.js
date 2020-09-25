const merge = require('webpack-merge'),
    tsImportPluginFactory = require('ts-import-plugin'),
    path = require('path'),
    theme = path.resolve(__dirname, 'src/styles/theme.less');

console.log(theme);

module.exports = {
    publicPath: '/',
    devServer: {
        open: true,
    },
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints: false,
        },
    },
    productionSourceMap: false,
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import "${theme}";`,
                },
            },
        },
    },
    chainWebpack: config => {
        if (process.env.use_analyzer) {
            config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options = merge(options, {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                style: name => `${name}/style/less`,
                            }),
                        ],
                    }),
                    compilerOptions: {
                        module: 'es2015',
                    },
                });
                return options;
            });
    },
};
