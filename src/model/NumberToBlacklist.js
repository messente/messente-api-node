/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber, WhatsApp and Telegram messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.1.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.NumberToBlacklist = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NumberToBlacklist model module.
   * @module model/NumberToBlacklist
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>NumberToBlacklist</code>.
   * A container for a soon-to-be blacklisted number
   * @alias module:model/NumberToBlacklist
   * @class
   * @param phoneNumber {String} Phone number in e.164 format
   */
  var exports = function(phoneNumber) {
    var _this = this;

    _this['phoneNumber'] = phoneNumber;
  };

  /**
   * Constructs a <code>NumberToBlacklist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberToBlacklist} obj Optional instance to populate.
   * @return {module:model/NumberToBlacklist} The populated <code>NumberToBlacklist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number in e.164 format
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


