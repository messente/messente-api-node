# Messente API Library

- Messente API version: 2.0.0
- NPM package version: 2.4.0

[Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you&#39;re not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.

## Installation

Install Messente API library with `npm install messente_api --save`.

## Features

Messente API has the following features:

- Omnichannel ([external docs](https://messente.com/documentation/omnichannel-api)),
- Phonebook ([external docs](https://messente.com/documentation/phonebook-api)).

Messente API Library provides the operations described below to access the features.

### AccountBalanceApi

1. Get account balance [`getAccountBalance`](docs/AccountBalanceApi.md#getaccountbalance)
1. Get account balance [`getAccountBalanceUsingPost`](docs/AccountBalanceApi.md#getaccountbalanceusingpost)

### BlacklistApi

1. Adds a phone number to the blacklist [`addToBlacklist`](docs/BlacklistApi.md#addtoblacklist)
1. Deletes a phone number from the blacklist [`deleteFromBlacklist`](docs/BlacklistApi.md#deletefromblacklist)
1. Returns all blacklisted phone numbers [`fetchBlacklist`](docs/BlacklistApi.md#fetchblacklist)
1. Checks if a phone number is blacklisted [`isBlacklisted`](docs/BlacklistApi.md#isblacklisted)

### BulkMessagingApi

1. Sends a bulk Omnimessage [`sendBulkOmnimessage`](docs/BulkMessagingApi.md#sendbulkomnimessage)

### ContactsApi

1. Adds a contact to a group [`addContactToGroup`](docs/ContactsApi.md#addcontacttogroup)
1. Creates a new contact [`createContact`](docs/ContactsApi.md#createcontact)
1. Deletes a contact [`deleteContact`](docs/ContactsApi.md#deletecontact)
1. Lists a contact [`fetchContact`](docs/ContactsApi.md#fetchcontact)
1. Lists groups of a contact [`fetchContactGroups`](docs/ContactsApi.md#fetchcontactgroups)
1. Returns all contacts [`fetchContacts`](docs/ContactsApi.md#fetchcontacts)
1. Removes a contact from a group [`removeContactFromGroup`](docs/ContactsApi.md#removecontactfromgroup)
1. Updates a contact [`updateContact`](docs/ContactsApi.md#updatecontact)

### DeliveryReportApi

1. Retrieves the delivery report for the Omnimessage [`retrieveDeliveryReport`](docs/DeliveryReportApi.md#retrievedeliveryreport)

### GroupsApi

1. Creates a new group with the provided name [`createGroup`](docs/GroupsApi.md#creategroup)
1. Deletes a group [`deleteGroup`](docs/GroupsApi.md#deletegroup)
1. Lists a group [`fetchGroup`](docs/GroupsApi.md#fetchgroup)
1. Returns all groups [`fetchGroups`](docs/GroupsApi.md#fetchgroups)
1. Updates a group with the provided name [`updateGroup`](docs/GroupsApi.md#updategroup)

### NumberLookupApi

1. Requests info about phone numbers [`fetchInfo`](docs/NumberLookupApi.md#fetchinfo)

### NumberVerificationApi

1. verify number [`verifyNumber`](docs/NumberVerificationApi.md#verifynumber)
1. verified the PIN code entered by the user. [`verifyPin`](docs/NumberVerificationApi.md#verifypin)

### OmnimessageApi

1. Cancels a scheduled Omnimessage [`cancelScheduledMessage`](docs/OmnimessageApi.md#cancelscheduledmessage)
1. Sends an Omnimessage [`sendOmnimessage`](docs/OmnimessageApi.md#sendomnimessage)

### PricingApi

1. Get pricelist for account [`getPricelist`](docs/PricingApi.md#getpricelist)
1. Get pricing for a specific country [`getPrices`](docs/PricingApi.md#getprices)

### StatisticsApi

1. Requests statistics reports for each country [`createStatisticsReport`](docs/StatisticsApi.md#createstatisticsreport)

### WhatsAppTemplatesApi

1. Creates a WhatsApp template [`createWhatsappTemplate`](docs/WhatsAppTemplatesApi.md#createwhatsapptemplate)
1. Deletes a WhatsApp template [`deleteWhatsappTemplate`](docs/WhatsAppTemplatesApi.md#deletewhatsapptemplate)
1. Requests a WhatsApp template with the given ID [`getWhatsappTemplateById`](docs/WhatsAppTemplatesApi.md#getwhatsapptemplatebyid)
1. Requests a list of WhatsApp templates [`listWhatsappTemplates`](docs/WhatsAppTemplatesApi.md#listwhatsapptemplates)
1. Updates a WhatsApp template [`updateWhatsappTemplate`](docs/WhatsAppTemplatesApi.md#updatewhatsapptemplate)

## Auth

**Type**: HTTP basic authentication

Read the [external getting-started article](https://messente.com/documentation/getting-started) which explains API keys and Sender ID logic.

## Getting started: sending an omnimessage

```js
const MessenteApi = require('messente_api');

const defaultClient = MessenteApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
const basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YOUR_MESSENTE_API_PASSWORD';

const api = new MessenteApi.OmnimessageApi();

const viber = MessenteApi.Viber.constructFromObject({
  text: 'Hello Viber!',
  sender: 'Messente',
});

const sms = MessenteApi.SMS.constructFromObject({
  text: 'Hello SMS!',
});

const whatsAppParameters = [MessenteApi.WhatsAppParameter.constructFromObject({type: 'text', text: 'hello whatsapp'})];
const whatsAppComponent = MessenteApi.WhatsAppComponent.constructFromObject({type: 'body', parameters: whatsAppParameters});
const whatsAppTemplate = MessenteApi.WhatsAppTemplate.constructFromObject({
  name: '<template_name>',
  language: new MessenteApi.WhatsAppLanguage(code='<language_code>'),
  components: [whatsAppComponent],
});

const whatsapp = MessenteApi.WhatsApp.constructFromObject({
  sender: "<sender name (optional)>",
  template: whatsAppTemplate,
});

const omnimessage = MessenteApi.Omnimessage.constructFromObject({
  messages: [whatsapp, viber, sms],
  to: '<recipient_phone_number>',
});

api.sendOmnimessage(omnimessage, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
});

```

## License

[Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

## Terms

[https://messente.com/terms-and-conditions](https://messente.com/terms-and-conditions)
