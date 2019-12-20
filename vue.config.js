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
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@jm', resolve('src/components/jmui')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
    },


}


