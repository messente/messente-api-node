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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.GroupResponseFields = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GroupResponseFields model module.
   * @module model/GroupResponseFields
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GroupResponseFields</code>.
   * @alias module:model/GroupResponseFields
   * @class
   * @param id {String} Id string in uuid format
   * @param name {String} 
   * @param contactsCount {Number} 
   */
  var exports = function(id, name, contactsCount) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['contactsCount'] = contactsCount;
  };

  /**
   * Constructs a <code>GroupResponseFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupResponseFields} obj Optional instance to populate.
   * @return {module:model/GroupResponseFields} The populated <code>GroupResponseFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
      }
      if (data.hasOwnProperty('contactsCount')) {
        obj['contactsCount'] = ApiClient.convertToType(data['contactsCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Id string in uuid format
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * format %Y-%m-%dT%H:%M:%S.%fZ
   * @member {String} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * @member {Number} contactsCount
   */
  exports.prototype['contactsCount'] = undefined;



  return exports;
}));

