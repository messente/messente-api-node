/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 2.0.0
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
    define(['ApiClient', 'model/ContactResponseFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactResponseFields'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ContactListEnvelope = factory(root.MessenteApi.ApiClient, root.MessenteApi.ContactResponseFields);
  }
}(this, function(ApiClient, ContactResponseFields) {
  'use strict';



  /**
   * The ContactListEnvelope model module.
   * @module model/ContactListEnvelope
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>ContactListEnvelope</code>.
   * A container for contacts
   * @alias module:model/ContactListEnvelope
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactListEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactListEnvelope} obj Optional instance to populate.
   * @return {module:model/ContactListEnvelope} The populated <code>ContactListEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], [ContactResponseFields]);
      }
    }
    return obj;
  }

  /**
   * An array of contacts
   * @member {Array.<module:model/ContactResponseFields>} contacts
   */
  exports.prototype['contacts'] = undefined;



  return exports;
}));


