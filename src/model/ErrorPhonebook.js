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
    define(['ApiClient', 'model/ErrorItemPhonebook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorItemPhonebook'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorPhonebook = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorItemPhonebook);
  }
}(this, function(ApiClient, ErrorItemPhonebook) {
  'use strict';



  /**
   * The ErrorPhonebook model module.
   * @module model/ErrorPhonebook
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>ErrorPhonebook</code>.
   * A container for errors
   * @alias module:model/ErrorPhonebook
   * @class
   * @param errors {Array.<module:model/ErrorItemPhonebook>} An array of errors
   */
  var exports = function(errors) {
    var _this = this;

    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>ErrorPhonebook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorPhonebook} obj Optional instance to populate.
   * @return {module:model/ErrorPhonebook} The populated <code>ErrorPhonebook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorItemPhonebook]);
      }
    }
    return obj;
  }

  /**
   * An array of errors
   * @member {Array.<module:model/ErrorItemPhonebook>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


