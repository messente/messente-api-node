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
    define(['ApiClient', 'model/ViberVideo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ViberVideo'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.Viber = factory(root.MessenteApi.ApiClient, root.MessenteApi.ViberVideo);
  }
}(this, function(ApiClient, ViberVideo) {
  'use strict';



  /**
   * The Viber model module.
   * @module model/Viber
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>Viber</code>.
   * Viber message content
   * @alias module:model/Viber
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Viber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Viber} obj Optional instance to populate.
   * @return {module:model/Viber} The populated <code>Viber</code> instance.
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
      if (data.hasOwnProperty('ttl')) {
        obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('image_url')) {
        obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('button_url')) {
        obj['button_url'] = ApiClient.convertToType(data['button_url'], 'String');
      }
      if (data.hasOwnProperty('button_text')) {
        obj['button_text'] = ApiClient.convertToType(data['button_text'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      } else {
        obj['channel'] = 'viber';
      }
      if (data.hasOwnProperty('video')) {
        obj['video'] = ViberVideo.constructFromObject(data['video']);
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
   * After how many minutes this channel is considered as failed and the next channel is attempted.       Only one of \"ttl\" and \"validity\" can be used.
   * @member {Number} validity
   */
  exports.prototype['validity'] = undefined;
  /**
   * After how many seconds this channel is considered as failed and the next channel is attempted.       Only one of \"ttl\" and \"validity\" can be used.
   * @member {Number} ttl
   */
  exports.prototype['ttl'] = undefined;
  /**
   * Plaintext content for Viber
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * URL for the embedded image    Valid combinations:    1) image_url,    2) text, image_url, button_url, button_text
   * @member {String} image_url
   */
  exports.prototype['image_url'] = undefined;
  /**
   * URL of the button, must be specified along with ''text'', ''button_text'' and ''image_url'' (optional)
   * @member {String} button_url
   */
  exports.prototype['button_url'] = undefined;
  /**
   * Must be specified along with ''text'', ''button_url'', ''button_text'', ''image_url'' (optional)
   * @member {String} button_text
   */
  exports.prototype['button_text'] = undefined;
  /**
   * The channel used to deliver the message
   * @member {module:model/Viber.ChannelEnum} channel
   * @default 'viber'
   */
  exports.prototype['channel'] = 'viber';
  /**
   * @member {module:model/ViberVideo} video
   */
  exports.prototype['video'] = undefined;


  /**
   * Allowed values for the <code>channel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChannelEnum = {
    /**
     * value: "viber"
     * @const
     */
    "viber": "viber"  };


  return exports;
}));


