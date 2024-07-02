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
    define(['ApiClient', 'model/ErrorPhonebook', 'model/GroupEnvelope', 'model/GroupListEnvelope', 'model/GroupName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorPhonebook'), require('../model/GroupEnvelope'), require('../model/GroupListEnvelope'), require('../model/GroupName'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.GroupsApi = factory(root.MessenteApi.ApiClient, root.MessenteApi.ErrorPhonebook, root.MessenteApi.GroupEnvelope, root.MessenteApi.GroupListEnvelope, root.MessenteApi.GroupName);
  }
}(this, function(ApiClient, ErrorPhonebook, GroupEnvelope, GroupListEnvelope, GroupName) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 2.0.0
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/GroupsApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new group with the provided name
     * @param {module:model/GroupName} groupName 
     * @param {module:api/GroupsApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupEnvelope}
     */
    this.createGroup = function(groupName, callback) {
      var postBody = groupName;

      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling createGroup");
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
      var returnType = GroupEnvelope;

      return this.apiClient.callApi(
        '/phonebook/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupsApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a group
     * @param {String} groupId String in UUID format
     * @param {module:api/GroupsApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroup");
      }


      var pathParams = {
        'groupId': groupId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/phonebook/groups/{groupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchGroup operation.
     * @callback module:api/GroupsApi~fetchGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists a group
     * @param {String} groupId String in UUID format
     * @param {module:api/GroupsApi~fetchGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupEnvelope}
     */
    this.fetchGroup = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling fetchGroup");
      }


      var pathParams = {
        'groupId': groupId
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
      var returnType = GroupEnvelope;

      return this.apiClient.callApi(
        '/phonebook/groups/{groupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchGroups operation.
     * @callback module:api/GroupsApi~fetchGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupListEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all groups
     * @param {module:api/GroupsApi~fetchGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupListEnvelope}
     */
    this.fetchGroups = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GroupListEnvelope;

      return this.apiClient.callApi(
        '/phonebook/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/GroupsApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a group with the provided name
     * @param {String} groupId String in UUID format
     * @param {module:model/GroupName} groupName 
     * @param {module:api/GroupsApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupEnvelope}
     */
    this.updateGroup = function(groupId, groupName, callback) {
      var postBody = groupName;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateGroup");
      }

      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling updateGroup");
      }


      var pathParams = {
        'groupId': groupId
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
      var returnType = GroupEnvelope;

      return this.apiClient.callApi(
        '/phonebook/groups/{groupId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
