# MessenteApi.ContactsApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactToGroup**](ContactsApi.md#addContactToGroup) | **POST** /phonebook/groups/{groupId}/contacts/{phone} | Adds a contact to a group
[**createContact**](ContactsApi.md#createContact) | **POST** /phonebook/contacts | Creates a new contact
[**deleteContact**](ContactsApi.md#deleteContact) | **DELETE** /phonebook/contacts/{phone} | Deletes a contact
[**fetchContact**](ContactsApi.md#fetchContact) | **GET** /phonebook/contacts/{phone} | Lists a contact
[**fetchContactGroups**](ContactsApi.md#fetchContactGroups) | **GET** /phonebook/contacts/{phone}/groups | Lists groups of a contact
[**fetchContacts**](ContactsApi.md#fetchContacts) | **GET** /phonebook/contacts | Returns all contacts
[**removeContactFromGroup**](ContactsApi.md#removeContactFromGroup) | **DELETE** /phonebook/groups/{groupId}/contacts/{phone} | Removes a contact from a group
[**updateContact**](ContactsApi.md#updateContact) | **PATCH** /phonebook/contacts/{phone} | Updates a contact



## addContactToGroup

> Object addContactToGroup(group_id, phone)

Adds a contact to a group

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let group_id = "5792a02a-e5c2-422b-a0a0-0ae65d814663"; // String | String in UUID format
let phone = "+37251000000"; // String | A phone number
apiInstance.addContactToGroup(group_id, phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **String**| String in UUID format | 
 **phone** | **String**| A phone number | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createContact

> ContactEnvelope createContact(contact_fields)

Creates a new contact

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let contact_fields = {"phoneNumber":"+37251000000","email":"anyone@messente.com","firstName":"Any","lastName":"One","company":"Messente","title":"Sir","custom":"Any custom","custom2":"Any custom two","custom3":"Any custom three","custom4":"Any custom four"}; // ContactFields | 
apiInstance.createContact(contact_fields, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_fields** | [**ContactFields**](ContactFields.md)|  | 

### Return type

[**ContactEnvelope**](ContactEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContact

> deleteContact(phone)

Deletes a contact

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let phone = "+37251000000"; // String | A phone number
apiInstance.deleteContact(phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## fetchContact

> ContactEnvelope fetchContact(phone)

Lists a contact

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let phone = "+37251000000"; // String | A phone number
apiInstance.fetchContact(phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## fetchContactGroups

> GroupListEnvelope fetchContactGroups(phone)

Lists groups of a contact

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let phone = "+37251000000"; // String | A phone number
apiInstance.fetchContactGroups(phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## fetchContacts

> ContactListEnvelope fetchContacts(opts)

Returns all contacts

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let opts = {
  'group_ids': ["null"] // [String] | Optional one or many group id strings in UUID format. For example: \"/contacts?groupIds=group_id_one&groupIds=group_id_two\" 
};
apiInstance.fetchContacts(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_ids** | [**[String]**](String.md)| Optional one or many group id strings in UUID format. For example: \&quot;/contacts?groupIds&#x3D;group_id_one&amp;groupIds&#x3D;group_id_two\&quot;  | [optional] 

### Return type

[**ContactListEnvelope**](ContactListEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeContactFromGroup

> removeContactFromGroup(group_id, phone)

Removes a contact from a group

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let group_id = "5792a02a-e5c2-422b-a0a0-0ae65d814663"; // String | String in UUID format
let phone = "+37251000000"; // String | A phone number
apiInstance.removeContactFromGroup(group_id, phone, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **String**| String in UUID format | 
 **phone** | **String**| A phone number | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContact

> ContactEnvelope updateContact(phone, contact_update_fields)

Updates a contact

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.ContactsApi();
let phone = "+37251000000"; // String | A phone number
let contact_update_fields = {"email":"anyone@messente.com","firstName":"Any","lastName":"One","company":"Messente","title":"Sir","custom":"Any custom","custom2":"Any custom two","custom3":"Any custom three","custom4":"Any custom four"}; // ContactUpdateFields | 
apiInstance.updateContact(phone, contact_update_fields, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| A phone number | 
 **contact_update_fields** | [**ContactUpdateFields**](ContactUpdateFields.md)|  | 

### Return type

[**ContactEnvelope**](ContactEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

