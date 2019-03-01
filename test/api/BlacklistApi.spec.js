/**
 * Messente API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MessenteApi);
  }
}(this, function(expect, MessenteApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MessenteApi.BlacklistApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BlacklistApi', function() {
    describe('addToBlacklist', function() {
      it('should call addToBlacklist successfully', function(done) {
        //uncomment below and update the code to test addToBlacklist
        //instance.addToBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFromBlacklist', function() {
      it('should call deleteFromBlacklist successfully', function(done) {
        //uncomment below and update the code to test deleteFromBlacklist
        //instance.deleteFromBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchBlacklist', function() {
      it('should call fetchBlacklist successfully', function(done) {
        //uncomment below and update the code to test fetchBlacklist
        //instance.fetchBlacklist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isBlacklisted', function() {
      it('should call isBlacklisted successfully', function(done) {
        //uncomment below and update the code to test isBlacklisted
        //instance.isBlacklisted(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
