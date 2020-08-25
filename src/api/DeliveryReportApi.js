/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/DeliveryReportResponse', 'model/ErrorOmnichannel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeliveryReportResponse'), require('../model/ErrorOmnichannel'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.DeliveryReportApi = factory(root.MessenteApi.ApiClient, root.MessenteApi.DeliveryReportResponse, root.MessenteApi.ErrorOmnichannel);
  }
}(this, function(ApiClient, DeliveryReportResponse, ErrorOmnichannel) {
  'use strict';

  /**
   * DeliveryReport service.
   * @module api/DeliveryReportApi
   * @version 1.3.1
   */

  /**
   * Constructs a new DeliveryReportApi. 
   * @alias module:api/DeliveryReportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the retrieveDeliveryReport operation.
     * @callback module:api/DeliveryReportApi~retrieveDeliveryReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the delivery report for the Omnimessage
     * @param {String} omnimessageId UUID of the omnimessage to for which the delivery report is to be retrieved
     * @param {module:api/DeliveryReportApi~retrieveDeliveryReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReportResponse}
     */
    this.retrieveDeliveryReport = function(omnimessageId, callback) {
      var postBody = null;

      // verify the required parameter 'omnimessageId' is set
      if (omnimessageId === undefined || omnimessageId === null) {
        throw new Error("Missing the required parameter 'omnimessageId' when calling retrieveDeliveryReport");
      }


      var pathParams = {
        'omnimessageId': omnimessageId
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
      var returnType = DeliveryReportResponse;

      return this.apiClient.callApi(
        '/omnimessage/{omnimessageId}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
