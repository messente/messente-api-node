/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EmptyObject', 'model/ErrorOmnichannel', 'model/OmniMessageCreateSuccessResponse', 'model/Omnimessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EmptyObject'), require('../model/ErrorOmnichannel'), require('../model/OmniMessageCreateSuccessResponse'), require('../model/Omnimessage'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.OmnimessageApi = factory(root.MessenteApi.ApiClient, root.MessenteApi.EmptyObject, root.MessenteApi.ErrorOmnichannel, root.MessenteApi.OmniMessageCreateSuccessResponse, root.MessenteApi.Omnimessage);
  }
}(this, function(ApiClient, EmptyObject, ErrorOmnichannel, OmniMessageCreateSuccessResponse, Omnimessage) {
  'use strict';

  /**
   * Omnimessage service.
   * @module api/OmnimessageApi
   * @version 2.2.0
   */

  /**
   * Constructs a new OmnimessageApi. 
   * @alias module:api/OmnimessageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelScheduledMessage operation.
     * @callback module:api/OmnimessageApi~cancelScheduledMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels a scheduled Omnimessage
     * @param {String} omnimessage_id UUID of the scheduled omnimessage to be cancelled
     * @param {module:api/OmnimessageApi~cancelScheduledMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyObject}
     */
    this.cancelScheduledMessage = function(omnimessage_id, callback) {
      var postBody = null;

      // verify the required parameter 'omnimessage_id' is set
      if (omnimessage_id === undefined || omnimessage_id === null) {
        throw new Error("Missing the required parameter 'omnimessage_id' when calling cancelScheduledMessage");
      }


      var pathParams = {
        'omnimessageId': omnimessage_id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EmptyObject;

      return this.apiClient.callApi(
        '/omnimessage/{omnimessageId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.sendOmnimessage = function(omnimessage, callback) {
      var postBody = omnimessage;

      // verify the required parameter 'omnimessage' is set
      if (omnimessage === undefined || omnimessage === null) {
        throw new Error("Missing the required parameter 'omnimessage' when calling sendOmnimessage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OmniMessageCreateSuccessResponse;

      return this.apiClient.callApi(
        '/omnimessage', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
