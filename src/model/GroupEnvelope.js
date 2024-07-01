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
import GroupResponseFields from './GroupResponseFields';

/**
 * The GroupEnvelope model module.
 * @module model/GroupEnvelope
 * @version 2.0.0
 */
class GroupEnvelope {
    /**
     * Constructs a new <code>GroupEnvelope</code>.
     * A container for a group
     * @alias module:model/GroupEnvelope
     */
    constructor() { 
        
        GroupEnvelope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupEnvelope} obj Optional instance to populate.
     * @return {module:model/GroupEnvelope} The populated <code>GroupEnvelope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupEnvelope();

            if (data.hasOwnProperty('group')) {
                obj['group'] = GroupResponseFields.constructFromObject(data['group']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupEnvelope</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupEnvelope</code>.
     */
    static validateJSON(data) {
        // validate the optional field `group`
        if (data['group']) { // data not null
          GroupResponseFields.validateJSON(data['group']);
        }

        return true;
    }


}



/**
 * @member {module:model/GroupResponseFields} group
 */
GroupEnvelope.prototype['group'] = undefined;






export default GroupEnvelope;

