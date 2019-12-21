const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // @是src的别名
                // data: `
                //     @import "@/assets/css/variable.sass";
                //   `
                prependData: `@import "~@/assets/css/variable.scss";`
            }
        }
    },
    chainWebpack: config => {
        //命名 
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_jmui', __dirname+'src/components/jmui') // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_com', __dirname+'/src/components')
            .set('_conf', resolve('config'))
            .set('_pages', resolve('src/pages'));

        //打包文件带hash
        config.output.filename('[name].[hash].js').end();
        
        //为了补删除换行而加的配置
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                // modify the options...
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });
    },


}


