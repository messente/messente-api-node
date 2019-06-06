/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.1
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
    instance = new MessenteApi.ContactUpdateFields();
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

  describe('ContactUpdateFields', function() {
    it('should create an instance of ContactUpdateFields', function() {
      // uncomment below and update the code to test ContactUpdateFields
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be.a(MessenteApi.ContactUpdateFields);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property custom2 (base name: "custom2")', function() {
      // uncomment below and update the code to test the property custom2
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property custom3 (base name: "custom3")', function() {
      // uncomment below and update the code to test the property custom3
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

    it('should have the property custom4 (base name: "custom4")', function() {
      // uncomment below and update the code to test the property custom4
      //var instance = new MessenteApi.ContactUpdateFields();
      //expect(instance).to.be();
    });

  });

}));
