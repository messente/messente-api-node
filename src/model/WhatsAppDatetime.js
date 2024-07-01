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
 * The WhatsAppDatetime model module.
 * @module model/WhatsAppDatetime
 * @version 2.0.0
 */
class WhatsAppDatetime {
    /**
     * Constructs a new <code>WhatsAppDatetime</code>.
     * Whatsapp datetime object.
     * @alias module:model/WhatsAppDatetime
     * @param fallbackValue {String} Default text.
     */
    constructor(fallbackValue) { 
        
        WhatsAppDatetime.initialize(this, fallbackValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fallbackValue) { 
        obj['fallback_value'] = fallbackValue;
    }

    /**
     * Constructs a <code>WhatsAppDatetime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WhatsAppDatetime} obj Optional instance to populate.
     * @return {module:model/WhatsAppDatetime} The populated <code>WhatsAppDatetime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhatsAppDatetime();

            if (data.hasOwnProperty('fallback_value')) {
                obj['fallback_value'] = ApiClient.convertToType(data['fallback_value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WhatsAppDatetime</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WhatsAppDatetime</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WhatsAppDatetime.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fallback_value'] && !(typeof data['fallback_value'] === 'string' || data['fallback_value'] instanceof String)) {
            throw new Error("Expected the field `fallback_value` to be a primitive type in the JSON string but got " + data['fallback_value']);
        }

        return true;
    }


}

WhatsAppDatetime.RequiredProperties = ["fallback_value"];

/**
 * Default text.
 * @member {String} fallback_value
 */
WhatsAppDatetime.prototype['fallback_value'] = undefined;






export default WhatsAppDatetime;

