/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * OpenAPI spec version: 2.0.0
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
    define(['ApiClient', 'model/BulkOmniMessageCreateSuccessResponse', 'model/BulkOmnimessage', 'model/Channel', 'model/ContactEnvelope', 'model/ContactFields', 'model/ContactListEnvelope', 'model/ContactResponseFields', 'model/ContactUpdateFields', 'model/DeliveryReportResponse', 'model/DeliveryResult', 'model/EmptyObject', 'model/ErrorCodeOmnichannel', 'model/ErrorCodeOmnichannelMachine', 'model/ErrorCodePhonebook', 'model/ErrorCodeStatistics', 'model/ErrorItemNumberLookup', 'model/ErrorItemNumberLookupError', 'model/ErrorItemOmnichannel', 'model/ErrorItemPhonebook', 'model/ErrorItemStatistics', 'model/ErrorNumberLookup', 'model/ErrorOmnichannel', 'model/ErrorPhonebook', 'model/ErrorStatistics', 'model/ErrorTitleOmnichannel', 'model/ErrorTitlePhonebook', 'model/FetchBlacklistSuccess', 'model/GroupEnvelope', 'model/GroupListEnvelope', 'model/GroupName', 'model/GroupResponseFields', 'model/MessageResult', 'model/MobileNetwork', 'model/NumberToBlacklist', 'model/NumbersToInvestigate', 'model/OmniMessageCreateSuccessResponse', 'model/Omnimessage', 'model/Priority', 'model/SMS', 'model/StatisticsReport', 'model/StatisticsReportSettings', 'model/StatisticsReportSuccess', 'model/Status', 'model/SyncNumberLookupResult', 'model/SyncNumberLookupSuccess', 'model/Telegram', 'model/TextStore', 'model/Viber', 'model/WhatsApp', 'model/WhatsAppComponent', 'model/WhatsAppCurrency', 'model/WhatsAppDatetime', 'model/WhatsAppLanguage', 'model/WhatsAppMedia', 'model/WhatsAppParameter', 'model/WhatsAppTemplate', 'api/BlacklistApi', 'api/ContactsApi', 'api/DeliveryReportApi', 'api/GroupsApi', 'api/NumberLookupApi', 'api/OmnimessageApi', 'api/StatisticsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BulkOmniMessageCreateSuccessResponse'), require('./model/BulkOmnimessage'), require('./model/Channel'), require('./model/ContactEnvelope'), require('./model/ContactFields'), require('./model/ContactListEnvelope'), require('./model/ContactResponseFields'), require('./model/ContactUpdateFields'), require('./model/DeliveryReportResponse'), require('./model/DeliveryResult'), require('./model/EmptyObject'), require('./model/ErrorCodeOmnichannel'), require('./model/ErrorCodeOmnichannelMachine'), require('./model/ErrorCodePhonebook'), require('./model/ErrorCodeStatistics'), require('./model/ErrorItemNumberLookup'), require('./model/ErrorItemNumberLookupError'), require('./model/ErrorItemOmnichannel'), require('./model/ErrorItemPhonebook'), require('./model/ErrorItemStatistics'), require('./model/ErrorNumberLookup'), require('./model/ErrorOmnichannel'), require('./model/ErrorPhonebook'), require('./model/ErrorStatistics'), require('./model/ErrorTitleOmnichannel'), require('./model/ErrorTitlePhonebook'), require('./model/FetchBlacklistSuccess'), require('./model/GroupEnvelope'), require('./model/GroupListEnvelope'), require('./model/GroupName'), require('./model/GroupResponseFields'), require('./model/MessageResult'), require('./model/MobileNetwork'), require('./model/NumberToBlacklist'), require('./model/NumbersToInvestigate'), require('./model/OmniMessageCreateSuccessResponse'), require('./model/Omnimessage'), require('./model/Priority'), require('./model/SMS'), require('./model/StatisticsReport'), require('./model/StatisticsReportSettings'), require('./model/StatisticsReportSuccess'), require('./model/Status'), require('./model/SyncNumberLookupResult'), require('./model/SyncNumberLookupSuccess'), require('./model/Telegram'), require('./model/TextStore'), require('./model/Viber'), require('./model/WhatsApp'), require('./model/WhatsAppComponent'), require('./model/WhatsAppCurrency'), require('./model/WhatsAppDatetime'), require('./model/WhatsAppLanguage'), require('./model/WhatsAppMedia'), require('./model/WhatsAppParameter'), require('./model/WhatsAppTemplate'), require('./api/BlacklistApi'), require('./api/ContactsApi'), require('./api/DeliveryReportApi'), require('./api/GroupsApi'), require('./api/NumberLookupApi'), require('./api/OmnimessageApi'), require('./api/StatisticsApi'));
  }
}(function(ApiClient, BulkOmniMessageCreateSuccessResponse, BulkOmnimessage, Channel, ContactEnvelope, ContactFields, ContactListEnvelope, ContactResponseFields, ContactUpdateFields, DeliveryReportResponse, DeliveryResult, EmptyObject, ErrorCodeOmnichannel, ErrorCodeOmnichannelMachine, ErrorCodePhonebook, ErrorCodeStatistics, ErrorItemNumberLookup, ErrorItemNumberLookupError, ErrorItemOmnichannel, ErrorItemPhonebook, ErrorItemStatistics, ErrorNumberLookup, ErrorOmnichannel, ErrorPhonebook, ErrorStatistics, ErrorTitleOmnichannel, ErrorTitlePhonebook, FetchBlacklistSuccess, GroupEnvelope, GroupListEnvelope, GroupName, GroupResponseFields, MessageResult, MobileNetwork, NumberToBlacklist, NumbersToInvestigate, OmniMessageCreateSuccessResponse, Omnimessage, Priority, SMS, StatisticsReport, StatisticsReportSettings, StatisticsReportSuccess, Status, SyncNumberLookupResult, SyncNumberLookupSuccess, Telegram, TextStore, Viber, WhatsApp, WhatsAppComponent, WhatsAppCurrency, WhatsAppDatetime, WhatsAppLanguage, WhatsAppMedia, WhatsAppParameter, WhatsAppTemplate, BlacklistApi, ContactsApi, DeliveryReportApi, GroupsApi, NumberLookupApi, OmnimessageApi, StatisticsApi) {
  'use strict';

  /**
   * Send and receive SMS, Viber, Telegram and WhatsApp messages, blacklist phone numbers to make sure you&#39;re not sending any unwanted messages, manage contacts and groups..<br>
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
   * @version 2.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BulkOmniMessageCreateSuccessResponse model constructor.
     * @property {module:model/BulkOmniMessageCreateSuccessResponse}
     */
    BulkOmniMessageCreateSuccessResponse: BulkOmniMessageCreateSuccessResponse,
    /**
     * The BulkOmnimessage model constructor.
     * @property {module:model/BulkOmnimessage}
     */
    BulkOmnimessage: BulkOmnimessage,
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
     * The ContactResponseFields model constructor.
     * @property {module:model/ContactResponseFields}
     */
    ContactResponseFields: ContactResponseFields,
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
     * The ErrorCodeStatistics model constructor.
     * @property {module:model/ErrorCodeStatistics}
     */
    ErrorCodeStatistics: ErrorCodeStatistics,
    /**
     * The ErrorItemNumberLookup model constructor.
     * @property {module:model/ErrorItemNumberLookup}
     */
    ErrorItemNumberLookup: ErrorItemNumberLookup,
    /**
     * The ErrorItemNumberLookupError model constructor.
     * @property {module:model/ErrorItemNumberLookupError}
     */
    ErrorItemNumberLookupError: ErrorItemNumberLookupError,
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
     * The ErrorItemStatistics model constructor.
     * @property {module:model/ErrorItemStatistics}
     */
    ErrorItemStatistics: ErrorItemStatistics,
    /**
     * The ErrorNumberLookup model constructor.
     * @property {module:model/ErrorNumberLookup}
     */
    ErrorNumberLookup: ErrorNumberLookup,
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
     * The ErrorStatistics model constructor.
     * @property {module:model/ErrorStatistics}
     */
    ErrorStatistics: ErrorStatistics,
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
     * The MobileNetwork model constructor.
     * @property {module:model/MobileNetwork}
     */
    MobileNetwork: MobileNetwork,
    /**
     * The NumberToBlacklist model constructor.
     * @property {module:model/NumberToBlacklist}
     */
    NumberToBlacklist: NumberToBlacklist,
    /**
     * The NumbersToInvestigate model constructor.
     * @property {module:model/NumbersToInvestigate}
     */
    NumbersToInvestigate: NumbersToInvestigate,
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
     * The Priority model constructor.
     * @property {module:model/Priority}
     */
    Priority: Priority,
    /**
     * The SMS model constructor.
     * @property {module:model/SMS}
     */
    SMS: SMS,
    /**
     * The StatisticsReport model constructor.
     * @property {module:model/StatisticsReport}
     */
    StatisticsReport: StatisticsReport,
    /**
     * The StatisticsReportSettings model constructor.
     * @property {module:model/StatisticsReportSettings}
     */
    StatisticsReportSettings: StatisticsReportSettings,
    /**
     * The StatisticsReportSuccess model constructor.
     * @property {module:model/StatisticsReportSuccess}
     */
    StatisticsReportSuccess: StatisticsReportSuccess,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The SyncNumberLookupResult model constructor.
     * @property {module:model/SyncNumberLookupResult}
     */
    SyncNumberLookupResult: SyncNumberLookupResult,
    /**
     * The SyncNumberLookupSuccess model constructor.
     * @property {module:model/SyncNumberLookupSuccess}
     */
    SyncNumberLookupSuccess: SyncNumberLookupSuccess,
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
     * The WhatsAppComponent model constructor.
     * @property {module:model/WhatsAppComponent}
     */
    WhatsAppComponent: WhatsAppComponent,
    /**
     * The WhatsAppCurrency model constructor.
     * @property {module:model/WhatsAppCurrency}
     */
    WhatsAppCurrency: WhatsAppCurrency,
    /**
     * The WhatsAppDatetime model constructor.
     * @property {module:model/WhatsAppDatetime}
     */
    WhatsAppDatetime: WhatsAppDatetime,
    /**
     * The WhatsAppLanguage model constructor.
     * @property {module:model/WhatsAppLanguage}
     */
    WhatsAppLanguage: WhatsAppLanguage,
    /**
     * The WhatsAppMedia model constructor.
     * @property {module:model/WhatsAppMedia}
     */
    WhatsAppMedia: WhatsAppMedia,
    /**
     * The WhatsAppParameter model constructor.
     * @property {module:model/WhatsAppParameter}
     */
    WhatsAppParameter: WhatsAppParameter,
    /**
     * The WhatsAppTemplate model constructor.
     * @property {module:model/WhatsAppTemplate}
     */
    WhatsAppTemplate: WhatsAppTemplate,
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
     * The NumberLookupApi service constructor.
     * @property {module:api/NumberLookupApi}
     */
    NumberLookupApi: NumberLookupApi,
    /**
     * The OmnimessageApi service constructor.
     * @property {module:api/OmnimessageApi}
     */
    OmnimessageApi: OmnimessageApi,
    /**
     * The StatisticsApi service constructor.
     * @property {module:api/StatisticsApi}
     */
    StatisticsApi: StatisticsApi
  };

  return exports;
}));
