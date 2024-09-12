# MessenteApi.DeliveryReportApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveDeliveryReport**](DeliveryReportApi.md#retrieveDeliveryReport) | **GET** /omnimessage/{omnimessageId}/status | Retrieves the delivery report for the Omnimessage



## retrieveDeliveryReport

> DeliveryReportResponse retrieveDeliveryReport(omnimessage_id)

Retrieves the delivery report for the Omnimessage

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.DeliveryReportApi();
let omnimessage_id = "omnimessage_id_example"; // String | UUID of the omnimessage to for which the delivery report is to be retrieved
apiInstance.retrieveDeliveryReport(omnimessage_id, (error, data, response) => {
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
 **omnimessage_id** | **String**| UUID of the omnimessage to for which the delivery report is to be retrieved | 

### Return type

[**DeliveryReportResponse**](DeliveryReportResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

