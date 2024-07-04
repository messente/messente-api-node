# MessenteApi.BulkMessagingApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendBulkOmnimessage**](BulkMessagingApi.md#sendBulkOmnimessage) | **POST** /omnimessages | Sends a bulk Omnimessage


<a name="sendBulkOmnimessage"></a>
# **sendBulkOmnimessage**
> BulkOmniMessageCreateSuccessResponse sendBulkOmnimessage(bulkOmnimessage)

Sends a bulk Omnimessage

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.BulkMessagingApi();
var bulkOmnimessage = new MessenteApi.BulkOmnimessage(); // BulkOmnimessage | Bulk Omnimessage to be sent
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendBulkOmnimessage(bulkOmnimessage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkOmnimessage** | [**BulkOmnimessage**](BulkOmnimessage.md)| Bulk Omnimessage to be sent | 

### Return type

[**BulkOmniMessageCreateSuccessResponse**](BulkOmniMessageCreateSuccessResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

