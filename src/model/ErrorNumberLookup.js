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
import ErrorItemNumberLookup from './ErrorItemNumberLookup';

/**
 * The ErrorNumberLookup model module.
 * @module model/ErrorNumberLookup
 * @version 2.1.0
 */
class ErrorNumberLookup {
    /**
     * Constructs a new <code>ErrorNumberLookup</code>.
     * A container for errors
     * @alias module:model/ErrorNumberLookup
     * @param errors {Array.<module:model/ErrorItemNumberLookup>} An array of errors
     */
    constructor(errors) { 
        
        ErrorNumberLookup.initialize(this, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errors) { 
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>ErrorNumberLookup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorNumberLookup} obj Optional instance to populate.
     * @return {module:model/ErrorNumberLookup} The populated <code>ErrorNumberLookup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorNumberLookup();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorItemNumberLookup]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorNumberLookup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorNumberLookup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ErrorNumberLookup.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                ErrorItemNumberLookup.validateJSON(item);
            };
        }

        return true;
    }


}

ErrorNumberLookup.RequiredProperties = ["errors"];

/**
 * An array of errors
 * @member {Array.<module:model/ErrorItemNumberLookup>} errors
 */
ErrorNumberLookup.prototype['errors'] = undefined;






export default ErrorNumberLookup;

