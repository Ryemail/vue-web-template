module.exports = ({ file }) => {
    let rootValue = 75;
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        rootValue = 37.5;
    }
    return {
        plugins: [
            require('autoprefixer')(),
            require('postcss-pxtorem')({
                rootValue: rootValue,
                propList: ['*'],
                // selectorBlackList: ['van'],
                // minPixelValue: 2
            }),
        ],
    };
};
