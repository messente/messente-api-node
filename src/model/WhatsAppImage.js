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
    root.MessenteApi.WhatsAppImage = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The WhatsAppImage model module.
   * @module model/WhatsAppImage
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>WhatsAppImage</code>.
   * @alias module:model/WhatsAppImage
   * @class
   * @param content {String} Base64-encoded image
   */
  var exports = function(content) {
    var _this = this;

    _this['content'] = content;
  };

  /**
   * Constructs a <code>WhatsAppImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhatsAppImage} obj Optional instance to populate.
   * @return {module:model/WhatsAppImage} The populated <code>WhatsAppImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * Description for the image
   * @member {String} caption
   */
  exports.prototype['caption'] = undefined;
  /**
   * Base64-encoded image
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


