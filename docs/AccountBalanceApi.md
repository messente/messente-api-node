# MessenteApi.AccountBalanceApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalance**](AccountBalanceApi.md#getAccountBalance) | **GET** /get_balance | Get account balance
[**getAccountBalanceUsingPost**](AccountBalanceApi.md#getAccountBalanceUsingPost) | **POST** /get_balance | Get account balance


<a name="getAccountBalance"></a>
# **getAccountBalance**
> String getAccountBalance(username, password)

Get account balance

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure API key authorization: apiPassword
var apiPassword = defaultClient.authentications['apiPassword'];
apiPassword.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPassword.apiKeyPrefix = 'Token';
// Configure API key authorization: apiUsername
var apiUsername = defaultClient.authentications['apiUsername'];
apiUsername.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiUsername.apiKeyPrefix = 'Token';

var apiInstance = new MessenteApi.AccountBalanceApi();
var username = "username_example"; // String | The API username
var password = "password_example"; // String | The API password
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountBalance(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The API username | 
 **password** | **String**| The API password | 

### Return type

**String**

### Authorization

[apiPassword](../README.md#apiPassword), [apiUsername](../README.md#apiUsername)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getAccountBalanceUsingPost"></a>
# **getAccountBalanceUsingPost**
> String getAccountBalanceUsingPost(username, password)

Get account balance

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;
// Configure API key authorization: apiPassword
var apiPassword = defaultClient.authentications['apiPassword'];
apiPassword.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiPassword.apiKeyPrefix = 'Token';
// Configure API key authorization: apiUsername
var apiUsername = defaultClient.authentications['apiUsername'];
apiUsername.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiUsername.apiKeyPrefix = 'Token';

var apiInstance = new MessenteApi.AccountBalanceApi();
var username = "username_example"; // String | The API username
var password = "password_example"; // String | The API password
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountBalanceUsingPost(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The API username | 
 **password** | **String**| The API password | 

### Return type

**String**

### Authorization

[apiPassword](../README.md#apiPassword), [apiUsername](../README.md#apiUsername)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

