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
 * The NumbersToInvestigate model module.
 * @module model/NumbersToInvestigate
 * @version 2.1.0
 */
class NumbersToInvestigate {
    /**
     * Constructs a new <code>NumbersToInvestigate</code>.
     * A container for phone numbers
     * @alias module:model/NumbersToInvestigate
     * @param numbers {Array.<String>} A list of phone numbers. Max 10 numbers per request
     */
    constructor(numbers) { 
        
        NumbersToInvestigate.initialize(this, numbers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, numbers) { 
        obj['numbers'] = numbers;
    }

    /**
     * Constructs a <code>NumbersToInvestigate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NumbersToInvestigate} obj Optional instance to populate.
     * @return {module:model/NumbersToInvestigate} The populated <code>NumbersToInvestigate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NumbersToInvestigate();

            if (data.hasOwnProperty('numbers')) {
                obj['numbers'] = ApiClient.convertToType(data['numbers'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NumbersToInvestigate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NumbersToInvestigate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NumbersToInvestigate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['numbers'])) {
            throw new Error("Expected the field `numbers` to be an array in the JSON data but got " + data['numbers']);
        }

        return true;
    }


}

NumbersToInvestigate.RequiredProperties = ["numbers"];

/**
 * A list of phone numbers. Max 10 numbers per request
 * @member {Array.<String>} numbers
 */
NumbersToInvestigate.prototype['numbers'] = undefined;






export default NumbersToInvestigate;

