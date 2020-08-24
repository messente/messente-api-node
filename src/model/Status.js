/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.3.0
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
    root.MessenteApi.Status = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Status.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ACK"
     * @const
     */
    "ACK": "ACK",
    /**
     * value: "DELIVRD"
     * @const
     */
    "DELIVRD": "DELIVRD",
    /**
     * value: "UNDELIV"
     * @const
     */
    "UNDELIV": "UNDELIV",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",
    /**
     * value: "ACCEPTD"
     * @const
     */
    "ACCEPTD": "ACCEPTD",
    /**
     * value: "REJECTD"
     * @const
     */
    "REJECTD": "REJECTD",
    /**
     * value: "DELETED"
     * @const
     */
    "DELETED": "DELETED",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "NACK"
     * @const
     */
    "NACK": "NACK",
    /**
     * value: "SEEN"
     * @const
     */
    "SEEN": "SEEN"  };

  /**
   * Returns a <code>Status</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Status} The enum <code>Status</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


