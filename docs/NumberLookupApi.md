# MessenteApi.NumberLookupApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncNumberLookup**](NumberLookupApi.md#syncNumberLookup) | **POST** /hlr/sync | Requests info about a phone number


<a name="syncNumberLookup"></a>
# **syncNumberLookup**
> SyncNumberLookupSuccess syncNumberLookup(syncNumberLookup)

Requests info about a phone number

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.NumberLookupApi();
var syncNumberLookup = {"numbers":["+37251000000","+37251000001"]}; // SyncNumberLookup | Numbers to lookup
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncNumberLookup(syncNumberLookup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncNumberLookup** | [**SyncNumberLookup**](SyncNumberLookup.md)| Numbers to lookup | 

### Return type

[**SyncNumberLookupSuccess**](SyncNumberLookupSuccess.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

