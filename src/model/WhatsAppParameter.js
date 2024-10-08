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
    define(['ApiClient', 'model/WhatsAppCurrency', 'model/WhatsAppDatetime', 'model/WhatsAppMedia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WhatsAppCurrency'), require('./WhatsAppDatetime'), require('./WhatsAppMedia'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.WhatsAppParameter = factory(root.MessenteApi.ApiClient, root.MessenteApi.WhatsAppCurrency, root.MessenteApi.WhatsAppDatetime, root.MessenteApi.WhatsAppMedia);
  }
}(this, function(ApiClient, WhatsAppCurrency, WhatsAppDatetime, WhatsAppMedia) {
  'use strict';



  /**
   * The WhatsAppParameter model module.
   * @module model/WhatsAppParameter
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>WhatsAppParameter</code>.
   * Whatsapp component parameter.
   * @alias module:model/WhatsAppParameter
   * @class
   * @param type {String} Type of the parameter.
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;
  };

  /**
   * Constructs a <code>WhatsAppParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhatsAppParameter} obj Optional instance to populate.
   * @return {module:model/WhatsAppParameter} The populated <code>WhatsAppParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = WhatsAppCurrency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('date_time')) {
        obj['date_time'] = WhatsAppDatetime.constructFromObject(data['date_time']);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = WhatsAppMedia.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = WhatsAppMedia.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('video')) {
        obj['video'] = WhatsAppMedia.constructFromObject(data['video']);
      }
    }
    return obj;
  }

  /**
   * Type of the parameter.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A text.
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/WhatsAppCurrency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/WhatsAppDatetime} date_time
   */
  exports.prototype['date_time'] = undefined;
  /**
   * @member {module:model/WhatsAppMedia} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {module:model/WhatsAppMedia} document
   */
  exports.prototype['document'] = undefined;
  /**
   * @member {module:model/WhatsAppMedia} video
   */
  exports.prototype['video'] = undefined;



  return exports;
}));


