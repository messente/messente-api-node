# MessenteApi.GroupsApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupsApi.md#createGroup) | **POST** /phonebook/groups | Creates a new group with the provided name
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /phonebook/groups/{groupId} | Deletes a group
[**fetchGroup**](GroupsApi.md#fetchGroup) | **GET** /phonebook/groups/{groupId} | Lists a group
[**fetchGroups**](GroupsApi.md#fetchGroups) | **GET** /phonebook/groups | Returns all groups
[**updateGroup**](GroupsApi.md#updateGroup) | **PUT** /phonebook/groups/{groupId} | Updates a group with the provided name



## createGroup

> GroupEnvelope createGroup(group_name)

Creates a new group with the provided name

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.GroupsApi();
let group_name = {"name":"Any group name"}; // GroupName | 
apiInstance.createGroup(group_name, (error, data, response) => {
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
 **group_name** | [**GroupName**](GroupName.md)|  | 

### Return type

[**GroupEnvelope**](GroupEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroup

> deleteGroup(group_id)

Deletes a group

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.GroupsApi();
let group_id = "5792a02a-e5c2-422b-a0a0-0ae65d814663"; // String | String in UUID format
apiInstance.deleteGroup(group_id, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchGroup

> GroupEnvelope fetchGroup(group_id)

Lists a group

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.GroupsApi();
let group_id = "5792a02a-e5c2-422b-a0a0-0ae65d814663"; // String | String in UUID format
apiInstance.fetchGroup(group_id, (error, data, response) => {
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

### Return type

[**GroupEnvelope**](GroupEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchGroups

> GroupListEnvelope fetchGroups()

Returns all groups

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.GroupsApi();
apiInstance.fetchGroups((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GroupListEnvelope**](GroupListEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGroup

> GroupEnvelope updateGroup(group_id, group_name)

Updates a group with the provided name

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.GroupsApi();
let group_id = "5792a02a-e5c2-422b-a0a0-0ae65d814663"; // String | String in UUID format
let group_name = {"name":"Any group name"}; // GroupName | 
apiInstance.updateGroup(group_id, group_name, (error, data, response) => {
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
 **group_name** | [**GroupName**](GroupName.md)|  | 

### Return type

[**GroupEnvelope**](GroupEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

