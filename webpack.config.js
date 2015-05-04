'use strict';

var webpack = require('webpack');

module.exports = {
    //output: {
    //    library: 'IdleMaps',
    //    libraryTarget: 'umd'
    //},
    //externals: [
    //    {
    //        'react': {
    //            root: 'React',
    //            commonjs2: 'react',
    //            commonjs: 'react',
    //            amd: 'react'
    //        }
    //    }
    //],
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader'}
        ]
    }
};
