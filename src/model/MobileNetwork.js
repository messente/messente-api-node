/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.4.0
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
    root.MessenteApi.MobileNetwork = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MobileNetwork model module.
   * @module model/MobileNetwork
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>MobileNetwork</code>.
   * Info about the network related to the phone number
   * @alias module:model/MobileNetwork
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MobileNetwork</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MobileNetwork} obj Optional instance to populate.
   * @return {module:model/MobileNetwork} The populated <code>MobileNetwork</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mccmnc')) {
        obj['mccmnc'] = ApiClient.convertToType(data['mccmnc'], 'String');
      }
      if (data.hasOwnProperty('networkName')) {
        obj['networkName'] = ApiClient.convertToType(data['networkName'], 'String');
      }
      if (data.hasOwnProperty('countryName')) {
        obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
      }
      if (data.hasOwnProperty('countryPrefix')) {
        obj['countryPrefix'] = ApiClient.convertToType(data['countryPrefix'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Mobile country and mobile network code
   * @member {String} mccmnc
   */
  exports.prototype['mccmnc'] = undefined;
  /**
   * Mobile network name
   * @member {String} networkName
   */
  exports.prototype['networkName'] = undefined;
  /**
   * Country name
   * @member {String} countryName
   */
  exports.prototype['countryName'] = undefined;
  /**
   * Country prefix
   * @member {String} countryPrefix
   */
  exports.prototype['countryPrefix'] = undefined;
  /**
   * Country code
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;



  return exports;
}));


