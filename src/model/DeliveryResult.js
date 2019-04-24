/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/Channel', 'model/ErrorCodeOmnichannelMachine', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Channel'), require('./ErrorCodeOmnichannelMachine'), require('./Status'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.DeliveryResult = factory(root.MessenteApi.ApiClient, root.MessenteApi.Channel, root.MessenteApi.ErrorCodeOmnichannelMachine, root.MessenteApi.Status);
  }
}(this, function(ApiClient, Channel, ErrorCodeOmnichannelMachine, Status) {
  'use strict';



  /**
   * The DeliveryResult model module.
   * @module model/DeliveryResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeliveryResult</code>.
   * @alias module:model/DeliveryResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DeliveryResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryResult} obj Optional instance to populate.
   * @return {module:model/DeliveryResult} The populated <code>DeliveryResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status')) {
        obj['status'] = Status.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = Channel.constructFromObject(data['channel']);
      }
      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('err')) {
        obj['err'] = ErrorCodeOmnichannelMachine.constructFromObject(data['err']);
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Status} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Channel} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * Unique identifier for the message
   * @member {String} message_id
   */
  exports.prototype['message_id'] = undefined;
  /**
   * Human-readable description of what went wrong, *null* in case of success or if the messages has not been processed yet
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {module:model/ErrorCodeOmnichannelMachine} err
   */
  exports.prototype['err'] = undefined;
  /**
   * When this status was received by Omnichannel API
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


