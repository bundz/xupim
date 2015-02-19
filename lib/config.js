function getConfig(buffer) {
    
    var file = buffer.toString();
    
    var url = getUrl(file);
    
    return {
      url: url  
    };
    
}

function getUrl(file) {
 
    var splited = file.split('=');
    var index = splited.indexOf('url');
    
    return splited[index + 1];
}

module.exports = getConfig;