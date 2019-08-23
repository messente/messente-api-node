/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber, WhatsApp and Telegram messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.1.0
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
    define(['ApiClient', 'model/MessageResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageResult'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.OmniMessageCreateSuccessResponse = factory(root.MessenteApi.ApiClient, root.MessenteApi.MessageResult);
  }
}(this, function(ApiClient, MessageResult) {
  'use strict';



  /**
   * The OmniMessageCreateSuccessResponse model module.
   * @module model/OmniMessageCreateSuccessResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>OmniMessageCreateSuccessResponse</code>.
   * A container for a response received after successfully created omnimessage
   * @alias module:model/OmniMessageCreateSuccessResponse
   * @class
   * @param messages {Array.<module:model/MessageResult>} List of messages that compose the omnimessage
   * @param to {String} Phone number in e.164 format
   * @param omnimessageId {String} Unique identifier for the omnimessage
   */
  var exports = function(messages, to, omnimessageId) {
    var _this = this;

    _this['messages'] = messages;
    _this['to'] = to;
    _this['omnimessage_id'] = omnimessageId;
  };

  /**
   * Constructs a <code>OmniMessageCreateSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OmniMessageCreateSuccessResponse} obj Optional instance to populate.
   * @return {module:model/OmniMessageCreateSuccessResponse} The populated <code>OmniMessageCreateSuccessResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [MessageResult]);
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('omnimessage_id')) {
        obj['omnimessage_id'] = ApiClient.convertToType(data['omnimessage_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of messages that compose the omnimessage
   * @member {Array.<module:model/MessageResult>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * Phone number in e.164 format
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Unique identifier for the omnimessage
   * @member {String} omnimessage_id
   */
  exports.prototype['omnimessage_id'] = undefined;



  return exports;
}));


