/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
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
    instance = new MessenteApi.ErrorItemPhonebook();
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

  describe('ErrorItemPhonebook', function() {
    it('should create an instance of ErrorItemPhonebook', function() {
      // uncomment below and update the code to test ErrorItemPhonebook
      //var instance = new MessenteApi.ErrorItemPhonebook();
      //expect(instance).to.be.a(MessenteApi.ErrorItemPhonebook);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new MessenteApi.ErrorItemPhonebook();
      //expect(instance).to.be();
    });

    it('should have the property detail (base name: "detail")', function() {
      // uncomment below and update the code to test the property detail
      //var instance = new MessenteApi.ErrorItemPhonebook();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new MessenteApi.ErrorItemPhonebook();
      //expect(instance).to.be();
    });

  });

}));
