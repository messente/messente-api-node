# MessenteApi.StatisticsApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStatisticsReport**](StatisticsApi.md#createStatisticsReport) | **POST** /statistics/reports | Requests statistics reports for each country



## createStatisticsReport

> StatisticsReportSuccess createStatisticsReport(statistics_report_settings)

Requests statistics reports for each country

### Example

```javascript
import MessenteApi from 'messente_api';
let defaultClient = MessenteApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MessenteApi.StatisticsApi();
let statistics_report_settings = {"start_date":"2017-01-01","end_date":"2019-06-20","message_types":["sms"]}; // StatisticsReportSettings | Settings for statistics report
apiInstance.createStatisticsReport(statistics_report_settings, (error, data, response) => {
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
 **statistics_report_settings** | [**StatisticsReportSettings**](StatisticsReportSettings.md)| Settings for statistics report | 

### Return type

[**StatisticsReportSuccess**](StatisticsReportSuccess.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

