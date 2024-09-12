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
    define(['ApiClient', 'model/Channel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Channel'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.MessageResult = factory(root.MessenteApi.ApiClient, root.MessenteApi.Channel);
  }
}(this, function(ApiClient, Channel) {
  'use strict';



  /**
   * The MessageResult model module.
   * @module model/MessageResult
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>MessageResult</code>.
   * A message part of an omnimessage
   * @alias module:model/MessageResult
   * @class
   * @param message_id {String} Unique identifier for the message
   * @param channel {module:model/Channel} 
   * @param sender {String} Sender that was used for the message
   */
  var exports = function(message_id, channel, sender) {
    var _this = this;

    _this['message_id'] = message_id;
    _this['channel'] = channel;
    _this['sender'] = sender;
  };

  /**
   * Constructs a <code>MessageResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageResult} obj Optional instance to populate.
   * @return {module:model/MessageResult} The populated <code>MessageResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = Channel.constructFromObject(data['channel']);
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the message
   * @member {String} message_id
   */
  exports.prototype['message_id'] = undefined;
  /**
   * @member {module:model/Channel} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * Sender that was used for the message
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;



  return exports;
}));


