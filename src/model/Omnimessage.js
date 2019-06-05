/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.1
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
    define(['ApiClient', 'model/TextStore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TextStore'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.Omnimessage = factory(root.MessenteApi.ApiClient, root.MessenteApi.TextStore);
  }
}(this, function(ApiClient, TextStore) {
  'use strict';



  /**
   * The Omnimessage model module.
   * @module model/Omnimessage
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>Omnimessage</code>.
   * An omnimessage
   * @alias module:model/Omnimessage
   * @class
   * @param to {String} Phone number in e.164 format
   * @param messages {Array.<Object>} An array of messages
   */
  var exports = function(to, messages) {
    var _this = this;

    _this['to'] = to;
    _this['messages'] = messages;
  };

  /**
   * Constructs a <code>Omnimessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Omnimessage} obj Optional instance to populate.
   * @return {module:model/Omnimessage} The populated <code>Omnimessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [Object]);
      }
      if (data.hasOwnProperty('dlr_url')) {
        obj['dlr_url'] = ApiClient.convertToType(data['dlr_url'], 'String');
      }
      if (data.hasOwnProperty('text_store')) {
        obj['text_store'] = TextStore.constructFromObject(data['text_store']);
      }
      if (data.hasOwnProperty('time_to_send')) {
        obj['time_to_send'] = ApiClient.convertToType(data['time_to_send'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Phone number in e.164 format
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * An array of messages
   * @member {Array.<Object>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * URL where the delivery report will be sent
   * @member {String} dlr_url
   */
  exports.prototype['dlr_url'] = undefined;
  /**
   * @member {module:model/TextStore} text_store
   */
  exports.prototype['text_store'] = undefined;
  /**
   * Optional parameter for sending messages at some specific time in the future.   Time must be specified in the ISO-8601 format.   If no timezone is specified, then the timezone is assumed to be UTC.    Examples:    * Time specified with timezone: 2018-06-22T09:05:07+00:00 Time specified in UTC: 2018-06-22T09:05:07Z   * Time specified without timezone: 2018-06-22T09:05 (equivalent to 2018-06-22T09:05+00:00)
   * @member {Date} time_to_send
   */
  exports.prototype['time_to_send'] = undefined;



  return exports;
}));


