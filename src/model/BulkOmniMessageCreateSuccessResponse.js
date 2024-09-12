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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.BulkOmniMessageCreateSuccessResponse = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BulkOmniMessageCreateSuccessResponse model module.
   * @module model/BulkOmniMessageCreateSuccessResponse
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>BulkOmniMessageCreateSuccessResponse</code>.
   * Response received after successfully created bulk omnimessage.
   * @alias module:model/BulkOmniMessageCreateSuccessResponse
   * @class
   * @param messages {Array.<Object>} List of responses for each Omnimessage in the bulk. These can be errors or successful responses
   */
  var exports = function(messages) {
    var _this = this;

    _this['messages'] = messages;
  };

  /**
   * Constructs a <code>BulkOmniMessageCreateSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkOmniMessageCreateSuccessResponse} obj Optional instance to populate.
   * @return {module:model/BulkOmniMessageCreateSuccessResponse} The populated <code>BulkOmniMessageCreateSuccessResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [Object]);
      }
    }
    return obj;
  }

  /**
   * List of responses for each Omnimessage in the bulk. These can be errors or successful responses
   * @member {Array.<Object>} messages
   */
  exports.prototype['messages'] = undefined;



  return exports;
}));


