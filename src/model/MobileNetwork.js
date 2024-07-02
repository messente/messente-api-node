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
 * The MobileNetwork model module.
 * @module model/MobileNetwork
 * @version 2.0.0
 */
class MobileNetwork {
    /**
     * Constructs a new <code>MobileNetwork</code>.
     * Info about the network related to the phone number
     * @alias module:model/MobileNetwork
     */
    constructor() { 
        
        MobileNetwork.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MobileNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MobileNetwork} obj Optional instance to populate.
     * @return {module:model/MobileNetwork} The populated <code>MobileNetwork</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MobileNetwork();

            if (data.hasOwnProperty('mccmnc')) {
                obj['mccmnc'] = ApiClient.convertToType(data['mccmnc'], 'String');
            }
            if (data.hasOwnProperty('networkName')) {
                obj['networkName'] = ApiClient.convertToType(data['networkName'], 'String');
            }
            if (data.hasOwnProperty('countryName')) {
                obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
            }
            if (data.hasOwnProperty('countryPrefix')) {
                obj['countryPrefix'] = ApiClient.convertToType(data['countryPrefix'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MobileNetwork</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MobileNetwork</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['mccmnc'] && !(typeof data['mccmnc'] === 'string' || data['mccmnc'] instanceof String)) {
            throw new Error("Expected the field `mccmnc` to be a primitive type in the JSON string but got " + data['mccmnc']);
        }
        // ensure the json data is a string
        if (data['networkName'] && !(typeof data['networkName'] === 'string' || data['networkName'] instanceof String)) {
            throw new Error("Expected the field `networkName` to be a primitive type in the JSON string but got " + data['networkName']);
        }
        // ensure the json data is a string
        if (data['countryName'] && !(typeof data['countryName'] === 'string' || data['countryName'] instanceof String)) {
            throw new Error("Expected the field `countryName` to be a primitive type in the JSON string but got " + data['countryName']);
        }
        // ensure the json data is a string
        if (data['countryPrefix'] && !(typeof data['countryPrefix'] === 'string' || data['countryPrefix'] instanceof String)) {
            throw new Error("Expected the field `countryPrefix` to be a primitive type in the JSON string but got " + data['countryPrefix']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }

        return true;
    }


}



/**
 * Mobile country and mobile network code
 * @member {String} mccmnc
 */
MobileNetwork.prototype['mccmnc'] = undefined;

/**
 * Mobile network name
 * @member {String} networkName
 */
MobileNetwork.prototype['networkName'] = undefined;

/**
 * Country name
 * @member {String} countryName
 */
MobileNetwork.prototype['countryName'] = undefined;

/**
 * Country prefix
 * @member {String} countryPrefix
 */
MobileNetwork.prototype['countryPrefix'] = undefined;

/**
 * Country code
 * @member {String} countryCode
 */
MobileNetwork.prototype['countryCode'] = undefined;






export default MobileNetwork;

