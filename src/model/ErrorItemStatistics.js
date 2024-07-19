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
    define(['ApiClient', 'model/ErrorCodeStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorCodeStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorItemStatistics = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorCodeStatistics);
  }
}(this, function(ApiClient, ErrorCodeStatistics) {
  'use strict';



  /**
   * The ErrorItemStatistics model module.
   * @module model/ErrorItemStatistics
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>ErrorItemStatistics</code>.
   * Error fields container
   * @alias module:model/ErrorItemStatistics
   * @class
   * @param title {String} Error title
   * @param details {String} Error details
   * @param code {module:model/ErrorCodeStatistics} 
   */
  var exports = function(title, details, code) {
    var _this = this;

    _this['title'] = title;
    _this['details'] = details;
    _this['code'] = code;
  };

  /**
   * Constructs a <code>ErrorItemStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorItemStatistics} obj Optional instance to populate.
   * @return {module:model/ErrorItemStatistics} The populated <code>ErrorItemStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ErrorCodeStatistics.constructFromObject(data['code']);
      }
    }
    return obj;
  }

  /**
   * Error title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Error details
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {module:model/ErrorCodeStatistics} code
   */
  exports.prototype['code'] = undefined;



  return exports;
}));


