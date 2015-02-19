var Xupim = function (config) {
  this.url = config.url;
};

Xupim.prototype.start = function () {
  console.log(this.url); 
};

module.exports = Xupim;