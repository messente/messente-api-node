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
import ContactResponseFields from './ContactResponseFields';

/**
 * The ContactEnvelope model module.
 * @module model/ContactEnvelope
 * @version 2.0.0
 */
class ContactEnvelope {
    /**
     * Constructs a new <code>ContactEnvelope</code>.
     * A container for a contact
     * @alias module:model/ContactEnvelope
     */
    constructor() { 
        
        ContactEnvelope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactEnvelope} obj Optional instance to populate.
     * @return {module:model/ContactEnvelope} The populated <code>ContactEnvelope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactEnvelope();

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ContactResponseFields.constructFromObject(data['contact']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactEnvelope</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactEnvelope</code>.
     */
    static validateJSON(data) {
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          ContactResponseFields.validateJSON(data['contact']);
        }

        return true;
    }


}



/**
 * @member {module:model/ContactResponseFields} contact
 */
ContactEnvelope.prototype['contact'] = undefined;






export default ContactEnvelope;

