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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorItemNumberLookupError = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ErrorItemNumberLookupError model module.
   * @module model/ErrorItemNumberLookupError
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ErrorItemNumberLookupError</code>.
   * Error fields container
   * @alias module:model/ErrorItemNumberLookupError
   * @class
   * @param description {String} Error description
   * @param code {Number} Matches the following error title.   This field is a constant  * 101 - Unauthorized * 102 - Invalid arguments or parameters * 103 - Server error * 104 - Crediting error #1 * 105 - Crediting error #2 * 106 - Client error
   */
  var exports = function(description, code) {
    var _this = this;

    _this['description'] = description;
    _this['code'] = code;
  };

  /**
   * Constructs a <code>ErrorItemNumberLookupError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorItemNumberLookupError} obj Optional instance to populate.
   * @return {module:model/ErrorItemNumberLookupError} The populated <code>ErrorItemNumberLookupError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Error description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Matches the following error title.   This field is a constant  * 101 - Unauthorized * 102 - Invalid arguments or parameters * 103 - Server error * 104 - Crediting error #1 * 105 - Crediting error #2 * 106 - Client error
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;



  return exports;
}));


