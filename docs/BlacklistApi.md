# MessenteApi.BlacklistApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToBlacklist**](BlacklistApi.md#addToBlacklist) | **POST** /phonebook/blacklist | Adds a phone number to the blacklist
[**deleteFromBlacklist**](BlacklistApi.md#deleteFromBlacklist) | **DELETE** /phonebook/blacklist/{phone} | Deletes a phone number from the blacklist
[**fetchBlacklist**](BlacklistApi.md#fetchBlacklist) | **GET** /phonebook/blacklist | Returns all blacklisted phone numbers
[**isBlacklisted**](BlacklistApi.md#isBlacklisted) | **GET** /phonebook/blacklist/{phone} | Checks if a phone number is blacklisted



## addToBlacklist

> addToBlacklist(numberToBlacklist)

Adds a phone number to the blacklist

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.BlacklistApi();
let numberToBlacklist = {"phoneNumber":"+37251000000"}; // NumberToBlacklist | Phone number to be blacklisted
apiInstance.addToBlacklist(numberToBlacklist, (error, data, response) => {
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
 **numberToBlacklist** | [**NumberToBlacklist**](NumberToBlacklist.md)| Phone number to be blacklisted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFromBlacklist

> deleteFromBlacklist(phone)

Deletes a phone number from the blacklist

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.BlacklistApi();
let phone = "+37251000000"; // String | A phone number
apiInstance.deleteFromBlacklist(phone, (error, data, response) => {
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


## fetchBlacklist

> FetchBlacklistSuccess fetchBlacklist()

Returns all blacklisted phone numbers

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.BlacklistApi();
apiInstance.fetchBlacklist((error, data, response) => {
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

[**FetchBlacklistSuccess**](FetchBlacklistSuccess.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## isBlacklisted

> isBlacklisted(phone)

Checks if a phone number is blacklisted

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.BlacklistApi();
let phone = "+37251000000"; // String | A phone number
apiInstance.isBlacklisted(phone, (error, data, response) => {
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

