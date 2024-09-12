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
import SMS from './SMS';
import Telegram from './Telegram';
import Viber from './Viber';
import ViberVideo from './ViberVideo';
import WhatsApp from './WhatsApp';
import WhatsAppTemplate from './WhatsAppTemplate';

/**
 * The OmnimessageMessagesInner model module.
 * @module model/OmnimessageMessagesInner
 * @version 2.1.0
 */
class OmnimessageMessagesInner {
    /**
     * Constructs a new <code>OmnimessageMessagesInner</code>.
     * @alias module:model/OmnimessageMessagesInner
     * @param {(module:model/SMS|module:model/Telegram|module:model/Viber|module:model/WhatsApp)} instance The actual instance to initialize OmnimessageMessagesInner.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "Viber") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Viber.validateJSON(instance); // throw an exception if no match
                // create Viber from JS object
                this.actualInstance = Viber.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Viber
            errorMessages.push("Failed to construct Viber: " + err)
        }

        try {
            if (typeof instance === "SMS") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                SMS.validateJSON(instance); // throw an exception if no match
                // create SMS from JS object
                this.actualInstance = SMS.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SMS
            errorMessages.push("Failed to construct SMS: " + err)
        }

        try {
            if (typeof instance === "WhatsApp") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WhatsApp.validateJSON(instance); // throw an exception if no match
                // create WhatsApp from JS object
                this.actualInstance = WhatsApp.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WhatsApp
            errorMessages.push("Failed to construct WhatsApp: " + err)
        }

        try {
            if (typeof instance === "Telegram") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Telegram.validateJSON(instance); // throw an exception if no match
                // create Telegram from JS object
                this.actualInstance = Telegram.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Telegram
            errorMessages.push("Failed to construct Telegram: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `OmnimessageMessagesInner` with oneOf schemas SMS, Telegram, Viber, WhatsApp. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `OmnimessageMessagesInner` with oneOf schemas SMS, Telegram, Viber, WhatsApp. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>OmnimessageMessagesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OmnimessageMessagesInner} obj Optional instance to populate.
     * @return {module:model/OmnimessageMessagesInner} The populated <code>OmnimessageMessagesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        return new OmnimessageMessagesInner(data);
    }

    /**
     * Gets the actual instance, which can be <code>SMS</code>, <code>Telegram</code>, <code>Viber</code>, <code>WhatsApp</code>.
     * @return {(module:model/SMS|module:model/Telegram|module:model/Viber|module:model/WhatsApp)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>SMS</code>, <code>Telegram</code>, <code>Viber</code>, <code>WhatsApp</code>.
     * @param {(module:model/SMS|module:model/Telegram|module:model/Viber|module:model/WhatsApp)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = OmnimessageMessagesInner.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of OmnimessageMessagesInner from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/OmnimessageMessagesInner} An instance of OmnimessageMessagesInner.
     */
    static fromJSON = function(json_string){
        return OmnimessageMessagesInner.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Phone number or alphanumeric sender name
 * @member {String} sender
 */
OmnimessageMessagesInner.prototype['sender'] = undefined;

/**
 * After how many minutes this channel is considered as failed and the next channel is attempted
 * @member {Number} validity
 */
OmnimessageMessagesInner.prototype['validity'] = undefined;

/**
 * After how many seconds this channel is considered as failed and the next channel is attempted.       Only one of \"ttl\" and \"validity\" can be used.
 * @member {Number} ttl
 */
OmnimessageMessagesInner.prototype['ttl'] = undefined;

/**
 * Plaintext content for Telegram
 * @member {String} text
 */
OmnimessageMessagesInner.prototype['text'] = undefined;

/**
 * URL for the embedded image. Mutually exclusive with \"document_url\" and \"audio_url\"
 * @member {String} image_url
 */
OmnimessageMessagesInner.prototype['image_url'] = undefined;

/**
 * URL of the button, must be specified along with ''text'', ''button_text'' and ''image_url'' (optional)
 * @member {String} button_url
 */
OmnimessageMessagesInner.prototype['button_url'] = undefined;

/**
 * Must be specified along with ''text'', ''button_url'', ''button_text'', ''image_url'' (optional)
 * @member {String} button_text
 */
OmnimessageMessagesInner.prototype['button_text'] = undefined;

/**
 * The channel used to deliver the message
 * @member {module:model/OmnimessageMessagesInner.ChannelEnum} channel
 * @default 'telegram'
 */
OmnimessageMessagesInner.prototype['channel'] = 'telegram';

/**
 * @member {module:model/ViberVideo} video
 */
OmnimessageMessagesInner.prototype['video'] = undefined;

/**
 * Defines how non-GSM characters will be treated:    - \"on\" Use replacement settings from the account's [API Auto Replace settings page](https://dashboard.messente.com/api-settings/auto-replace) (default)   - \"full\" All non GSM 03.38 characters will be replaced with suitable alternatives   - \"off\" Message content is not modified in any way
 * @member {module:model/OmnimessageMessagesInner.AutoconvertEnum} autoconvert
 */
OmnimessageMessagesInner.prototype['autoconvert'] = undefined;

/**
 * hex-encoded string containing SMS UDH
 * @member {String} udh
 */
OmnimessageMessagesInner.prototype['udh'] = undefined;

/**
 * @member {module:model/WhatsAppTemplate} template
 */
OmnimessageMessagesInner.prototype['template'] = undefined;

/**
 * URL for the embedded image. Mutually exclusive with \"audio_url\" and \"image_url\"
 * @member {String} document_url
 */
OmnimessageMessagesInner.prototype['document_url'] = undefined;

/**
 * URL for the embedded image. Mutually exclusive with \"document_url\" and \"image_url\"
 * @member {String} audio_url
 */
OmnimessageMessagesInner.prototype['audio_url'] = undefined;


OmnimessageMessagesInner.OneOf = ["SMS", "Telegram", "Viber", "WhatsApp"];

export default OmnimessageMessagesInner;

