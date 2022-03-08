const path=require('path');
const HTMLWebpaclPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            '@assets':path.resolve(__dirname,'src/assets'),
            '@components':path.resolve(__dirname,'src/components'),
            '@containers':path.resolve(__dirname,'src/containers'),
            '@context':path.resolve(__dirname,'src/context'),
            '@hooks':path.resolve(__dirname,'src/hooks'),
            '@pages':path.resolve(__dirname,'src/pages'),
            '@routes':path.resolve(__dirname,'src/routes'),
            '@styles':path.resolve(__dirname,'src/styles'),
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:[/node_modules/],
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test:/\.(css)$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(jpg|svg|png|gif)$/,
                type:'asset'
            }
        ]
    },
    plugins:[
        new HTMLWebpaclPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer:{
        static:{
            directory: path.join(__dirname,'dist'),
        },
        port:3005,
        compress:true,
        historyApiFallback:true
    }
}