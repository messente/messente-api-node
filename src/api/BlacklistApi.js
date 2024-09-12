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
import ErrorPhonebook from '../model/ErrorPhonebook';
import FetchBlacklistSuccess from '../model/FetchBlacklistSuccess';
import NumberToBlacklist from '../model/NumberToBlacklist';

/**
* Blacklist service.
* @module api/BlacklistApi
* @version 2.2.0
*/
export default class BlacklistApi {

    /**
    * Constructs a new BlacklistApi. 
    * @alias module:api/BlacklistApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addToBlacklist operation.
     * @callback module:api/BlacklistApi~addToBlacklistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a phone number to the blacklist
     * @param {module:model/NumberToBlacklist} number_to_blacklist Phone number to be blacklisted
     * @param {module:api/BlacklistApi~addToBlacklistCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addToBlacklist(number_to_blacklist, callback) {
      let postBody = number_to_blacklist;
      // verify the required parameter 'number_to_blacklist' is set
      if (number_to_blacklist === undefined || number_to_blacklist === null) {
        throw new Error("Missing the required parameter 'number_to_blacklist' when calling addToBlacklist");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/phonebook/blacklist', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFromBlacklist operation.
     * @callback module:api/BlacklistApi~deleteFromBlacklistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a phone number from the blacklist
     * @param {String} phone A phone number
     * @param {module:api/BlacklistApi~deleteFromBlacklistCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteFromBlacklist(phone, callback) {
      let postBody = null;
      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling deleteFromBlacklist");
      }

      let pathParams = {
        'phone': phone
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
      let returnType = null;
      return this.apiClient.callApi(
        '/phonebook/blacklist/{phone}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchBlacklist operation.
     * @callback module:api/BlacklistApi~fetchBlacklistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FetchBlacklistSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all blacklisted phone numbers
     * @param {module:api/BlacklistApi~fetchBlacklistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FetchBlacklistSuccess}
     */
    fetchBlacklist(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = FetchBlacklistSuccess;
      return this.apiClient.callApi(
        '/phonebook/blacklist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the isBlacklisted operation.
     * @callback module:api/BlacklistApi~isBlacklistedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Checks if a phone number is blacklisted
     * @param {String} phone A phone number
     * @param {module:api/BlacklistApi~isBlacklistedCallback} callback The callback function, accepting three arguments: error, data, response
     */
    isBlacklisted(phone, callback) {
      let postBody = null;
      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling isBlacklisted");
      }

      let pathParams = {
        'phone': phone
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
      let returnType = null;
      return this.apiClient.callApi(
        '/phonebook/blacklist/{phone}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
