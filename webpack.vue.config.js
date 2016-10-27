
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
        filename:'[name].js',   //因为打包多个文件，即将build、abs分别打包，此时fileName:[].js
        // chunkFilename: "chunk/[chunkhash].chunk.js",//
        //library : 'testLibrary',//
        //libraryTarget:"commonjs2"//这两个属性规定了打包的build.js以什么对象名和方式输出；一般2选1
    },
    module:{//定义了对模块的处理逻辑  object
        loaders:[//定义了一系列的加载器 array
            {
                test:/.css$/,//正则
                loaders:['style','css'],//从右向左
                exclude:"/node_modules" //排除的文件夹
            }
        ]
        //noParse:/no-parse.js/,//使用了noParse的模块将不会被loaders解析,即此处的no-parse.js文件太大，并且其中不包含require、define或者类似的关键字的时候(因为这些模块加载并不会被解析，所以就会报错)，我们就可以使用这项配置来提升性能
    },
    devServer:{  //配置服务，但是即使在此处hot和inline设为true命令行里仍旧要写
        hot:true,
        inline:true
    },
    resolve:{
        extensions: ['', '.js','.css', '.jsx'],//自动补全后缀
        // alias:{
        //     moment : 'moment/min/moment-with-locales.min.js'//为模块设置别名，指定一些模块的引用路径,打包的时间被大大缩短
        // }

    },
    //externals:{
    // moment: true
    // },//Webpack 和公用的 CDN 结合，即声明外部依赖,html中<script src="//apps.bdimg.com/libs/moment/2.8.3/moment-with-locales.min.js"></script>

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