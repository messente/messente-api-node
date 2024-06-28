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
import DeliveryResult from './DeliveryResult';

/**
 * The DeliveryReportResponse model module.
 * @module model/DeliveryReportResponse
 * @version 2.0.0
 */
class DeliveryReportResponse {
    /**
     * Constructs a new <code>DeliveryReportResponse</code>.
     * A container for successful delivery report response
     * @alias module:model/DeliveryReportResponse
     * @param statuses {Array.<module:model/DeliveryResult>} Contains the delivery reports for each channel, ordered by send order
     * @param to {String} Phone number in e.164 format
     * @param omnimessageId {String} Unique identifier for the omnimessage
     */
    constructor(statuses, to, omnimessageId) { 
        
        DeliveryReportResponse.initialize(this, statuses, to, omnimessageId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, statuses, to, omnimessageId) { 
        obj['statuses'] = statuses;
        obj['to'] = to;
        obj['omnimessage_id'] = omnimessageId;
    }

    /**
     * Constructs a <code>DeliveryReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliveryReportResponse} obj Optional instance to populate.
     * @return {module:model/DeliveryReportResponse} The populated <code>DeliveryReportResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryReportResponse();

            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], [DeliveryResult]);
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('omnimessage_id')) {
                obj['omnimessage_id'] = ApiClient.convertToType(data['omnimessage_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeliveryReportResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeliveryReportResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeliveryReportResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['statuses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statuses'])) {
                throw new Error("Expected the field `statuses` to be an array in the JSON data but got " + data['statuses']);
            }
            // validate the optional field `statuses` (array)
            for (const item of data['statuses']) {
                DeliveryResult.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }
        // ensure the json data is a string
        if (data['omnimessage_id'] && !(typeof data['omnimessage_id'] === 'string' || data['omnimessage_id'] instanceof String)) {
            throw new Error("Expected the field `omnimessage_id` to be a primitive type in the JSON string but got " + data['omnimessage_id']);
        }

        return true;
    }


}

DeliveryReportResponse.RequiredProperties = ["statuses", "to", "omnimessage_id"];

/**
 * Contains the delivery reports for each channel, ordered by send order
 * @member {Array.<module:model/DeliveryResult>} statuses
 */
DeliveryReportResponse.prototype['statuses'] = undefined;

/**
 * Phone number in e.164 format
 * @member {String} to
 */
DeliveryReportResponse.prototype['to'] = undefined;

/**
 * Unique identifier for the omnimessage
 * @member {String} omnimessage_id
 */
DeliveryReportResponse.prototype['omnimessage_id'] = undefined;






export default DeliveryReportResponse;

