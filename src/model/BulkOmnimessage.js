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
    define(['ApiClient', 'model/Omnimessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Omnimessage'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.BulkOmnimessage = factory(root.MessenteApi.ApiClient, root.MessenteApi.Omnimessage);
  }
}(this, function(ApiClient, Omnimessage) {
  'use strict';



  /**
   * The BulkOmnimessage model module.
   * @module model/BulkOmnimessage
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>BulkOmnimessage</code>.
   * A bulk omnimessage.
   * @alias module:model/BulkOmnimessage
   * @class
   * @param messages {Array.<module:model/Omnimessage>} A list of omnimessages.
   */
  var exports = function(messages) {
    var _this = this;

    _this['messages'] = messages;
  };

  /**
   * Constructs a <code>BulkOmnimessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkOmnimessage} obj Optional instance to populate.
   * @return {module:model/BulkOmnimessage} The populated <code>BulkOmnimessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [Omnimessage]);
      }
    }
    return obj;
  }

  /**
   * A list of omnimessages.
   * @member {Array.<module:model/Omnimessage>} messages
   */
  exports.prototype['messages'] = undefined;



  return exports;
}));


