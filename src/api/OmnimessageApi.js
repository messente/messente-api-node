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


import ApiClient from "../ApiClient";
import ErrorOmnichannel from '../model/ErrorOmnichannel';
import OmniMessageCreateSuccessResponse from '../model/OmniMessageCreateSuccessResponse';
import Omnimessage from '../model/Omnimessage';

/**
* Omnimessage service.
* @module api/OmnimessageApi
* @version 2.0.0
*/
export default class OmnimessageApi {

    /**
    * Constructs a new OmnimessageApi. 
    * @alias module:api/OmnimessageApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelScheduledMessage operation.
     * @callback module:api/OmnimessageApi~cancelScheduledMessageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels a scheduled Omnimessage
     * @param {String} omnimessageId UUID of the scheduled omnimessage to be cancelled
     * @param {module:api/OmnimessageApi~cancelScheduledMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    cancelScheduledMessage(omnimessageId, callback) {
      let postBody = null;
      // verify the required parameter 'omnimessageId' is set
      if (omnimessageId === undefined || omnimessageId === null) {
        throw new Error("Missing the required parameter 'omnimessageId' when calling cancelScheduledMessage");
      }

      let pathParams = {
        'omnimessageId': omnimessageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/omnimessage/{omnimessageId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendOmnimessage operation.
     * @callback module:api/OmnimessageApi~sendOmnimessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OmniMessageCreateSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends an Omnimessage
     * @param {module:model/Omnimessage} omnimessage Omnimessage to be sent
     * @param {module:api/OmnimessageApi~sendOmnimessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OmniMessageCreateSuccessResponse}
     */
    sendOmnimessage(omnimessage, callback) {
      let postBody = omnimessage;
      // verify the required parameter 'omnimessage' is set
      if (omnimessage === undefined || omnimessage === null) {
        throw new Error("Missing the required parameter 'omnimessage' when calling sendOmnimessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OmniMessageCreateSuccessResponse;
      return this.apiClient.callApi(
        '/omnimessage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
