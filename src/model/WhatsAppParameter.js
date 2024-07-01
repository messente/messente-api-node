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
import WhatsAppCurrency from './WhatsAppCurrency';
import WhatsAppDatetime from './WhatsAppDatetime';
import WhatsAppMedia from './WhatsAppMedia';

/**
 * The WhatsAppParameter model module.
 * @module model/WhatsAppParameter
 * @version 2.0.0
 */
class WhatsAppParameter {
    /**
     * Constructs a new <code>WhatsAppParameter</code>.
     * Whatsapp component parameter.
     * @alias module:model/WhatsAppParameter
     * @param type {String} Type of the parameter.
     */
    constructor(type) { 
        
        WhatsAppParameter.initialize(this, type);
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
     * Constructs a <code>WhatsAppParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WhatsAppParameter} obj Optional instance to populate.
     * @return {module:model/WhatsAppParameter} The populated <code>WhatsAppParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhatsAppParameter();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = WhatsAppCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('date_time')) {
                obj['date_time'] = WhatsAppDatetime.constructFromObject(data['date_time']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = WhatsAppMedia.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = WhatsAppMedia.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = WhatsAppMedia.constructFromObject(data['video']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WhatsAppParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WhatsAppParameter</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WhatsAppParameter.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // validate the optional field `currency`
        if (data['currency']) { // data not null
          WhatsAppCurrency.validateJSON(data['currency']);
        }
        // validate the optional field `date_time`
        if (data['date_time']) { // data not null
          WhatsAppDatetime.validateJSON(data['date_time']);
        }
        // validate the optional field `image`
        if (data['image']) { // data not null
          WhatsAppMedia.validateJSON(data['image']);
        }
        // validate the optional field `document`
        if (data['document']) { // data not null
          WhatsAppMedia.validateJSON(data['document']);
        }
        // validate the optional field `video`
        if (data['video']) { // data not null
          WhatsAppMedia.validateJSON(data['video']);
        }

        return true;
    }


}

WhatsAppParameter.RequiredProperties = ["type"];

/**
 * Type of the parameter.
 * @member {String} type
 */
WhatsAppParameter.prototype['type'] = undefined;

/**
 * A text.
 * @member {String} text
 */
WhatsAppParameter.prototype['text'] = undefined;

/**
 * @member {module:model/WhatsAppCurrency} currency
 */
WhatsAppParameter.prototype['currency'] = undefined;

/**
 * @member {module:model/WhatsAppDatetime} date_time
 */
WhatsAppParameter.prototype['date_time'] = undefined;

/**
 * @member {module:model/WhatsAppMedia} image
 */
WhatsAppParameter.prototype['image'] = undefined;

/**
 * @member {module:model/WhatsAppMedia} document
 */
WhatsAppParameter.prototype['document'] = undefined;

/**
 * @member {module:model/WhatsAppMedia} video
 */
WhatsAppParameter.prototype['video'] = undefined;






export default WhatsAppParameter;

