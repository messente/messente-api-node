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
    define(['ApiClient', 'model/MobileNetwork'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MobileNetwork'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.SyncNumberLookupResult = factory(root.MessenteApi.ApiClient, root.MessenteApi.MobileNetwork);
  }
}(this, function(ApiClient, MobileNetwork) {
  'use strict';



  /**
   * The SyncNumberLookupResult model module.
   * @module model/SyncNumberLookupResult
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>SyncNumberLookupResult</code>.
   * Info about a phone number
   * @alias module:model/SyncNumberLookupResult
   * @class
   * @param _number {String} Phone number in e.164 format
   */
  var exports = function(_number) {
    var _this = this;

    _this['number'] = _number;
  };

  /**
   * Constructs a <code>SyncNumberLookupResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SyncNumberLookupResult} obj Optional instance to populate.
   * @return {module:model/SyncNumberLookupResult} The populated <code>SyncNumberLookupResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('roaming')) {
        obj['roaming'] = ApiClient.convertToType(data['roaming'], 'Boolean');
      }
      if (data.hasOwnProperty('ported')) {
        obj['ported'] = ApiClient.convertToType(data['ported'], 'Boolean');
      }
      if (data.hasOwnProperty('roamingNetwork')) {
        obj['roamingNetwork'] = MobileNetwork.constructFromObject(data['roamingNetwork']);
      }
      if (data.hasOwnProperty('currentNetwork')) {
        obj['currentNetwork'] = MobileNetwork.constructFromObject(data['currentNetwork']);
      }
      if (data.hasOwnProperty('originalNetwork')) {
        obj['originalNetwork'] = MobileNetwork.constructFromObject(data['originalNetwork']);
      }
      if (data.hasOwnProperty('portedNetwork')) {
        obj['portedNetwork'] = MobileNetwork.constructFromObject(data['portedNetwork']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }
    }
    return obj;
  }

  /**
   * Phone number in e.164 format
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Indicates if a number is roaming
   * @member {Boolean} roaming
   */
  exports.prototype['roaming'] = undefined;
  /**
   * Indicates if a number is ported
   * @member {Boolean} ported
   */
  exports.prototype['ported'] = undefined;
  /**
   * @member {module:model/MobileNetwork} roamingNetwork
   */
  exports.prototype['roamingNetwork'] = undefined;
  /**
   * @member {module:model/MobileNetwork} currentNetwork
   */
  exports.prototype['currentNetwork'] = undefined;
  /**
   * @member {module:model/MobileNetwork} originalNetwork
   */
  exports.prototype['originalNetwork'] = undefined;
  /**
   * @member {module:model/MobileNetwork} portedNetwork
   */
  exports.prototype['portedNetwork'] = undefined;
  /**
   * Status of the phone number
   * @member {module:model/SyncNumberLookupResult.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Indicates if any error occurred while handling the request
   * @member {Object} error
   */
  exports.prototype['error'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ON"
     * @const
     */
    "ON": "ON",
    /**
     * value: "OFF"
     * @const
     */
    "OFF": "OFF",
    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


