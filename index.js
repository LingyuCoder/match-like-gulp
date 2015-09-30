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

function isMatchPositive(str, globs) {
  return globs.reduce(function(rst, glob) {
    return rst || minimatch(str, glob);
  }, false);
}

function isMatchNegative(str, globs) {
  return globs.reduce(function(rst, glob) {
    return rst && minimatch(str, glob);
  }, true);
}

module.exports = function matchGlob(str, globs) {
  if(!isString(str)) throw new Error('Only string supported');
  globs = Array.isArray(globs) ? globs : [globs];
  globs.forEach(function(glob) {
    if(!isString(glob)) throw new Error('Globs must be an array of strings');
  });

  var positives = globs.filter(isPositive);
  var negatives = globs.filter(isNegative);
  if (positives.length === 0) throw new Error('Missing positive glob');
  return isMatchPositive(str, positives) && isMatchNegative(str, negatives);
};
