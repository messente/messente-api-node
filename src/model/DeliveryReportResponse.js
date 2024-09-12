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
    define(['ApiClient', 'model/DeliveryResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeliveryResult'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.DeliveryReportResponse = factory(root.MessenteApi.ApiClient, root.MessenteApi.DeliveryResult);
  }
}(this, function(ApiClient, DeliveryResult) {
  'use strict';



  /**
   * The DeliveryReportResponse model module.
   * @module model/DeliveryReportResponse
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>DeliveryReportResponse</code>.
   * A container for successful delivery report response
   * @alias module:model/DeliveryReportResponse
   * @class
   * @param statuses {Array.<module:model/DeliveryResult>} Contains the delivery reports for each channel, ordered by send order
   * @param to {String} Phone number in e.164 format
   * @param omnimessage_id {String} Unique identifier for the omnimessage
   */
  var exports = function(statuses, to, omnimessage_id) {
    var _this = this;

    _this['statuses'] = statuses;
    _this['to'] = to;
    _this['omnimessage_id'] = omnimessage_id;
  };

  /**
   * Constructs a <code>DeliveryReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryReportResponse} obj Optional instance to populate.
   * @return {module:model/DeliveryReportResponse} The populated <code>DeliveryReportResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('statuses')) {
        obj['statuses'] = ApiClient.convertToType(data['statuses'], [DeliveryResult]);
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
   * Contains the delivery reports for each channel, ordered by send order
   * @member {Array.<module:model/DeliveryResult>} statuses
   */
  exports.prototype['statuses'] = undefined;
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


