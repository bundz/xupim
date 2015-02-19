var fs = require('fs'),
    config = require('./lib/config'),
    Xupim = require('./lib/xupim');

var xupim = new Xupim(config(fs.readFileSync('./config')));

xupim.start();