# MessenteApi.GroupsApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupsApi.md#createGroup) | **POST** /phonebook/groups | Creates a new group with the provided name
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /phonebook/groups/{groupId} | Deletes a group
[**fetchGroup**](GroupsApi.md#fetchGroup) | **GET** /phonebook/groups/{groupId} | Lists a group
[**fetchGroups**](GroupsApi.md#fetchGroups) | **GET** /phonebook/groups | Returns all groups
[**updateGroup**](GroupsApi.md#updateGroup) | **PUT** /phonebook/groups/{groupId} | Updates a group with the provided name


<a name="createGroup"></a>
# **createGroup**
> GroupEnvelope createGroup(groupName)

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
let groupName = {"name":"Any group name"}; // GroupName | 
apiInstance.createGroup(groupName, (error, data, response) => {
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
 **groupName** | [**GroupName**](GroupName.md)|  | 

### Return type

[**GroupEnvelope**](GroupEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupId)

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
let groupId = 5792a02a-e5c2-422b-a0a0-0ae65d814663; // String | String in UUID format
apiInstance.deleteGroup(groupId, (error, data, response) => {
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
 **groupId** | **String**| String in UUID format | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchGroup"></a>
# **fetchGroup**
> GroupEnvelope fetchGroup(groupId)

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
let groupId = 5792a02a-e5c2-422b-a0a0-0ae65d814663; // String | String in UUID format
apiInstance.fetchGroup(groupId, (error, data, response) => {
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
 **groupId** | **String**| String in UUID format | 

### Return type

[**GroupEnvelope**](GroupEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fetchGroups"></a>
# **fetchGroups**
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

<a name="updateGroup"></a>
# **updateGroup**
> GroupEnvelope updateGroup(groupId, groupName)

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
let groupId = 5792a02a-e5c2-422b-a0a0-0ae65d814663; // String | String in UUID format
let groupName = {"name":"Any group name"}; // GroupName | 
apiInstance.updateGroup(groupId, groupName, (error, data, response) => {
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
 **groupId** | **String**| String in UUID format | 
 **groupName** | [**GroupName**](GroupName.md)|  | 

### Return type

[**GroupEnvelope**](GroupEnvelope.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

