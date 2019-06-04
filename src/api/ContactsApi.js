/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.0.1
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
    define(['ApiClient', 'model/ContactEnvelope', 'model/ContactFields', 'model/ContactListEnvelope', 'model/ContactUpdateFields', 'model/EmptyObject', 'model/ErrorPhonebook', 'model/GroupListEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContactEnvelope'), require('../model/ContactFields'), require('../model/ContactListEnvelope'), require('../model/ContactUpdateFields'), require('../model/EmptyObject'), require('../model/ErrorPhonebook'), require('../model/GroupListEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.ContactsApi = factory(root.MessenteApi.ApiClient, root.MessenteApi.ContactEnvelope, root.MessenteApi.ContactFields, root.MessenteApi.ContactListEnvelope, root.MessenteApi.ContactUpdateFields, root.MessenteApi.EmptyObject, root.MessenteApi.ErrorPhonebook, root.MessenteApi.GroupListEnvelope);
  }
}(this, function(ApiClient, ContactEnvelope, ContactFields, ContactListEnvelope, ContactUpdateFields, EmptyObject, ErrorPhonebook, GroupListEnvelope) {
  'use strict';

  /**
   * Contacts service.
   * @module api/ContactsApi
   * @version 1.0.2
   */

  /**
   * Constructs a new ContactsApi. 
   * @alias module:api/ContactsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addContactToGroup operation.
     * @callback module:api/ContactsApi~addContactToGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a contact to a group
     * @param {String} groupId String in UUID format.
     * @param {String} phone A phone number
     * @param {module:api/ContactsApi~addContactToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyObject}
     */
    this.addContactToGroup = function(groupId, phone, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addContactToGroup");
      }

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling addContactToGroup");
      }


      var pathParams = {
        'groupId': groupId,
        'phone': phone
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
        '/groups/{groupId}/contacts/{phone}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createContact operation.
     * @callback module:api/ContactsApi~createContactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new contact
     * @param {module:model/ContactFields} contactFields 
     * @param {module:api/ContactsApi~createContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactEnvelope}
     */
    this.createContact = function(contactFields, callback) {
      var postBody = contactFields;

      // verify the required parameter 'contactFields' is set
      if (contactFields === undefined || contactFields === null) {
        throw new Error("Missing the required parameter 'contactFields' when calling createContact");
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
      var returnType = ContactEnvelope;

      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContact operation.
     * @callback module:api/ContactsApi~deleteContactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a contact
     * @param {String} phone A phone number
     * @param {module:api/ContactsApi~deleteContactCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteContact = function(phone, callback) {
      var postBody = null;

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling deleteContact");
      }


      var pathParams = {
        'phone': phone
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
        '/contacts/{phone}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchContact operation.
     * @callback module:api/ContactsApi~fetchContactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists a contact
     * @param {String} phone A phone number
     * @param {module:api/ContactsApi~fetchContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactEnvelope}
     */
    this.fetchContact = function(phone, callback) {
      var postBody = null;

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling fetchContact");
      }


      var pathParams = {
        'phone': phone
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
      var returnType = ContactEnvelope;

      return this.apiClient.callApi(
        '/contacts/{phone}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchContactGroups operation.
     * @callback module:api/ContactsApi~fetchContactGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupListEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists groups of a contact
     * @param {String} phone A phone number
     * @param {module:api/ContactsApi~fetchContactGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupListEnvelope}
     */
    this.fetchContactGroups = function(phone, callback) {
      var postBody = null;

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling fetchContactGroups");
      }


      var pathParams = {
        'phone': phone
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
        '/contacts/{phone}/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchContacts operation.
     * @callback module:api/ContactsApi~fetchContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactListEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all contacts
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.groupIds Optional one or many group id strings in UUID format. For example: \&quot;/contacts?groupIds&#x3D;group_id_one&amp;groupIds&#x3D;group_id_two\&quot; 
     * @param {module:api/ContactsApi~fetchContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactListEnvelope}
     */
    this.fetchContacts = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'groupIds': {
          value: opts['groupIds'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ContactListEnvelope;

      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeContactFromGroup operation.
     * @callback module:api/ContactsApi~removeContactFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a contact from a group
     * @param {String} groupId String in UUID format.
     * @param {String} phone A phone number
     * @param {module:api/ContactsApi~removeContactFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeContactFromGroup = function(groupId, phone, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling removeContactFromGroup");
      }

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling removeContactFromGroup");
      }


      var pathParams = {
        'groupId': groupId,
        'phone': phone
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
        '/groups/{groupId}/contacts/{phone}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContact operation.
     * @callback module:api/ContactsApi~updateContactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a contact
     * @param {String} phone A phone number
     * @param {module:model/ContactUpdateFields} contactUpdateFields 
     * @param {module:api/ContactsApi~updateContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactEnvelope}
     */
    this.updateContact = function(phone, contactUpdateFields, callback) {
      var postBody = contactUpdateFields;

      // verify the required parameter 'phone' is set
      if (phone === undefined || phone === null) {
        throw new Error("Missing the required parameter 'phone' when calling updateContact");
      }

      // verify the required parameter 'contactUpdateFields' is set
      if (contactUpdateFields === undefined || contactUpdateFields === null) {
        throw new Error("Missing the required parameter 'contactUpdateFields' when calling updateContact");
      }


      var pathParams = {
        'phone': phone
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
      var returnType = ContactEnvelope;

      return this.apiClient.callApi(
        '/contacts/{phone}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
