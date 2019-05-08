/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
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
    instance = new MessenteApi.Omnimessage();
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

  describe('Omnimessage', function() {
    it('should create an instance of Omnimessage', function() {
      // uncomment below and update the code to test Omnimessage
      //var instance = new MessenteApi.Omnimessage();
      //expect(instance).to.be.a(MessenteApi.Omnimessage);
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new MessenteApi.Omnimessage();
      //expect(instance).to.be();
    });

    it('should have the property messages (base name: "messages")', function() {
      // uncomment below and update the code to test the property messages
      //var instance = new MessenteApi.Omnimessage();
      //expect(instance).to.be();
    });

    it('should have the property dlrUrl (base name: "dlr_url")', function() {
      // uncomment below and update the code to test the property dlrUrl
      //var instance = new MessenteApi.Omnimessage();
      //expect(instance).to.be();
    });

    it('should have the property textStore (base name: "text_store")', function() {
      // uncomment below and update the code to test the property textStore
      //var instance = new MessenteApi.Omnimessage();
      //expect(instance).to.be();
    });

    it('should have the property timeToSend (base name: "time_to_send")', function() {
      // uncomment below and update the code to test the property timeToSend
      //var instance = new MessenteApi.Omnimessage();
      //expect(instance).to.be();
    });

  });

}));
