/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
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
    define(['ApiClient', 'model/ErrorItemStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorItemStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorStatistics = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorItemStatistics);
  }
}(this, function(ApiClient, ErrorItemStatistics) {
  'use strict';



  /**
   * The ErrorStatistics model module.
   * @module model/ErrorStatistics
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>ErrorStatistics</code>.
   * A container for errors
   * @alias module:model/ErrorStatistics
   * @class
   * @param errors {Array.<module:model/ErrorItemStatistics>} An array of errors
   */
  var exports = function(errors) {
    var _this = this;

    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>ErrorStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorStatistics} obj Optional instance to populate.
   * @return {module:model/ErrorStatistics} The populated <code>ErrorStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorItemStatistics]);
      }
    }
    return obj;
  }

  /**
   * An array of errors
   * @member {Array.<module:model/ErrorItemStatistics>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


