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
    root.MessenteApi.ContactResponseFields = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContactResponseFields model module.
   * @module model/ContactResponseFields
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>ContactResponseFields</code>.
   * A container for response fields of a contact
   * @alias module:model/ContactResponseFields
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactResponseFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactResponseFields} obj Optional instance to populate.
   * @return {module:model/ContactResponseFields} The populated <code>ContactResponseFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
      }
      if (data.hasOwnProperty('custom2')) {
        obj['custom2'] = ApiClient.convertToType(data['custom2'], 'String');
      }
      if (data.hasOwnProperty('custom3')) {
        obj['custom3'] = ApiClient.convertToType(data['custom3'], 'String');
      }
      if (data.hasOwnProperty('custom4')) {
        obj['custom4'] = ApiClient.convertToType(data['custom4'], 'String');
      }
      if (data.hasOwnProperty('scheduledDeletionDate')) {
        obj['scheduledDeletionDate'] = ApiClient.convertToType(data['scheduledDeletionDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Phone number in e.164 format
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * The email of the contact
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The first name of the contact
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * The last name of the contact
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The company of the contact
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * The title of the contact
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The first custom field
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * The second custom field
   * @member {String} custom2
   */
  exports.prototype['custom2'] = undefined;
  /**
   * The third custom field
   * @member {String} custom3
   */
  exports.prototype['custom3'] = undefined;
  /**
   * The fourth custom field
   * @member {String} custom4
   */
  exports.prototype['custom4'] = undefined;
  /**
   * The date in ISO 8601 format, YYYY-MM-DD,  on which the contact is going to be deleted  because it has not belonged to a group for 30 days
   * @member {Date} scheduledDeletionDate
   */
  exports.prototype['scheduledDeletionDate'] = undefined;



  return exports;
}));


