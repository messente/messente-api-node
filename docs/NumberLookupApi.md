# MessenteApi.NumberLookupApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchInfo**](NumberLookupApi.md#fetchInfo) | **POST** /hlr/sync | Requests info about phone numbers


<a name="fetchInfo"></a>
# **fetchInfo**
> SyncNumberLookupSuccess fetchInfo(numbers_to_investigate)

Requests info about phone numbers

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.NumberLookupApi();
var numbers_to_investigate = {"numbers":["+37251000000","+37251000001"]}; // NumbersToInvestigate | Numbers for lookup
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fetchInfo(numbers_to_investigate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numbers_to_investigate** | [**NumbersToInvestigate**](NumbersToInvestigate.md)| Numbers for lookup | 

### Return type

[**SyncNumberLookupSuccess**](SyncNumberLookupSuccess.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

