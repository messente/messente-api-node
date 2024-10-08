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
    root.MessenteApi.Telegram = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Telegram model module.
   * @module model/Telegram
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>Telegram</code>.
   * Telegram message content
   * @alias module:model/Telegram
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Telegram</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Telegram} obj Optional instance to populate.
   * @return {module:model/Telegram} The populated <code>Telegram</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('validity')) {
        obj['validity'] = ApiClient.convertToType(data['validity'], 'Number');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('document_url')) {
        obj['document_url'] = ApiClient.convertToType(data['document_url'], 'String');
      }
      if (data.hasOwnProperty('audio_url')) {
        obj['audio_url'] = ApiClient.convertToType(data['audio_url'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      } else {
        obj['channel'] = 'telegram';
      }
    }
    return obj;
  }

  /**
   * Phone number or alphanumeric sender name
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * After how many minutes this channel is considered as failed and the next channel is attempted
   * @member {Number} validity
   */
  exports.prototype['validity'] = undefined;
  /**
   * Plaintext content for Telegram
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * URL for the embedded image. Mutually exclusive with \"document_url\" and \"audio_url\"
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * URL for the embedded image. Mutually exclusive with \"audio_url\" and \"image_url\"
   * @member {String} document_url
   */
  exports.prototype['document_url'] = undefined;
  /**
   * URL for the embedded image. Mutually exclusive with \"document_url\" and \"image_url\"
   * @member {String} audio_url
   */
  exports.prototype['audio_url'] = undefined;
  /**
   * The channel used to deliver the message
   * @member {module:model/Telegram.ChannelEnum} channel
   * @default 'telegram'
   */
  exports.prototype['channel'] = 'telegram';


  /**
   * Allowed values for the <code>channel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChannelEnum = {
    /**
     * value: "telegram"
     * @const
     */
    "telegram": "telegram"  };


  return exports;
}));


