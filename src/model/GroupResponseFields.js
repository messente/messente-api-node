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
    root.MessenteApi.GroupResponseFields = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GroupResponseFields model module.
   * @module model/GroupResponseFields
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>GroupResponseFields</code>.
   * A container for fields of a group
   * @alias module:model/GroupResponseFields
   * @class
   * @param id {String} Id string in UUID format
   * @param name {String} The name of the group
   * @param contacts_count {Number} The count of contacts in the group
   */
  var exports = function(id, name, contacts_count) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['contactsCount'] = contacts_count;
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
   * Id string in UUID format
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the group
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * When the group was created
   * @member {String} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * The count of contacts in the group
   * @member {Number} contactsCount
   */
  exports.prototype['contactsCount'] = undefined;



  return exports;
}));


