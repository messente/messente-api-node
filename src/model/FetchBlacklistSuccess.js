/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.2
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
    root.MessenteApi.FetchBlacklistSuccess = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FetchBlacklistSuccess model module.
   * @module model/FetchBlacklistSuccess
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>FetchBlacklistSuccess</code>.
   * A container for blacklisted numbers
   * @alias module:model/FetchBlacklistSuccess
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FetchBlacklistSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FetchBlacklistSuccess} obj Optional instance to populate.
   * @return {module:model/FetchBlacklistSuccess} The populated <code>FetchBlacklistSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Array of unique phone numbers
   * @member {Array.<String>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;



  return exports;
}));


