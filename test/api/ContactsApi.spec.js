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
    instance = new MessenteApi.ContactsApi();
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

  describe('ContactsApi', function() {
    describe('addContactToGroup', function() {
      it('should call addContactToGroup successfully', function(done) {
        //uncomment below and update the code to test addContactToGroup
        //instance.addContactToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createContact', function() {
      it('should call createContact successfully', function(done) {
        //uncomment below and update the code to test createContact
        //instance.createContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContact', function() {
      it('should call deleteContact successfully', function(done) {
        //uncomment below and update the code to test deleteContact
        //instance.deleteContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchContact', function() {
      it('should call fetchContact successfully', function(done) {
        //uncomment below and update the code to test fetchContact
        //instance.fetchContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchContactGroups', function() {
      it('should call fetchContactGroups successfully', function(done) {
        //uncomment below and update the code to test fetchContactGroups
        //instance.fetchContactGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchContacts', function() {
      it('should call fetchContacts successfully', function(done) {
        //uncomment below and update the code to test fetchContacts
        //instance.fetchContacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeContactFromGroup', function() {
      it('should call removeContactFromGroup successfully', function(done) {
        //uncomment below and update the code to test removeContactFromGroup
        //instance.removeContactFromGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateContact', function() {
      it('should call updateContact successfully', function(done) {
        //uncomment below and update the code to test updateContact
        //instance.updateContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));