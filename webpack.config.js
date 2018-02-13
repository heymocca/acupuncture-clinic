/*webpack need an absolute path,
so that it can really find this folder on your computer*/

var path = require('path');

/*moudle.exports*/
module.exports = {
    /*entry for telling webpack which file
    it should begin looking at to create its bundle.*/
    entry: {
        bundle: "./app/assets/scripts/scripts.js",
        vendor: "./app/assets/scripts/vendor.js"
    },
    /*output for telling webpack where the final product
    bundled file should be output to*/
    output: {
        /*the first property is path, which is you want the bundled file to be created
        the second one is the name of the bundled file*/
        path: path.resolve(__dirname, "./app/compile/scripts"),
        filename: "[name].js"
    },
    // babel configration
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets:['es2015']
                },
                test: /\.js$/,
                /* webpack is expecting a regular expression for
                the value of test,this test is to tell babel loader or plugin
                to be applied to javascript files only.
                The fewer files that webpack has to apply,
                the faster conversion process will go right*/
                exclude: /node_modules/
                /*exclude is where tell webpack that not all js files
                in the entire project need to be converted by Babel*/
            }
        ]
    }
}
