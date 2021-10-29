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
    root.MessenteApi.ErrorTitleOmnichannel = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class ErrorTitleOmnichannel.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Not found"
     * @const
     */
    "Not found": "Not found",
    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden",
    /**
     * value: "Unauthorized"
     * @const
     */
    "Unauthorized": "Unauthorized",
    /**
     * value: "Invalid data"
     * @const
     */
    "Invalid data": "Invalid data",
    /**
     * value: "Internal Server Error"
     * @const
     */
    "Internal Server Error": "Internal Server Error",
    /**
     * value: "Missing data"
     * @const
     */
    "Missing data": "Missing data",
    /**
     * value: "Method not allowed"
     * @const
     */
    "Method not allowed": "Method not allowed"  };

  /**
   * Returns a <code>ErrorTitleOmnichannel</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ErrorTitleOmnichannel} The enum <code>ErrorTitleOmnichannel</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


