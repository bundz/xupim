var fs = require('fs'),
    config = require('../lib/config'),
    expect = require('chai').expect;

describe("Config", function () {
  describe("on receiving a file with options,", function () {

    var options, buffer;

    before(function () {
      buffer = fs.readFileSync('./specs/data/example.config');
      options = config(buffer);
    });

    it("should have 4 options", function () {
      var length = getOptionsLength(options);
      expect(length).to.equal(4);
    });

    it("should have a value for each option", function () {
      var option;

      for (option in options) {
        expect(option).to.be.a('string');
      }
    });

  });
  describe("on receiving an empty file,", function () {

    var options, buffer;

    before(function () {
      buffer = fs.readFileSync('./specs/data/empty.config');
      options = config(buffer);
    });

    it("shouldn't have any attribute", function () {
      var length = getOptionsLength(options);
      expect(length).to.equal(0);
    });

  });
});

function getOptionsLength(object) {
  var property,
      count = 0;

  for (property in object) {

    if (object.hasOwnProperty(property)) {
      count++;
    }

  }

  return count;
}
