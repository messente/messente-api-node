/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.2.0
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
    root.MessenteApi.StatisticsReport = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The StatisticsReport model module.
   * @module model/StatisticsReport
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>StatisticsReport</code>.
   * Report for one country
   * @alias module:model/StatisticsReport
   * @class
   * @param totalMessages {Number} Sum of all messages
   * @param totalPrice {String} Price for all messages
   * @param country {String} Target country of all messages
   */
  var exports = function(totalMessages, totalPrice, country) {
    var _this = this;

    _this['total_messages'] = totalMessages;
    _this['total_price'] = totalPrice;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>StatisticsReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticsReport} obj Optional instance to populate.
   * @return {module:model/StatisticsReport} The populated <code>StatisticsReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('total_messages')) {
        obj['total_messages'] = ApiClient.convertToType(data['total_messages'], 'Number');
      }
      if (data.hasOwnProperty('total_price')) {
        obj['total_price'] = ApiClient.convertToType(data['total_price'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sum of all messages
   * @member {Number} total_messages
   */
  exports.prototype['total_messages'] = undefined;
  /**
   * Price for all messages
   * @member {String} total_price
   */
  exports.prototype['total_price'] = undefined;
  /**
   * Target country of all messages
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


