/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
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
    root.MessenteApi.WhatsAppText = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The WhatsAppText model module.
   * @module model/WhatsAppText
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>WhatsAppText</code>.
   * @alias module:model/WhatsAppText
   * @class
   * @param body {String} Plaintext content for WhatsApp, can contain URLs, emojis and formatting
   */
  var exports = function(body) {
    var _this = this;

    _this['body'] = body;
  };

  /**
   * Constructs a <code>WhatsAppText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhatsAppText} obj Optional instance to populate.
   * @return {module:model/WhatsAppText} The populated <code>WhatsAppText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('preview_url')) {
        obj['preview_url'] = ApiClient.convertToType(data['preview_url'], 'Boolean');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
    }
    return obj;
  }

  /**
   * Whether to display link preview if the message contains a hyperlink.
   * @member {Boolean} preview_url
   * @default true
   */
  exports.prototype['preview_url'] = true;
  /**
   * Plaintext content for WhatsApp, can contain URLs, emojis and formatting
   * @member {String} body
   */
  exports.prototype['body'] = undefined;



  return exports;
}));


