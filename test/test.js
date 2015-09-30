require('should');
var match = require('../index');

describe('match-like-gulp', function() {
  it('"/a/b/c.js" matches ["/**/*"] return true', function () {
    match('/a/b/c.js', ['/**/*']).should.be.true;
  });
});
