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
  
  var dest = './output/' + removeHttp(config.url);
  
  createFolder(dest);
  
  var getHtml = function (response) {
    
    var html = response.data;
    
    fs.writeFileSync(dest + '/index.html', html);
    
    return html;
    
  };
  
  var getImages = function (html) {
    
    var imagesDest = dest + '/images';
    
    createFolder(imagesDest);
    
    return html;
    
  };
  
  var getByTemplate = function (html) {
    
    console.log(html);
    
  };
  
  return request(options(config.url))
    .then(getHtml)
    .then(getImages)
    .then(getByTemplate);
};

function createFolder (dest) {
  
  if(!fs.existsSync(dest)) {
    
    fs.mkdirSync(dest);
    
  }
  
}

function removeHttp (url) {
  
  if(url.indexOf('http://') !== -1) {
    
    return url.replace('http://', '');
    
  }
  
  if(url.indexOf('https://') !== -1) {
    
    return url.replace('https://', '');
    
  }
  
  return url;
}

module.exports = Xupim;