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
    instance = new MessenteApi.SMS();
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

  describe('SMS', function() {
    it('should create an instance of SMS', function() {
      // uncomment below and update the code to test SMS
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be.a(MessenteApi.SMS);
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be();
    });

    it('should have the property validity (base name: "validity")', function() {
      // uncomment below and update the code to test the property validity
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be();
    });

    it('should have the property autoconvert (base name: "autoconvert")', function() {
      // uncomment below and update the code to test the property autoconvert
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be();
    });

    it('should have the property udh (base name: "udh")', function() {
      // uncomment below and update the code to test the property udh
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new MessenteApi.SMS();
      //expect(instance).to.be();
    });

  });

}));