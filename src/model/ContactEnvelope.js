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
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ContactFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactFields'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ContactEnvelope = factory(root.MessenteApi.ApiClient, root.MessenteApi.ContactFields);
  }
}(this, function(ApiClient, ContactFields) {
  'use strict';



  /**
   * The ContactEnvelope model module.
   * @module model/ContactEnvelope
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ContactEnvelope</code>.
   * @alias module:model/ContactEnvelope
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactEnvelope} obj Optional instance to populate.
   * @return {module:model/ContactEnvelope} The populated <code>ContactEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ContactFields.constructFromObject(data['contact']);
      } 
    }
    return obj;
  }

  /**
   * @member {module:model/ContactFields} contact
   */
  exports.prototype['contact'] = undefined;



  return exports;
}));


