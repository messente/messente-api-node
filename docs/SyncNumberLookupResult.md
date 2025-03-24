# MessenteApi.SyncNumberLookupResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | Phone number in e.164 format | 
**roaming** | **Boolean** | Indicates if a number is roaming | [optional] 
**ported** | **Boolean** | Indicates if a number is ported | [optional] 
**roaming_network** | [**MobileNetwork**](MobileNetwork.md) |  | [optional] 
**current_network** | [**MobileNetwork**](MobileNetwork.md) |  | [optional] 
**original_network** | [**MobileNetwork**](MobileNetwork.md) |  | [optional] 
**ported_network** | [**MobileNetwork**](MobileNetwork.md) |  | [optional] 
**status** | **String** | Status of the phone number | [optional] 
**error** | **Object** | Indicates if any error occurred while handling the request | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ON` (value: `"ON"`)

* `OFF` (value: `"OFF"`)

* `INVALID` (value: `"INVALID"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




