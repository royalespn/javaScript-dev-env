//require babel to transpile before our tests run
require('babel-register')();

//diable webpack features that Mocha does not understand
require.extensions['.css']  =function() {};
