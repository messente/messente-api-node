# MessenteApi.OmnimessageMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **String** | Phone number or alphanumeric sender name | [optional] 
**validity** | **Number** | After how many minutes this channel is considered as failed and the next channel is attempted | [optional] 
**ttl** | **Number** | After how many seconds this channel is considered as failed and the next channel is attempted.       Only one of \&quot;ttl\&quot; and \&quot;validity\&quot; can be used. | [optional] 
**text** | **String** | Plaintext content for Telegram | 
**imageUrl** | **String** | URL for the embedded image. Mutually exclusive with \&quot;document_url\&quot; and \&quot;audio_url\&quot; | [optional] 
**buttonUrl** | **String** | URL of the button, must be specified along with &#39;&#39;text&#39;&#39;, &#39;&#39;button_text&#39;&#39; and &#39;&#39;image_url&#39;&#39; (optional) | [optional] 
**buttonText** | **String** | Must be specified along with &#39;&#39;text&#39;&#39;, &#39;&#39;button_url&#39;&#39;, &#39;&#39;button_text&#39;&#39;, &#39;&#39;image_url&#39;&#39; (optional) | [optional] 
**channel** | **String** | The channel used to deliver the message | [optional] [default to &#39;telegram&#39;]
**autoconvert** | **String** | Defines how non-GSM characters will be treated:    - \&quot;on\&quot; Use replacement settings from the account&#39;s [API Auto Replace settings page](https://dashboard.messente.com/api-settings/auto-replace) (default)   - \&quot;full\&quot; All non GSM 03.38 characters will be replaced with suitable alternatives   - \&quot;off\&quot; Message content is not modified in any way | [optional] 
**udh** | **String** | hex-encoded string containing SMS UDH | [optional] 
**template** | [**WhatsAppTemplate**](WhatsAppTemplate.md) |  | [optional] 
**documentUrl** | **String** | URL for the embedded image. Mutually exclusive with \&quot;audio_url\&quot; and \&quot;image_url\&quot; | [optional] 
**audioUrl** | **String** | URL for the embedded image. Mutually exclusive with \&quot;document_url\&quot; and \&quot;image_url\&quot; | [optional] 



## Enum: ChannelEnum


* `telegram` (value: `"telegram"`)





## Enum: AutoconvertEnum


* `full` (value: `"full"`)

* `on` (value: `"on"`)

* `off` (value: `"off"`)




