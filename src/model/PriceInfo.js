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
    root.MessenteApi.PriceInfo = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PriceInfo model module.
   * @module model/PriceInfo
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>PriceInfo</code>.
   * Contains price information for the message. This value is *null* if the message is still being processed
   * @alias module:model/PriceInfo
   * @class
   * @param part_price {String} price per message part - relevant mostly for SMS
   * @param parts_count {Number} the number of parts the message consists of
   * @param total_price {String} total price for the message
   */
  var exports = function(part_price, parts_count, total_price) {
    var _this = this;

    _this['part_price'] = part_price;
    _this['parts_count'] = parts_count;
    _this['total_price'] = total_price;
  };

  /**
   * Constructs a <code>PriceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceInfo} obj Optional instance to populate.
   * @return {module:model/PriceInfo} The populated <code>PriceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('part_price')) {
        obj['part_price'] = ApiClient.convertToType(data['part_price'], 'String');
      }
      if (data.hasOwnProperty('parts_count')) {
        obj['parts_count'] = ApiClient.convertToType(data['parts_count'], 'Number');
      }
      if (data.hasOwnProperty('total_price')) {
        obj['total_price'] = ApiClient.convertToType(data['total_price'], 'String');
      }
    }
    return obj;
  }

  /**
   * price per message part - relevant mostly for SMS
   * @member {String} part_price
   */
  exports.prototype['part_price'] = undefined;
  /**
   * the number of parts the message consists of
   * @member {Number} parts_count
   */
  exports.prototype['parts_count'] = undefined;
  /**
   * total price for the message
   * @member {String} total_price
   */
  exports.prototype['total_price'] = undefined;



  return exports;
}));


