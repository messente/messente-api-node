# MessenteApi.ContactsApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactToGroup**](ContactsApi.md#addContactToGroup) | **POST** /groups/{groupId}/contacts/{phone} | Adds a contact to a group.
[**createContact**](ContactsApi.md#createContact) | **POST** /contacts | Creates a new contact.
[**deleteContact**](ContactsApi.md#deleteContact) | **DELETE** /contacts/{phone} | Deletes a contact.
[**fetchContact**](ContactsApi.md#fetchContact) | **GET** /contacts/{phone} | Lists a contact.
[**fetchContactGroups**](ContactsApi.md#fetchContactGroups) | **GET** /contacts/{phone}/groups | Lists groups of a contact.
[**fetchContacts**](ContactsApi.md#fetchContacts) | **GET** /contacts | Returns all contacts.
[**removeContactFromGroup**](ContactsApi.md#removeContactFromGroup) | **DELETE** /groups/{groupId}/contacts/{phone} | Remove a contact from a group.
[**updateContact**](ContactsApi.md#updateContact) | **PATCH** /contacts/{phone} | Updates a contact.


<a name="addContactToGroup"></a>
# **addContactToGroup**
> Object addContactToGroup(groupId, phone)

Adds a contact to a group.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var groupId = "groupId_example"; // String | String in uuid format.
var phone = "phone_example"; // String | A phone number
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addContactToGroup(groupId, phone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| String in uuid format. | 
 **phone** | **String**| A phone number | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createContact"></a>
# **createContact**
> ContactEnvelope createContact(contactFields)

Creates a new contact.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var contactFields = new MessenteApi.ContactFields(); // ContactFields | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContact(contactFields, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactFields** | [**ContactFields**](ContactFields.md)|  | 

### Return type

[**ContactEnvelope**](ContactEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContact"></a>
# **deleteContact**
> deleteContact(phone)

Deletes a contact.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var phone = "phone_example"; // String | A phone number
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContact(phone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| A phone number | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchContact"></a>
# **fetchContact**
> ContactEnvelope fetchContact(phone)

Lists a contact.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var phone = "phone_example"; // String | A phone number
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchContact(phone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| A phone number | 

### Return type

[**ContactEnvelope**](ContactEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchContactGroups"></a>
# **fetchContactGroups**
> GroupListEnvelope fetchContactGroups(phone)

Lists groups of a contact.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var phone = "phone_example"; // String | A phone number
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchContactGroups(phone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| A phone number | 

### Return type

[**GroupListEnvelope**](GroupListEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchContacts"></a>
# **fetchContacts**
> ContactListEnvelope fetchContacts(opts)

Returns all contacts.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var opts = {
  'groupIds': ["null"] // [String] | Optional one or many group id strings in uuid format. For example: \"/contacts?groupIds=group_id_one&groupIds=group_id_two\" 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchContacts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| Optional one or many group id strings in uuid format. For example: \&quot;/contacts?groupIds&#x3D;group_id_one&amp;groupIds&#x3D;group_id_two\&quot;  | [optional] 

### Return type

[**ContactListEnvelope**](ContactListEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeContactFromGroup"></a>
# **removeContactFromGroup**
> removeContactFromGroup(groupId, phone)

Remove a contact from a group.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var groupId = "groupId_example"; // String | String in uuid format.
var phone = "phone_example"; // String | A phone number
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeContactFromGroup(groupId, phone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| String in uuid format. | 
 **phone** | **String**| A phone number | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateContact"></a>
# **updateContact**
> ContactEnvelope updateContact(phone, contactUpdateFields)

Updates a contact.

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.ContactsApi();
var phone = "phone_example"; // String | A phone number
var contactUpdateFields = new MessenteApi.ContactUpdateFields(); // ContactUpdateFields | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContact(phone, contactUpdateFields, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| A phone number | 
 **contactUpdateFields** | [**ContactUpdateFields**](ContactUpdateFields.md)|  | 

### Return type

[**ContactEnvelope**](ContactEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
