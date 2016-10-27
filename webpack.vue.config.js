
/**
 * Created by wujincun on 2016/10/27.
 */
var htmlWebpackPlugin=require("html-webpack-plugin");
var path = require("path");//path内置模块不需安装
module.exports = {
    /* entry: {
     app: [
     'webpack-dev-server/client?http://localhost:8080/',
     './app/index.js'
     ]
     },*/

    entry:{//打包的入口文件，可以是string或object
        build:'./vue/index' //打包成的文件名称为build.js,如果不写或者路径中没有./时，会默认生成index.js
    },
    output:{//配置打包结果，是一个对象 object
        path:'./build_vue',
        //publicPath: "http://cdn.example.com/assets/[hash]/",//publicPath指定了你在浏览器中用什么地址来引用你的静态文件，它会包括你的图片、脚本以及样式加载的地址，一般用于线上发布以及CDN部署的时候使用。
        filename:'[name].js'   //因为打包多个文件，即将build、abs分别打包，此时fileName:[].js
    },
    module:{//定义了对模块的处理逻辑  object
        loaders:[//定义了一系列的加载器 array
            {
                test:/.css$/,//正则
                loaders:['style','css'],//从右向左
                exclude:"/node_modules" //排除的文件夹
            }
        ]
    },
    devServer:{  //配置服务，但是即使在此处hot和inline设为true命令行里仍旧要写
        hot:true,
        inline:true
    },
    resolve:{
        extensions: ['', '.js','.css', '.jsx']//自动补全后缀
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎",
            chunks:["build"]//html中引入的js模块
        })
     /*   new htmlWebpackPlugin({
            title:"欢迎",
            filename:"class.html",//生成的html文件名称，如果不写，则默认为index.html
            chunks:["abs"]
        }),*/
    ]
}