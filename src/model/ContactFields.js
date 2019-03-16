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
    root.MessenteApi.ContactFields = factory(root.MessenteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContactFields model module.
   * @module model/ContactFields
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ContactFields</code>.
   * @alias module:model/ContactFields
   * @class
   * @param phoneNumber {String} Phone number in e.164 format
   */
  var exports = function(phoneNumber) {
    var _this = this;

    _this['phoneNumber'] = phoneNumber;
  };

  /**
   * Constructs a <code>ContactFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactFields} obj Optional instance to populate.
   * @return {module:model/ContactFields} The populated <code>ContactFields</code> instance.
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
    }
    return obj;
  }

  /**
   * Phone number in e.164 format
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * @member {String} custom2
   */
  exports.prototype['custom2'] = undefined;
  /**
   * @member {String} custom3
   */
  exports.prototype['custom3'] = undefined;
  /**
   * @member {String} custom4
   */
  exports.prototype['custom4'] = undefined;



  return exports;
}));


