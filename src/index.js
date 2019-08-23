/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services. Use Messente API library to send and receive SMS, Viber, WhatsApp and Telegram messages, blacklist phone numbers to make sure you're not sending any unwanted messages, manage contacts and groups.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 1.1.0
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Channel', 'model/ContactEnvelope', 'model/ContactFields', 'model/ContactListEnvelope', 'model/ContactUpdateFields', 'model/DeliveryReportResponse', 'model/DeliveryResult', 'model/EmptyObject', 'model/ErrorCodeOmnichannel', 'model/ErrorCodeOmnichannelMachine', 'model/ErrorCodePhonebook', 'model/ErrorItemOmnichannel', 'model/ErrorItemPhonebook', 'model/ErrorOmnichannel', 'model/ErrorPhonebook', 'model/ErrorTitleOmnichannel', 'model/ErrorTitlePhonebook', 'model/FetchBlacklistSuccess', 'model/GroupEnvelope', 'model/GroupListEnvelope', 'model/GroupName', 'model/GroupResponseFields', 'model/MessageResult', 'model/NumberToBlacklist', 'model/OmniMessageCreateSuccessResponse', 'model/Omnimessage', 'model/SMS', 'model/Status', 'model/Telegram', 'model/TextStore', 'model/Viber', 'model/WhatsApp', 'model/WhatsAppAudio', 'model/WhatsAppDocument', 'model/WhatsAppImage', 'model/WhatsAppText', 'api/BlacklistApi', 'api/ContactsApi', 'api/DeliveryReportApi', 'api/GroupsApi', 'api/OmnimessageApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Channel'), require('./model/ContactEnvelope'), require('./model/ContactFields'), require('./model/ContactListEnvelope'), require('./model/ContactUpdateFields'), require('./model/DeliveryReportResponse'), require('./model/DeliveryResult'), require('./model/EmptyObject'), require('./model/ErrorCodeOmnichannel'), require('./model/ErrorCodeOmnichannelMachine'), require('./model/ErrorCodePhonebook'), require('./model/ErrorItemOmnichannel'), require('./model/ErrorItemPhonebook'), require('./model/ErrorOmnichannel'), require('./model/ErrorPhonebook'), require('./model/ErrorTitleOmnichannel'), require('./model/ErrorTitlePhonebook'), require('./model/FetchBlacklistSuccess'), require('./model/GroupEnvelope'), require('./model/GroupListEnvelope'), require('./model/GroupName'), require('./model/GroupResponseFields'), require('./model/MessageResult'), require('./model/NumberToBlacklist'), require('./model/OmniMessageCreateSuccessResponse'), require('./model/Omnimessage'), require('./model/SMS'), require('./model/Status'), require('./model/Telegram'), require('./model/TextStore'), require('./model/Viber'), require('./model/WhatsApp'), require('./model/WhatsAppAudio'), require('./model/WhatsAppDocument'), require('./model/WhatsAppImage'), require('./model/WhatsAppText'), require('./api/BlacklistApi'), require('./api/ContactsApi'), require('./api/DeliveryReportApi'), require('./api/GroupsApi'), require('./api/OmnimessageApi'));
  }
}(function(ApiClient, Channel, ContactEnvelope, ContactFields, ContactListEnvelope, ContactUpdateFields, DeliveryReportResponse, DeliveryResult, EmptyObject, ErrorCodeOmnichannel, ErrorCodeOmnichannelMachine, ErrorCodePhonebook, ErrorItemOmnichannel, ErrorItemPhonebook, ErrorOmnichannel, ErrorPhonebook, ErrorTitleOmnichannel, ErrorTitlePhonebook, FetchBlacklistSuccess, GroupEnvelope, GroupListEnvelope, GroupName, GroupResponseFields, MessageResult, NumberToBlacklist, OmniMessageCreateSuccessResponse, Omnimessage, SMS, Status, Telegram, TextStore, Viber, WhatsApp, WhatsAppAudio, WhatsAppDocument, WhatsAppImage, WhatsAppText, BlacklistApi, ContactsApi, DeliveryReportApi, GroupsApi, OmnimessageApi) {
  'use strict';

  /**
   * Send and receive SMS, Viber and WhatsApp messages, blacklist phone numbers to make sure you&#39;re not sending any unwanted messages, manage contacts and groups..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MessenteApi = require('index'); // See note below*.
   * var xxxSvc = new MessenteApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MessenteApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MessenteApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MessenteApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel: Channel,
    /**
     * The ContactEnvelope model constructor.
     * @property {module:model/ContactEnvelope}
     */
    ContactEnvelope: ContactEnvelope,
    /**
     * The ContactFields model constructor.
     * @property {module:model/ContactFields}
     */
    ContactFields: ContactFields,
    /**
     * The ContactListEnvelope model constructor.
     * @property {module:model/ContactListEnvelope}
     */
    ContactListEnvelope: ContactListEnvelope,
    /**
     * The ContactUpdateFields model constructor.
     * @property {module:model/ContactUpdateFields}
     */
    ContactUpdateFields: ContactUpdateFields,
    /**
     * The DeliveryReportResponse model constructor.
     * @property {module:model/DeliveryReportResponse}
     */
    DeliveryReportResponse: DeliveryReportResponse,
    /**
     * The DeliveryResult model constructor.
     * @property {module:model/DeliveryResult}
     */
    DeliveryResult: DeliveryResult,
    /**
     * The EmptyObject model constructor.
     * @property {module:model/EmptyObject}
     */
    EmptyObject: EmptyObject,
    /**
     * The ErrorCodeOmnichannel model constructor.
     * @property {module:model/ErrorCodeOmnichannel}
     */
    ErrorCodeOmnichannel: ErrorCodeOmnichannel,
    /**
     * The ErrorCodeOmnichannelMachine model constructor.
     * @property {module:model/ErrorCodeOmnichannelMachine}
     */
    ErrorCodeOmnichannelMachine: ErrorCodeOmnichannelMachine,
    /**
     * The ErrorCodePhonebook model constructor.
     * @property {module:model/ErrorCodePhonebook}
     */
    ErrorCodePhonebook: ErrorCodePhonebook,
    /**
     * The ErrorItemOmnichannel model constructor.
     * @property {module:model/ErrorItemOmnichannel}
     */
    ErrorItemOmnichannel: ErrorItemOmnichannel,
    /**
     * The ErrorItemPhonebook model constructor.
     * @property {module:model/ErrorItemPhonebook}
     */
    ErrorItemPhonebook: ErrorItemPhonebook,
    /**
     * The ErrorOmnichannel model constructor.
     * @property {module:model/ErrorOmnichannel}
     */
    ErrorOmnichannel: ErrorOmnichannel,
    /**
     * The ErrorPhonebook model constructor.
     * @property {module:model/ErrorPhonebook}
     */
    ErrorPhonebook: ErrorPhonebook,
    /**
     * The ErrorTitleOmnichannel model constructor.
     * @property {module:model/ErrorTitleOmnichannel}
     */
    ErrorTitleOmnichannel: ErrorTitleOmnichannel,
    /**
     * The ErrorTitlePhonebook model constructor.
     * @property {module:model/ErrorTitlePhonebook}
     */
    ErrorTitlePhonebook: ErrorTitlePhonebook,
    /**
     * The FetchBlacklistSuccess model constructor.
     * @property {module:model/FetchBlacklistSuccess}
     */
    FetchBlacklistSuccess: FetchBlacklistSuccess,
    /**
     * The GroupEnvelope model constructor.
     * @property {module:model/GroupEnvelope}
     */
    GroupEnvelope: GroupEnvelope,
    /**
     * The GroupListEnvelope model constructor.
     * @property {module:model/GroupListEnvelope}
     */
    GroupListEnvelope: GroupListEnvelope,
    /**
     * The GroupName model constructor.
     * @property {module:model/GroupName}
     */
    GroupName: GroupName,
    /**
     * The GroupResponseFields model constructor.
     * @property {module:model/GroupResponseFields}
     */
    GroupResponseFields: GroupResponseFields,
    /**
     * The MessageResult model constructor.
     * @property {module:model/MessageResult}
     */
    MessageResult: MessageResult,
    /**
     * The NumberToBlacklist model constructor.
     * @property {module:model/NumberToBlacklist}
     */
    NumberToBlacklist: NumberToBlacklist,
    /**
     * The OmniMessageCreateSuccessResponse model constructor.
     * @property {module:model/OmniMessageCreateSuccessResponse}
     */
    OmniMessageCreateSuccessResponse: OmniMessageCreateSuccessResponse,
    /**
     * The Omnimessage model constructor.
     * @property {module:model/Omnimessage}
     */
    Omnimessage: Omnimessage,
    /**
     * The SMS model constructor.
     * @property {module:model/SMS}
     */
    SMS: SMS,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The Telegram model constructor.
     * @property {module:model/Telegram}
     */
    Telegram: Telegram,
    /**
     * The TextStore model constructor.
     * @property {module:model/TextStore}
     */
    TextStore: TextStore,
    /**
     * The Viber model constructor.
     * @property {module:model/Viber}
     */
    Viber: Viber,
    /**
     * The WhatsApp model constructor.
     * @property {module:model/WhatsApp}
     */
    WhatsApp: WhatsApp,
    /**
     * The WhatsAppAudio model constructor.
     * @property {module:model/WhatsAppAudio}
     */
    WhatsAppAudio: WhatsAppAudio,
    /**
     * The WhatsAppDocument model constructor.
     * @property {module:model/WhatsAppDocument}
     */
    WhatsAppDocument: WhatsAppDocument,
    /**
     * The WhatsAppImage model constructor.
     * @property {module:model/WhatsAppImage}
     */
    WhatsAppImage: WhatsAppImage,
    /**
     * The WhatsAppText model constructor.
     * @property {module:model/WhatsAppText}
     */
    WhatsAppText: WhatsAppText,
    /**
     * The BlacklistApi service constructor.
     * @property {module:api/BlacklistApi}
     */
    BlacklistApi: BlacklistApi,
    /**
     * The ContactsApi service constructor.
     * @property {module:api/ContactsApi}
     */
    ContactsApi: ContactsApi,
    /**
     * The DeliveryReportApi service constructor.
     * @property {module:api/DeliveryReportApi}
     */
    DeliveryReportApi: DeliveryReportApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The OmnimessageApi service constructor.
     * @property {module:api/OmnimessageApi}
     */
    OmnimessageApi: OmnimessageApi
  };

  return exports;
}));
