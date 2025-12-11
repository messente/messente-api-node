# MessenteApi.Rcs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **String** | The channel used to deliver the message | [optional] [default to &#39;rcs&#39;]
**sender** | **String** | Phone number or alphanumeric sender name | 
**validity** | **Number** | After how many minutes this channel is considered as failed and the next channel is attempted.Only one of \&quot;ttl\&quot; and \&quot;validity\&quot; can be used. | [optional] 
**ttl** | **Number** | After how many seconds this channel is considered as failed and the next channel is attempted. Only one of \&quot;ttl\&quot; and \&quot;validity\&quot; can be used. | [optional] 
**text** | **String** | Text content of the RCS message | [optional] 
**suggestions** | [**[RcsSuggestion]**](RcsSuggestion.md) | List of suggestions to include with the message | [optional] 
**rich_card** | [**RcsRichCard**](RcsRichCard.md) |  | [optional] 
**content_info** | [**RcsContentInfo**](RcsContentInfo.md) |  | [optional] 


<a name="ChannelEnum"></a>
## Enum: ChannelEnum


* `rcs` (value: `"rcs"`)




