var fs = require('fs'),
    request = require('axios'),
    options = require('./options');

var Xupim = function (config) {
  this.config = config;
};

Xupim.prototype.start = function () {
  
  var config = this.config;
    
  if (!config.url) {
    throw new Error('No URL specified.');
  }
  
  var dest = '../output/' + removeHttp(config.url);
  
  createFolder(dest);
  
  var getHtml = function (response) {
    
    var html = response.data;
    
    fs.writeFileSync(dest + 'index.html', html);
    
    return html;
    
  };
  
  var getImages = function (html) {
    
    console.log(html);
    
    return;
    
  };
  
  return request(options(config.url))
    .then(getHtml)
    .then(getImages);
};

function createFolder (dest) {
  fs.mkdirSync(dest);
}

function removeHttp (url) {
  
}

module.exports = Xupim;