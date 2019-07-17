/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.2
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class TextStore.
* @enum {}
* @readonly
*/
export default class TextStore {
    
        /**
         * value: "nostore"
         * @const
         */
        "nostore" = "nostore";

    
        /**
         * value: "plaintext"
         * @const
         */
        "plaintext" = "plaintext";

    
        /**
         * value: "sha256"
         * @const
         */
        "sha256" = "sha256";

    

    /**
    * Returns a <code>TextStore</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TextStore} The enum <code>TextStore</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

