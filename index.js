var minimatch = require('minimatch');

function isString(str) {
  return typeof str === 'string';
}

function isNegative(pattern) {
  return pattern[0] === '!';
}

function isPositive(pattern) {
  return !isNegative(pattern);
}

module.exports = function matchGlob(str, globs) {
  if (!isString(str)) throw new Error('Only string supported');
  globs = Array.isArray(globs) ? globs : [globs];
  globs.forEach(function(glob) {
    if (!isString(glob)) throw new Error('Globs must be an array of strings');
  });
  return globs.filter(isPositive).reduce(function(rst, glob) {
    return rst || minimatch(str, glob);
  }, false) && globs.filter(isNegative).reduce(function(rst, glob) {
    return rst && minimatch(str, glob);
  }, true);
};
