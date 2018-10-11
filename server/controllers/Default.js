'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.api = function api (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.api(body)
    .then(function (response) {
      response.data = JSON.parse(response.data);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
