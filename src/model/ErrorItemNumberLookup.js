/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.4.0
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
    define(['ApiClient', 'model/ErrorItemNumberLookupError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorItemNumberLookupError'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorItemNumberLookup = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorItemNumberLookupError);
  }
}(this, function(ApiClient, ErrorItemNumberLookupError) {
  'use strict';



  /**
   * The ErrorItemNumberLookup model module.
   * @module model/ErrorItemNumberLookup
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ErrorItemNumberLookup</code>.
   * A container for Number Lookup API error
   * @alias module:model/ErrorItemNumberLookup
   * @class
   * @param error {module:model/ErrorItemNumberLookupError} 
   */
  var exports = function(error) {
    var _this = this;

    _this['error'] = error;
  };

  /**
   * Constructs a <code>ErrorItemNumberLookup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorItemNumberLookup} obj Optional instance to populate.
   * @return {module:model/ErrorItemNumberLookup} The populated <code>ErrorItemNumberLookup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorItemNumberLookupError.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorItemNumberLookupError} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


