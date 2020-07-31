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
                lessOptions: {
                    modifyVars: {
                        'button-primary-background-color': '#6887FA',
                        'button-primary-border-color': '#6887FA',
                    },
                },
            },
        },
    },
};
