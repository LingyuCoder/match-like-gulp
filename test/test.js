require('should');
var match = require('../index');

describe('match-like-gulp', function() {
  it('"/a/b/c.js" matches ["/**/*.js"]', function() {
    match('/a/b/c.js', ['/**/*.js']).should.be.true();
  });
  it('"/a/b/c.js" does not match ["/c/**/*.js"]', function() {
    match('/a/b/c.js', ['/c/**/*.js']).should.be.false();
  });
  it('"/a/b/c.js" matches ["/c/**/*.js", "/a/**/*.js"]', function() {
    match('/a/b/c.js', ['/c/**/*.js', '/a/**/*.js']).should.be.true();
  });
  it('"/a/b/c.js" does not match ["/c/**/*.js", "/b/**/*.js"]', function() {
    match('/a/b/c.js', ['/c/**/*.js', '/b/**/*.js']).should.be.false();
  });
  it('"/a/b/c.js" does not match ["/a/**/*.js", "!/a/**/c.js"]', function() {
    match('/a/b/c.js', ['/a/**/*.js', '!/a/**/c.js']).should.be.false();
  });
  it('"/a/b/c.js" does not match ["/c/**/*.js", "!/a/**/*.js"]', function() {
    match('/a/b/c.js', ['/c/**/*.js', '!/a/**/b.js']).should.be.false();
  });
  it('"/a/b/c.js" matches ["/a/**/*.js", "!/b/**/*.js"]', function() {
    match('/a/b/c.js', ['/a/**/*.js', '!/b/**/*.js']).should.be.true();
  });
  it('"/a/b/c.js" does not match ["/a/**/*.js", "!/b/**/*.js", "!/a/b/c.js"]', function() {
    match('/a/b/c.js', ['/a/**/*.js', '!/b/**/*.js', '!/a/b/c.js']).should.be.false();
  });
  it('"/a/b/c.js" matches "/a/b/*.js"', function() {
    match('/a/b/c.js', '/a/b/*.js').should.be.true();
  });
  it('Throw an error when not a string', function() {
    match.bind(null, {}).should.throw('Only string supported');
  });
  it('Throw an error when rule is not an array of string', function() {
    match.bind(null, '/a/b/c.js', [{}, 1]).should.throw('Globs must be an array of strings');
  });
});
