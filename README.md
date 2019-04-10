# Messente API Library

- Messente API version: 0.0.1
- NPM package version: 

[Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you&#39;re not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.

## Installation

Install Messente API library with `npm install  --save`.

## Features

Messente API has the following features:

- Omnichannel ([external docs](https://messente.com/documentation/omnichannel-api)),
- Phonebook ([external docs](https://messente.com/documentation/phonebook-api)).

Messente API Library provides the operations described below to access the features.

### BlacklistApi

1. Adds a phone number to the blacklist. [`addToBlacklist`](BlacklistApi.md#addtoblacklist)
1. Deletes a phone number from the blacklist. [`deleteFromBlacklist`](BlacklistApi.md#deletefromblacklist)
1. Returns all blacklisted phone numbers. [`fetchBlacklist`](BlacklistApi.md#fetchblacklist)
1. Checks if a phone number is blacklisted. [`isBlacklisted`](BlacklistApi.md#isblacklisted)

### ContactsApi

1. Adds a contact to a group. [`addContactToGroup`](ContactsApi.md#addcontacttogroup)
1. Creates a new contact. [`createContact`](ContactsApi.md#createcontact)
1. Deletes a contact. [`deleteContact`](ContactsApi.md#deletecontact)
1. Lists a contact. [`fetchContact`](ContactsApi.md#fetchcontact)
1. Lists groups of a contact. [`fetchContactGroups`](ContactsApi.md#fetchcontactgroups)
1. Returns all contacts. [`fetchContacts`](ContactsApi.md#fetchcontacts)
1. Removes a contact from a group. [`removeContactFromGroup`](ContactsApi.md#removecontactfromgroup)
1. Updates a contact. [`updateContact`](ContactsApi.md#updatecontact)

### DeliveryReportApi

1. Retrieves the delivery report for the Omnimessage. [`retrieveDeliveryReport`](DeliveryReportApi.md#retrievedeliveryreport)

### GroupsApi

1. Creates a new group with the provided name. [`createGroup`](GroupsApi.md#creategroup)
1. Deletes a group. [`deleteGroup`](GroupsApi.md#deletegroup)
1. Lists a group. [`fetchGroup`](GroupsApi.md#fetchgroup)
1. Returns all groups. [`fetchGroups`](GroupsApi.md#fetchgroups)
1. Updates a group with the provided name. [`updateGroup`](GroupsApi.md#updategroup)

### OmnimessageApi

1. Cancels a scheduled Omnimessage. [`cancelScheduledMessage`](OmnimessageApi.md#cancelscheduledmessage)
1. Sends an Omnimessage. [`sendOmnimessage`](OmnimessageApi.md#sendomnimessage)

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

const whatsAppText = MessenteApi.WhatsAppText.constructFromObject({
  body: 'Hello WhatsApp!',
  preview_url: false,
});


const whatsapp = MessenteApi.WhatsApp.constructFromObject({
  text: whatsAppText,
});

const omnimessage = MessenteApi.Omnimessage.constructFromObject({
  messages: [whatsapp, viber, sms],
  to: '<phone number in e.164 format',
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

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

## Terms

[https://messente.com/terms-and-conditions](https://messente.com/terms-and-conditions)
