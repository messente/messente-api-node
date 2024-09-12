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
import DeliveryReportResponse from '../model/DeliveryReportResponse';
import ErrorOmnichannel from '../model/ErrorOmnichannel';

/**
* DeliveryReport service.
* @module api/DeliveryReportApi
* @version 2.1.0
*/
export default class DeliveryReportApi {

    /**
    * Constructs a new DeliveryReportApi. 
    * @alias module:api/DeliveryReportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the retrieveDeliveryReport operation.
     * @callback module:api/DeliveryReportApi~retrieveDeliveryReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the delivery report for the Omnimessage
     * @param {String} omnimessage_id UUID of the omnimessage to for which the delivery report is to be retrieved
     * @param {module:api/DeliveryReportApi~retrieveDeliveryReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReportResponse}
     */
    retrieveDeliveryReport(omnimessage_id, callback) {
      let postBody = null;
      // verify the required parameter 'omnimessage_id' is set
      if (omnimessage_id === undefined || omnimessage_id === null) {
        throw new Error("Missing the required parameter 'omnimessage_id' when calling retrieveDeliveryReport");
      }

      let pathParams = {
        'omnimessageId': omnimessage_id
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
      let returnType = DeliveryReportResponse;
      return this.apiClient.callApi(
        '/omnimessage/{omnimessageId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
