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
    root.MessenteApi.ErrorCodeOmnichannelMachine = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class ErrorCodeOmnichannelMachine.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2,
    /**
     * value: 3
     * @const
     */
    "3": 3,
    /**
     * value: 4
     * @const
     */
    "4": 4,
    /**
     * value: 5
     * @const
     */
    "5": 5,
    /**
     * value: 6
     * @const
     */
    "6": 6,
    /**
     * value: 7
     * @const
     */
    "7": 7,
    /**
     * value: 8
     * @const
     */
    "8": 8,
    /**
     * value: 9
     * @const
     */
    "9": 9,
    /**
     * value: 10
     * @const
     */
    "10": 10,
    /**
     * value: 999
     * @const
     */
    "999": 999  };

  /**
   * Returns a <code>ErrorCodeOmnichannelMachine</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ErrorCodeOmnichannelMachine} The enum <code>ErrorCodeOmnichannelMachine</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


