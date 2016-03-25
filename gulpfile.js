"use strict";

var gulp = require("gulp"),
    path = require("path"),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    jsdoc = require("gulp-jsdoc3");


let minify = true,
    watch = false,
    examples = [
        "fire",
        "particles",
        "pong",
        "snowflakes"
    ];


process.argv.forEach((arg) => {

    if (arg == "--dev" || arg == "-d") {
        minify = false;
        gutil.log("[Momentum Engine] dev flag passed, enabled");
    }

    if (arg == "--watch" || arg == "-w") {
        watch = true;
        gutil.log("[Momentum Engine] watch flag passed, enabled");
    }

});


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
        entry: options.entry,
        bail: !options.watch,
        watch: options.watch,
        devtool: "source-map",
        plugins: plugins,
        output: {
            path: options.path,
            filename: "[name].js"
        },
        module: {
            loaders: [{
                loader: "babel-loader",
                test: /\.js$/,
                include: [
                    path.join(__dirname, "src"),
                    path.join(__dirname, "examples")
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


examples.forEach((example) => {

    let entry = {};
    entry[example] = path.join(__dirname, "examples", example, `${example}.js`);

    gulp.task(`${example}-example`, (callback) => {

        build({
            entry: entry,
            path: path.join(__dirname, "examples", example, "dist"),
            watch: watch,
            minify: minify
        }, callback);
    });

});


gulp.task("examples", examples.map((example) => { return `${example}-example`; }));


gulp.task("engine", (callback) => {
    build({
        entry: {
            "es5": path.join(__dirname, "src", "es5.js")
        },
        path: path.join(__dirname, "dist"),
        watch: watch,
        minify: minify
    }, callback);
});


gulp.task("docs", (callback) => {
    gulp.src([
        "src/classes/*.js"
    ], {
        read: false
    }).pipe(jsdoc({
        opts: {
            destination: "docs"
        }
    }, callback));
})


gulp.task("build", ["engine", "docs", "examples"]);
gulp.task("default", ["build"]);
