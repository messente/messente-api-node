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
import WhatsAppParameter from './WhatsAppParameter';

/**
 * The WhatsAppComponent model module.
 * @module model/WhatsAppComponent
 * @version 2.0.0
 */
class WhatsAppComponent {
    /**
     * Constructs a new <code>WhatsAppComponent</code>.
     * Whatsapp template component
     * @alias module:model/WhatsAppComponent
     * @param type {String} Type of the component
     */
    constructor(type) { 
        
        WhatsAppComponent.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>WhatsAppComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WhatsAppComponent} obj Optional instance to populate.
     * @return {module:model/WhatsAppComponent} The populated <code>WhatsAppComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhatsAppComponent();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sub_type')) {
                obj['sub_type'] = ApiClient.convertToType(data['sub_type'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [WhatsAppParameter]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WhatsAppComponent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WhatsAppComponent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WhatsAppComponent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['sub_type'] && !(typeof data['sub_type'] === 'string' || data['sub_type'] instanceof String)) {
            throw new Error("Expected the field `sub_type` to be a primitive type in the JSON string but got " + data['sub_type']);
        }
        if (data['parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameters'])) {
                throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
            }
            // validate the optional field `parameters` (array)
            for (const item of data['parameters']) {
                WhatsAppParameter.validateJSON(item);
            };
        }

        return true;
    }


}

WhatsAppComponent.RequiredProperties = ["type"];

/**
 * Type of the component
 * @member {String} type
 */
WhatsAppComponent.prototype['type'] = undefined;

/**
 * Sub-type of the component
 * @member {String} sub_type
 */
WhatsAppComponent.prototype['sub_type'] = undefined;

/**
 * index used to position buttons
 * @member {Number} index
 */
WhatsAppComponent.prototype['index'] = undefined;

/**
 * List of parameters for the component
 * @member {Array.<module:model/WhatsAppParameter>} parameters
 */
WhatsAppComponent.prototype['parameters'] = undefined;






export default WhatsAppComponent;

