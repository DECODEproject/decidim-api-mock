'use strict';


/**
 * Retrieves petition data
 *
 * body PetitionRequest Returns a petition data
 * returns PetitionResponse
 **/
exports.api = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "{ \"petition\": { \"id\": 40, \"title\": { \"es\": \"Plan de Actuacion municipal\", \"ca\": \"Pla dActuació Municipal\" }, \"description\": { \"es\": \"Descripcion de peticion\", \"ca\": \"This is an amazing petition that you want to participate in\" }, \"json_schema\": { \"optional\": [ { \"scope\": \"can-access\", \"object\": \"voter\", \"predicate\": \"schema:dateOfBirth\" }, { \"scope\": \"can-access\", \"object\": \"voter\", \"predicate\": \"schema:gender\" }, { \"scope\": \"can-access\", \"object\": \"voter\", \"predicate\": \"schema:district\" } ], \"mandatory\": [ { \"scope\": \"can-access\", \"object\": \"Barcelona\", \"predicate\": \"schema:addressLocality\", \"provenance\": { \"url\": \"http://atlantis-decode.s3-website-eu-west-1.amazonaws.com\" } } ] } } }",
  "error" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

