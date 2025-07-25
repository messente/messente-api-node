# MessenteApi.PricingApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPricelist**](PricingApi.md#getPricelist) | **GET** /pricelist | Get pricelist for account
[**getPrices**](PricingApi.md#getPrices) | **GET** /prices | Get pricing for a specific country


<a name="getPricelist"></a>
# **getPricelist**
> String getPricelist(username, password)

Get pricelist for account

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

var apiInstance = new MessenteApi.PricingApi();
var username = "username_example"; // String | The API username
var password = "password_example"; // String | The API password
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPricelist(username, password, callback);
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

<a name="getPrices"></a>
# **getPrices**
> Price getPrices(username, password, country, opts)

Get pricing for a specific country

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

var apiInstance = new MessenteApi.PricingApi();
var username = "username_example"; // String | The API username
var password = "password_example"; // String | The API password
var country = EE; // String | The country code, for which to get the prices
var opts = {
  'format': "format_example" // String | The format of the response. Can be either 'json' or 'xml'. If not specified, defaults to 'json'.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPrices(username, password, country, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The API username | 
 **password** | **String**| The API password | 
 **country** | **String**| The country code, for which to get the prices | 
 **format** | **String**| The format of the response. Can be either &#39;json&#39; or &#39;xml&#39;. If not specified, defaults to &#39;json&#39;. | [optional] 

### Return type

[**Price**](Price.md)

### Authorization

[apiPassword](../README.md#apiPassword), [apiUsername](../README.md#apiUsername)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/plain; charset=utf-8

