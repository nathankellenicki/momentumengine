"use strict";

var gulp = require("gulp"),
    path = require("path"),
    gutil = require("gulp-util"),
    webpack = require("webpack");


var build = function (options, callback) {

    let plugins = [];

    if (options.minify) {
        plugins = [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false,
                    semicolons: true
                }
            })
        ];
    }

    webpack({
        entry: path.join(__dirname, "src", "index.js"),
        bail: !options.watch,
        watch: options.watch,
        devtool: "source-map",
        plugins: plugins,
        output: {
            path: path.join(__dirname, "dist"),
            filename: "es5.js"
        },
        module: {
            loaders: [{
                loader: "babel-loader",
                test: /\.js$/,
                include: [
                    path.join(__dirname, "src")
                ],
                query: {
                    plugins: ["transform-runtime"],
                    presets: ["es2015", "stage-0"]
                }
            }]
        }
    }, (error, stats) => {

        if (error) {

            let pluginError = new gutil.PluginError("webpack", error);

            if (callback) {
                callback(pluginError);
            } else {
                gutil.log("[Webpack]", pluginError);
            }

            return;

        }

        gutil.log("[Webpack]", stats.toString());

        if (callback) {
            callback();
        }

    });

};


gulp.task("build-dev", (callback) => {
    build({
        watch: false,
        minify: false
    }, callback);
});


gulp.task("build", (callback) => {
    build({
        watch: false,
        minify: true
    }, callback);
});


gulp.task("watch", () => {
    build({
        watch: true,
        minify: false
    });
});