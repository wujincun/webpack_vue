
/**
 * Created by wujincun on 2016/10/27.
 */
/*var webpack = require("webpack");
//var ExtractTextPlugin = require("extract-text-webpack-plugin");//提出css文件
var htmlWebpackPlugin=require("html-webpack-plugin");//生成html插件,也可以加hash值，版本控制
var path = require("path");//path内置模块不需安装
module.exports = {
    /!* entry: {
     app: [
     'webpack-dev-server/client?http://localhost:8080/',
     './app/index.js'
     ]
     },*!/

    entry:{//打包的入口文件，可以是string或object
        build:'./src/main', //打包成的文件名称为build.js,如果不写或者路径中没有./时，会默认生成index.js
        //vendor: ["jquery", "underscore", ...],
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
      /!*  loaders:[//定义了一系列的加载器 array
            {
                test:/.css$/,//正则
                loaders:['style','css'],//从右向左
                exclude:"/node_modules" //排除的文件夹
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            },
            /!*{
                test: require.resolve('jquery'),//在 AMD/CMD 中，我们需要对不符合规范的模块（比如一些直接返回全局变量的插件）进行 shim 处理，这时候我们需要使用 exports-loader 来帮忙
                //之后在脚本中需要引用该模块的时候，这么简单地来使用就可以了：require('./tool/swipe.js');swipe();
                loader: 'expose?jQuery'
            }//输出jQuery到全局*!/
        ]*!/
        //noParse:/no-parse.js/,//使用了noParse的模块将不会被loaders解析,即此处的no-parse.js文件太大，并且其中不包含require、define或者类似的关键字的时候(因为这些模块加载并不会被解析，所以就会报错)，我们就可以使用这项配置来提升性能
        loaders: [
            // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
            // 转化ES6的语法
            { 
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/ 
            },
            // 编译css并自动添加css前缀
            { test: /\.css$/, loaders:['style','css','postcss']},
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            /!*{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},*!/
            // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
   
    devServer:{  //配置服务，但是即使在此处hot和inline设为true命令行里仍旧要写
        hot:true,
        inline:true
    },

    resolve:{
        extensions: ['', '.js','.css', '.jsx','.vue'],//自动补全后缀
        // alias:{
        //     moment : 'moment/min/moment-with-locales.min.js'//为模块设置别名，指定一些模块的引用路径,打包的时间被大大缩短
        // }
        alias: {
            vue : path.join(__dirname,'/node_modules/vue/dist/vue'),
            'vue$': '/node_modules/vue/dist/vue.js'//此时是vue2.0，为了渲染模板
        }

    },
    //externals:{
        // moment: true//externals对象的key是给require时用的，比如require('react')，对象的value表示的是如何在global（即window）中访问到该对象，这里是window.React。
    // },//Webpack 和公用的 CDN 结合，即声明外部依赖,html中<script src="//apps.bdimg.com/libs/moment/2.8.3/moment-with-locales.min.js"></script>
    devtool: 'eval-source-map',//直接定位bug
    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎",
            filename:"main.html",//生成的html文件名称，如果不写，则默认为index.html
            chunks:["build"],//html中引入的js模块
            //template: "./build_vue",//path.resolve('index.html'),//模板路径
            //inject: 'body'
        }),
     /!*   new htmlWebpackPlugin({
            title:"欢迎",
            filename:"class.html",//生成的html文件名称，如果不写，则默认为index.html
            chunks:["abs"]
        }
        //new webpack.optimize.CommonsChunkPlugin(/!* chunkName= *!///"vendor", /!* filename= *!/"vendor.bundle.js"),//提取出公共文件vendor---》vendor.bundle.js
        //new webpack.optimize.CommonsChunkPlugin("common.js"),//抽取多入口文件的js公共部分
        //new ExtractTextPlugin("[name].css"),//css文件提取出来
       // neExtractTextPlugin("style.css", { allChunks: true }),//css合并到一个文件
       /!* new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"), //如果包含chunk文件，并且chunk文件中也引入了样式文件，样式文件不会嵌入到js中，而是直接输出到style.css
        new //ExtractTextPlugin("[name].css")*!/
    ]
};*/
var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    px2rem = require('postcss-px2rem');

var config = {
    entry: [
        'webpack/hot/dev-server',
        path.join(__dirname, 'src', 'main')
    ],
    output: {
        publicPath: '/dist/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader!postcss-loader'
            },
            { 
                test: /\.scss$/, 
                loader: 'style-loader!css-loader!sass-loader!postcss-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        /*loaders: {
            css: ExtractTextPlugin.extract("vue-style!css"),
            less: ExtractTextPlugin.extract("vue-style!css!less-loader")
        },*/
        postcss: [require('autoprefixer')({ browsers: ['last 2 versions'] }),require('postcss-px2rem')({remUnit: 64})]
    },
    postcss() {
        return [autoprefixer({ browsers: ['last 2 versions'] }),px2rem({remUnit: 75})];  //貌似有了vue这个没用
    },
    resolve: {
        /**
         * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本
         */
        alias: {
            vue: 'vue/dist/vue.js'/*vue2.0必须的*/
        },
        extensions: ['', '.js', '.vue']
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        hot: true,
        inline: true
    }
/*    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎",
            filename:"main.html",//生成的html文件名称，如果不写，则默认为index.html
            chunks:["main"],//html中引入的js模块,不是生成的名字
            //template: "./build_vue",//path.resolve('index.html'),//模板路径
            //inject: 'body'
        })
   ]*/
};

module.exports = config;