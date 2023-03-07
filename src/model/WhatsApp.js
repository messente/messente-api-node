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
    define(['ApiClient', 'model/WhatsAppAudio', 'model/WhatsAppDocument', 'model/WhatsAppImage', 'model/WhatsAppText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WhatsAppAudio'), require('./WhatsAppDocument'), require('./WhatsAppImage'), require('./WhatsAppText'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.WhatsApp = factory(root.MessenteApi.ApiClient, root.MessenteApi.WhatsAppAudio, root.MessenteApi.WhatsAppDocument, root.MessenteApi.WhatsAppImage, root.MessenteApi.WhatsAppText);
  }
}(this, function(ApiClient, WhatsAppAudio, WhatsAppDocument, WhatsAppImage, WhatsAppText) {
  'use strict';



  /**
   * The WhatsApp model module.
   * @module model/WhatsApp
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>WhatsApp</code>.
   * WhatsApp message content.   Only one of \&quot;text\&quot;, \&quot;image\&quot;, \&quot;document\&quot; or \&quot;audio\&quot; can be provided
   * @alias module:model/WhatsApp
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>WhatsApp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhatsApp} obj Optional instance to populate.
   * @return {module:model/WhatsApp} The populated <code>WhatsApp</code> instance.
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
        obj['text'] = WhatsAppText.constructFromObject(data['text']);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = WhatsAppImage.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = WhatsAppDocument.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('audio')) {
        obj['audio'] = WhatsAppAudio.constructFromObject(data['audio']);
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      } else {
        obj['channel'] = 'whatsapp';
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
   * After how many minutes this channel is   considered as failed and the next channel is attempted
   * @member {Number} validity
   */
  exports.prototype['validity'] = undefined;
  /**
   * After how many seconds this channel is considered as failed and the next channel is attempted.       Only one of \"ttl\" and \"validity\" can be used.
   * @member {Number} ttl
   */
  exports.prototype['ttl'] = undefined;
  /**
   * @member {module:model/WhatsAppText} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/WhatsAppImage} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {module:model/WhatsAppDocument} document
   */
  exports.prototype['document'] = undefined;
  /**
   * @member {module:model/WhatsAppAudio} audio
   */
  exports.prototype['audio'] = undefined;
  /**
   * The channel used to deliver the message
   * @member {module:model/WhatsApp.ChannelEnum} channel
   * @default 'whatsapp'
   */
  exports.prototype['channel'] = 'whatsapp';


  /**
   * Allowed values for the <code>channel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChannelEnum = {
    /**
     * value: "whatsapp"
     * @const
     */
    "whatsapp": "whatsapp"  };


  return exports;
}));


