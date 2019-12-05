const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 去除console
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip压缩
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : './', // 默认'/'，部署应用包时的基本 URL
    // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    parallel: require('os').cpus().length > 1,
    filenameHashing: true,
    pwa: {},
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        // host: "localhost",
        // port: "8080", // 代理断就
        // https: false,
        // hotOnly: false, // 热更新
        proxy: {
            '/api': {
                target:
                    'https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets', // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
    },
    configureWebpack: (config) => {
        if (IS_PROD) {
            const plugins = [];
            plugins
                .push(
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            warnings: false,
                            compress: {
                                drop_console: true,
                                drop_debugger: false,
                                minify: true,
                                pure_funcs: ['console.log'], // 移除console
                            },
                        },
                        sourceMap: true,
                        parallel: true,
                    }),
                )
                .push(
                    new CompressionWebpackPlugin({
                        filename: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: /\.js$|\.html$|\.css/,
                        threshold: 10240,
                        minRatio: 0.8,
                    }),
                );
            config.plugins = [...config.plugins, ...plugins];
        }
    },
    chainWebpack: (config) => {
        config.output
            .filename(`[name]_[hash:4]_${process.env.VUE_APP_Version}.js`)
            .end();
        // 添加别名
        config.resolve.alias
            .set('@assets', resolve('src/assets'))
            .set('@styles', resolve('src/assets/styles'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@router', resolve('src/router'))
            .set('@static', resolve('src/static'));
        // 打包分析
        if (IS_PROD) {
            config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
                {
                    analyzerMode: 'static',
                },
            ]);
        }
    },
};
