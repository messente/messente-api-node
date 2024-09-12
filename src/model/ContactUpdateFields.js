/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContactUpdateFields model module.
 * @module model/ContactUpdateFields
 * @version 2.1.0
 */
class ContactUpdateFields {
    /**
     * Constructs a new <code>ContactUpdateFields</code>.
     * A container for fields of a contact
     * @alias module:model/ContactUpdateFields
     */
    constructor() { 
        
        ContactUpdateFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactUpdateFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactUpdateFields} obj Optional instance to populate.
     * @return {module:model/ContactUpdateFields} The populated <code>ContactUpdateFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactUpdateFields();

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
     * Validates the JSON data with respect to <code>ContactUpdateFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactUpdateFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['company'] && !(typeof data['company'] === 'string' || data['company'] instanceof String)) {
            throw new Error("Expected the field `company` to be a primitive type in the JSON string but got " + data['company']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['custom'] && !(typeof data['custom'] === 'string' || data['custom'] instanceof String)) {
            throw new Error("Expected the field `custom` to be a primitive type in the JSON string but got " + data['custom']);
        }
        // ensure the json data is a string
        if (data['custom2'] && !(typeof data['custom2'] === 'string' || data['custom2'] instanceof String)) {
            throw new Error("Expected the field `custom2` to be a primitive type in the JSON string but got " + data['custom2']);
        }
        // ensure the json data is a string
        if (data['custom3'] && !(typeof data['custom3'] === 'string' || data['custom3'] instanceof String)) {
            throw new Error("Expected the field `custom3` to be a primitive type in the JSON string but got " + data['custom3']);
        }
        // ensure the json data is a string
        if (data['custom4'] && !(typeof data['custom4'] === 'string' || data['custom4'] instanceof String)) {
            throw new Error("Expected the field `custom4` to be a primitive type in the JSON string but got " + data['custom4']);
        }

        return true;
    }


}



/**
 * The email of the contact
 * @member {String} email
 */
ContactUpdateFields.prototype['email'] = undefined;

/**
 * The first name of the contact
 * @member {String} firstName
 */
ContactUpdateFields.prototype['firstName'] = undefined;

/**
 * The last name of the contact
 * @member {String} lastName
 */
ContactUpdateFields.prototype['lastName'] = undefined;

/**
 * The company of the contact
 * @member {String} company
 */
ContactUpdateFields.prototype['company'] = undefined;

/**
 * The title of the contact
 * @member {String} title
 */
ContactUpdateFields.prototype['title'] = undefined;

/**
 * The first custom field
 * @member {String} custom
 */
ContactUpdateFields.prototype['custom'] = undefined;

/**
 * The second custom field
 * @member {String} custom2
 */
ContactUpdateFields.prototype['custom2'] = undefined;

/**
 * The third custom field
 * @member {String} custom3
 */
ContactUpdateFields.prototype['custom3'] = undefined;

/**
 * The fourth custom field
 * @member {String} custom4
 */
ContactUpdateFields.prototype['custom4'] = undefined;






export default ContactUpdateFields;

