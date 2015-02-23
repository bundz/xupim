var expect = require('chai').expect,
    Options = require('../lib/options');

describe("Options", function () {
  describe("on passing url", function () {

    var url = "http://www.pudim.com.br",
        options;

    before(function () {
      options = Options(url);
    });

    it("should have url attribute as http://www.pudim.com.br", function () {
      expect(options.url).to.equal("http://www.pudim.com.br");
    });

    it("should have method attribute as GET", function () {
      expect(options.method).to.equal("GET");
    });

  });
});
