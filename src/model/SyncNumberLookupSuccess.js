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
    define(['ApiClient', 'model/SyncNumberLookupResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SyncNumberLookupResult'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.SyncNumberLookupSuccess = factory(root.MessenteApi.ApiClient, root.MessenteApi.SyncNumberLookupResult);
  }
}(this, function(ApiClient, SyncNumberLookupResult) {
  'use strict';



  /**
   * The SyncNumberLookupSuccess model module.
   * @module model/SyncNumberLookupSuccess
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>SyncNumberLookupSuccess</code>.
   * A container for number lookup response
   * @alias module:model/SyncNumberLookupSuccess
   * @class
   * @param request_id {String} ID of the request
   * @param result {Array.<module:model/SyncNumberLookupResult>} A container for phone number info objects
   */
  var exports = function(request_id, result) {
    var _this = this;

    _this['request_id'] = request_id;
    _this['result'] = result;
  };

  /**
   * Constructs a <code>SyncNumberLookupSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SyncNumberLookupSuccess} obj Optional instance to populate.
   * @return {module:model/SyncNumberLookupSuccess} The populated <code>SyncNumberLookupSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('request_id')) {
        obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], [SyncNumberLookupResult]);
      }
    }
    return obj;
  }

  /**
   * ID of the request
   * @member {String} request_id
   */
  exports.prototype['request_id'] = undefined;
  /**
   * A container for phone number info objects
   * @member {Array.<module:model/SyncNumberLookupResult>} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


