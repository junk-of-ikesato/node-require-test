var sha256 = require('sha256')

exports.sha256func = function(str) {
  return sha256(str)
}
