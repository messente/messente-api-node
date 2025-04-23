# MessenteApi.WhatsAppTemplatesApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWhatsappTemplate**](WhatsAppTemplatesApi.md#createWhatsappTemplate) | **POST** /whatsapp/wabas/{wabaId}/templates | Creates a WhatsApp template
[**deleteWhatsappTemplate**](WhatsAppTemplatesApi.md#deleteWhatsappTemplate) | **DELETE** /whatsapp/wabas/{wabaId}/templates | Deletes a WhatsApp template
[**getWhatsappTemplateById**](WhatsAppTemplatesApi.md#getWhatsappTemplateById) | **GET** /whatsapp/wabas/{wabaId}/templates/{templateId} | Requests a WhatsApp template with the given ID
[**listWhatsappTemplates**](WhatsAppTemplatesApi.md#listWhatsappTemplates) | **GET** /whatsapp/wabas/{wabaId}/templates | Requests a list of WhatsApp templates
[**updateWhatsappTemplate**](WhatsAppTemplatesApi.md#updateWhatsappTemplate) | **PUT** /whatsapp/wabas/{wabaId}/templates/{templateId} | Updates a WhatsApp template


<a name="createWhatsappTemplate"></a>
# **createWhatsappTemplate**
> WhatsappCreateTemplateResponse createWhatsappTemplate(waba_id, whatsapp_create_template_request)

Creates a WhatsApp template

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.WhatsAppTemplatesApi();
var waba_id = "waba_id_example"; // String | The ID of the WABA
var whatsapp_create_template_request = new MessenteApi.WhatsappCreateTemplateRequest(); // WhatsappCreateTemplateRequest | The WhatsApp template to create
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWhatsappTemplate(waba_id, whatsapp_create_template_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waba_id** | **String**| The ID of the WABA | 
 **whatsapp_create_template_request** | [**WhatsappCreateTemplateRequest**](WhatsappCreateTemplateRequest.md)| The WhatsApp template to create | 

### Return type

[**WhatsappCreateTemplateResponse**](WhatsappCreateTemplateResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWhatsappTemplate"></a>
# **deleteWhatsappTemplate**
> AnyJsonResponse deleteWhatsappTemplate(waba_id, name, opts)

Deletes a WhatsApp template

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.WhatsAppTemplatesApi();
var waba_id = "waba_id_example"; // String | The ID of the WABA
var name = template_name; // String | The name of the template to delete
var opts = {
  'hsm_id': 1 // String | The ID of the template to delete
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteWhatsappTemplate(waba_id, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waba_id** | **String**| The ID of the WABA | 
 **name** | **String**| The name of the template to delete | 
 **hsm_id** | **String**| The ID of the template to delete | [optional] 

### Return type

[**AnyJsonResponse**](AnyJsonResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWhatsappTemplateById"></a>
# **getWhatsappTemplateById**
> WhatsappTemplateResponse getWhatsappTemplateById(waba_id, template_id)

Requests a WhatsApp template with the given ID

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.WhatsAppTemplatesApi();
var waba_id = "waba_id_example"; // String | The ID of the WABA
var template_id = "template_id_example"; // String | The ID of the template to retrieve
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWhatsappTemplateById(waba_id, template_id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waba_id** | **String**| The ID of the WABA | 
 **template_id** | **String**| The ID of the template to retrieve | 

### Return type

[**WhatsappTemplateResponse**](WhatsappTemplateResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listWhatsappTemplates"></a>
# **listWhatsappTemplates**
> WhatsappListTemplatesResponse listWhatsappTemplates(waba_id, opts)

Requests a list of WhatsApp templates

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.WhatsAppTemplatesApi();
var waba_id = "waba_id_example"; // String | The ID of the WABA
var opts = {
  'limit': 10, // Number | The number of templates to return in the list. Although the max size is 500, for large datasets it is recommended to use a lower limit and instead use pagination to avoid potential timeouts. Defaults to 25.
  'before': MAZDZD, // String | A cursor point used for a paginated request to indicate the template to paginate backwards from.
  'after': MjQZD, // String | A cursor point used for a paginated request to indicate the template to paginate forwards from.
  'category': new MessenteApi.WhatsappTemplateCategory(), // WhatsappTemplateCategory | A filter for returning only templates matching a specific category.
  'content': special offer, // String | A search filter representing the content of a template. Only matching templates will be returned in the list.
  'language': en, // String | A filter  for returning only templates matching a specific language code. A list of supported languages is available in the [WhatsApp documentation](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/) 
  'name': Sample Template, // String | A search filter representing the name, either full or partial, of a template. Only matching templates will be returned in the list.
  'status': new MessenteApi.WhatsappTemplateStatus() // WhatsappTemplateStatus | A filter for returning only templates matching a specific status.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listWhatsappTemplates(waba_id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waba_id** | **String**| The ID of the WABA | 
 **limit** | **Number**| The number of templates to return in the list. Although the max size is 500, for large datasets it is recommended to use a lower limit and instead use pagination to avoid potential timeouts. Defaults to 25. | [optional] [default to 25]
 **before** | **String**| A cursor point used for a paginated request to indicate the template to paginate backwards from. | [optional] 
 **after** | **String**| A cursor point used for a paginated request to indicate the template to paginate forwards from. | [optional] 
 **category** | [**WhatsappTemplateCategory**](.md)| A filter for returning only templates matching a specific category. | [optional] 
 **content** | **String**| A search filter representing the content of a template. Only matching templates will be returned in the list. | [optional] 
 **language** | **String**| A filter  for returning only templates matching a specific language code. A list of supported languages is available in the [WhatsApp documentation](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/)  | [optional] 
 **name** | **String**| A search filter representing the name, either full or partial, of a template. Only matching templates will be returned in the list. | [optional] 
 **status** | [**WhatsappTemplateStatus**](.md)| A filter for returning only templates matching a specific status. | [optional] 

### Return type

[**WhatsappListTemplatesResponse**](WhatsappListTemplatesResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWhatsappTemplate"></a>
# **updateWhatsappTemplate**
> AnyJsonResponse updateWhatsappTemplate(waba_id, template_id, whatsapp_update_template_request)

Updates a WhatsApp template

### Example
```javascript
var MessenteApi = require('messente_api');
var defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new MessenteApi.WhatsAppTemplatesApi();
var waba_id = "waba_id_example"; // String | The ID of the WABA
var template_id = "template_id_example"; // String | The ID of the template to update
var whatsapp_update_template_request = new MessenteApi.WhatsappUpdateTemplateRequest(); // WhatsappUpdateTemplateRequest | The template data to be updated
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateWhatsappTemplate(waba_id, template_id, whatsapp_update_template_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waba_id** | **String**| The ID of the WABA | 
 **template_id** | **String**| The ID of the template to update | 
 **whatsapp_update_template_request** | [**WhatsappUpdateTemplateRequest**](WhatsappUpdateTemplateRequest.md)| The template data to be updated | 

### Return type

[**AnyJsonResponse**](AnyJsonResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

