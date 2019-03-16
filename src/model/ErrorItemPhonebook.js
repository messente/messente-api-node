/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorCodePhonebook', 'model/ErrorTitlePhonebook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorCodePhonebook'), require('./ErrorTitlePhonebook'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ErrorItemPhonebook = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorCodePhonebook, root.MessenteApi.ErrorTitlePhonebook);
  }
}(this, function(ApiClient, ErrorCodePhonebook, ErrorTitlePhonebook) {
  'use strict';



  /**
   * The ErrorItemPhonebook model module.
   * @module model/ErrorItemPhonebook
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ErrorItemPhonebook</code>.
   * @alias module:model/ErrorItemPhonebook
   * @class
   * @param title {module:model/ErrorTitlePhonebook} 
   * @param detail {String} Free form more detailed description of the error.
   * @param code {module:model/ErrorCodePhonebook} 
   */
  var exports = function(title, detail, code) {
    var _this = this;

    _this['title'] = title;
    _this['detail'] = detail;
    _this['code'] = code;
  };

  /**
   * Constructs a <code>ErrorItemPhonebook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorItemPhonebook} obj Optional instance to populate.
   * @return {module:model/ErrorItemPhonebook} The populated <code>ErrorItemPhonebook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title')) {
        obj['title'] = ErrorTitlePhonebook.constructFromObject(data['title']);
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ErrorCodePhonebook.constructFromObject(data['code']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorTitlePhonebook} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Free form more detailed description of the error.
   * @member {String} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * @member {module:model/ErrorCodePhonebook} code
   */
  exports.prototype['code'] = undefined;



  return exports;
}));

