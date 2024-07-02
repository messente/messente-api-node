# MessenteApi.NumberLookupApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchInfo**](NumberLookupApi.md#fetchInfo) | **POST** /hlr/sync | Requests info about phone numbers



## fetchInfo

> SyncNumberLookupSuccess fetchInfo(numbersToInvestigate)

Requests info about phone numbers

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.NumberLookupApi();
let numbersToInvestigate = {"numbers":["+37251000000","+37251000001"]}; // NumbersToInvestigate | Numbers for lookup
apiInstance.fetchInfo(numbersToInvestigate, (error, data, response) => {
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
 **numbersToInvestigate** | [**NumbersToInvestigate**](NumbersToInvestigate.md)| Numbers for lookup | 

### Return type

[**SyncNumberLookupSuccess**](SyncNumberLookupSuccess.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

