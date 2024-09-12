# MessenteApi.OmnimessageApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScheduledMessage**](OmnimessageApi.md#cancelScheduledMessage) | **DELETE** /omnimessage/{omnimessageId} | Cancels a scheduled Omnimessage
[**sendOmnimessage**](OmnimessageApi.md#sendOmnimessage) | **POST** /omnimessage | Sends an Omnimessage



## cancelScheduledMessage

> Object cancelScheduledMessage(omnimessage_id)

Cancels a scheduled Omnimessage

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.OmnimessageApi();
let omnimessage_id = "omnimessage_id_example"; // String | UUID of the scheduled omnimessage to be cancelled
apiInstance.cancelScheduledMessage(omnimessage_id, (error, data, response) => {
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
 **omnimessage_id** | **String**| UUID of the scheduled omnimessage to be cancelled | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendOmnimessage

> OmniMessageCreateSuccessResponse sendOmnimessage(omnimessage)

Sends an Omnimessage

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.OmnimessageApi();
let omnimessage = new MessenteApi.Omnimessage(); // Omnimessage | Omnimessage to be sent
apiInstance.sendOmnimessage(omnimessage, (error, data, response) => {
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
 **omnimessage** | [**Omnimessage**](Omnimessage.md)| Omnimessage to be sent | 

### Return type

[**OmniMessageCreateSuccessResponse**](OmniMessageCreateSuccessResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

