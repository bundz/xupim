function getConfig (buffer) {
    
  var file = buffer.toString();
  var splited = file.split('\n').map(function (item) {
      
      return item.split('=');
      
  });
  
  var attributes = getAttributes(splited);
       
  return attributes;
    
}

function getAttributes (splited) {
  
  var attributes = {};
  
  splited.forEach(function (item) {
    
    attributes[item[0]] = item[1];
    
  });
  
  return attributes;
  
}

module.exports = getConfig;