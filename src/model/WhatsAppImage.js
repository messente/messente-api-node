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
 * The WhatsAppImage model module.
 * @module model/WhatsAppImage
 * @version 1.0.3
 */
class WhatsAppImage {
    /**
     * Constructs a new <code>WhatsAppImage</code>.
     * An image
     * @alias module:model/WhatsAppImage
     * @param content {String} Base64-encoded image
     */
    constructor(content) { 
        
        WhatsAppImage.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>WhatsAppImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WhatsAppImage} obj Optional instance to populate.
     * @return {module:model/WhatsAppImage} The populated <code>WhatsAppImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhatsAppImage();

            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Description for the image
 * @member {String} caption
 */
WhatsAppImage.prototype['caption'] = undefined;

/**
 * Base64-encoded image
 * @member {String} content
 */
WhatsAppImage.prototype['content'] = undefined;






export default WhatsAppImage;

