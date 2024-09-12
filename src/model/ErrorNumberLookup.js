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
    define(['ApiClient', 'model/ErrorItemNumberLookup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorItemNumberLookup'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorNumberLookup = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorItemNumberLookup);
  }
}(this, function(ApiClient, ErrorItemNumberLookup) {
  'use strict';



  /**
   * The ErrorNumberLookup model module.
   * @module model/ErrorNumberLookup
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>ErrorNumberLookup</code>.
   * A container for errors
   * @alias module:model/ErrorNumberLookup
   * @class
   * @param errors {Array.<module:model/ErrorItemNumberLookup>} An array of errors
   */
  var exports = function(errors) {
    var _this = this;

    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>ErrorNumberLookup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorNumberLookup} obj Optional instance to populate.
   * @return {module:model/ErrorNumberLookup} The populated <code>ErrorNumberLookup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorItemNumberLookup]);
      }
    }
    return obj;
  }

  /**
   * An array of errors
   * @member {Array.<module:model/ErrorItemNumberLookup>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


