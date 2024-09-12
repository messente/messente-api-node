# MessenteApi.BulkMessagingApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendBulkOmnimessage**](BulkMessagingApi.md#sendBulkOmnimessage) | **POST** /omnimessages | Sends a bulk Omnimessage



## sendBulkOmnimessage

> BulkOmniMessageCreateSuccessResponse sendBulkOmnimessage(bulk_omnimessage)

Sends a bulk Omnimessage

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.BulkMessagingApi();
let bulk_omnimessage = new MessenteApi.BulkOmnimessage(); // BulkOmnimessage | Bulk Omnimessage to be sent
apiInstance.sendBulkOmnimessage(bulk_omnimessage, (error, data, response) => {
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
 **bulk_omnimessage** | [**BulkOmnimessage**](BulkOmnimessage.md)| Bulk Omnimessage to be sent | 

### Return type

[**BulkOmniMessageCreateSuccessResponse**](BulkOmniMessageCreateSuccessResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

