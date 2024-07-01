/**
 * Messente API
 * [Messente](https://messente.com) is a global provider of messaging and user verification services.  * Send and receive SMS, Viber, WhatsApp and Telegram messages. * Manage contacts and groups. * Fetch detailed info about phone numbers. * Blacklist phone numbers to make sure you're not sending any unwanted messages.  Messente builds [tools](https://messente.com/documentation) to help organizations connect their services to people anywhere in the world.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Channel from './model/Channel';
import ContactEnvelope from './model/ContactEnvelope';
import ContactFields from './model/ContactFields';
import ContactListEnvelope from './model/ContactListEnvelope';
import ContactResponseFields from './model/ContactResponseFields';
import ContactUpdateFields from './model/ContactUpdateFields';
import DeliveryReportResponse from './model/DeliveryReportResponse';
import DeliveryResult from './model/DeliveryResult';
import ErrorCodeOmnichannel from './model/ErrorCodeOmnichannel';
import ErrorCodeOmnichannelMachine from './model/ErrorCodeOmnichannelMachine';
import ErrorCodePhonebook from './model/ErrorCodePhonebook';
import ErrorCodeStatistics from './model/ErrorCodeStatistics';
import ErrorItemNumberLookup from './model/ErrorItemNumberLookup';
import ErrorItemNumberLookupError from './model/ErrorItemNumberLookupError';
import ErrorItemOmnichannel from './model/ErrorItemOmnichannel';
import ErrorItemPhonebook from './model/ErrorItemPhonebook';
import ErrorItemStatistics from './model/ErrorItemStatistics';
import ErrorNumberLookup from './model/ErrorNumberLookup';
import ErrorOmnichannel from './model/ErrorOmnichannel';
import ErrorPhonebook from './model/ErrorPhonebook';
import ErrorStatistics from './model/ErrorStatistics';
import ErrorTitleOmnichannel from './model/ErrorTitleOmnichannel';
import ErrorTitlePhonebook from './model/ErrorTitlePhonebook';
import FetchBlacklistSuccess from './model/FetchBlacklistSuccess';
import GroupEnvelope from './model/GroupEnvelope';
import GroupListEnvelope from './model/GroupListEnvelope';
import GroupName from './model/GroupName';
import GroupResponseFields from './model/GroupResponseFields';
import MessageResult from './model/MessageResult';
import MobileNetwork from './model/MobileNetwork';
import NumberToBlacklist from './model/NumberToBlacklist';
import NumbersToInvestigate from './model/NumbersToInvestigate';
import OmniMessageCreateSuccessResponse from './model/OmniMessageCreateSuccessResponse';
import Omnimessage from './model/Omnimessage';
import OmnimessageMessagesInner from './model/OmnimessageMessagesInner';
import Priority from './model/Priority';
import SMS from './model/SMS';
import StatisticsReport from './model/StatisticsReport';
import StatisticsReportSettings from './model/StatisticsReportSettings';
import StatisticsReportSuccess from './model/StatisticsReportSuccess';
import Status from './model/Status';
import SyncNumberLookupResult from './model/SyncNumberLookupResult';
import SyncNumberLookupSuccess from './model/SyncNumberLookupSuccess';
import Telegram from './model/Telegram';
import TextStore from './model/TextStore';
import Viber from './model/Viber';
import WhatsApp from './model/WhatsApp';
import WhatsAppComponent from './model/WhatsAppComponent';
import WhatsAppCurrency from './model/WhatsAppCurrency';
import WhatsAppDatetime from './model/WhatsAppDatetime';
import WhatsAppLanguage from './model/WhatsAppLanguage';
import WhatsAppMedia from './model/WhatsAppMedia';
import WhatsAppParameter from './model/WhatsAppParameter';
import WhatsAppTemplate from './model/WhatsAppTemplate';
import BlacklistApi from './api/BlacklistApi';
import ContactsApi from './api/ContactsApi';
import DeliveryReportApi from './api/DeliveryReportApi';
import GroupsApi from './api/GroupsApi';
import NumberLookupApi from './api/NumberLookupApi';
import OmnimessageApi from './api/OmnimessageApi';
import StatisticsApi from './api/StatisticsApi';


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
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel,

    /**
     * The ContactEnvelope model constructor.
     * @property {module:model/ContactEnvelope}
     */
    ContactEnvelope,

    /**
     * The ContactFields model constructor.
     * @property {module:model/ContactFields}
     */
    ContactFields,

    /**
     * The ContactListEnvelope model constructor.
     * @property {module:model/ContactListEnvelope}
     */
    ContactListEnvelope,

    /**
     * The ContactResponseFields model constructor.
     * @property {module:model/ContactResponseFields}
     */
    ContactResponseFields,

    /**
     * The ContactUpdateFields model constructor.
     * @property {module:model/ContactUpdateFields}
     */
    ContactUpdateFields,

    /**
     * The DeliveryReportResponse model constructor.
     * @property {module:model/DeliveryReportResponse}
     */
    DeliveryReportResponse,

    /**
     * The DeliveryResult model constructor.
     * @property {module:model/DeliveryResult}
     */
    DeliveryResult,

    /**
     * The ErrorCodeOmnichannel model constructor.
     * @property {module:model/ErrorCodeOmnichannel}
     */
    ErrorCodeOmnichannel,

    /**
     * The ErrorCodeOmnichannelMachine model constructor.
     * @property {module:model/ErrorCodeOmnichannelMachine}
     */
    ErrorCodeOmnichannelMachine,

    /**
     * The ErrorCodePhonebook model constructor.
     * @property {module:model/ErrorCodePhonebook}
     */
    ErrorCodePhonebook,

    /**
     * The ErrorCodeStatistics model constructor.
     * @property {module:model/ErrorCodeStatistics}
     */
    ErrorCodeStatistics,

    /**
     * The ErrorItemNumberLookup model constructor.
     * @property {module:model/ErrorItemNumberLookup}
     */
    ErrorItemNumberLookup,

    /**
     * The ErrorItemNumberLookupError model constructor.
     * @property {module:model/ErrorItemNumberLookupError}
     */
    ErrorItemNumberLookupError,

    /**
     * The ErrorItemOmnichannel model constructor.
     * @property {module:model/ErrorItemOmnichannel}
     */
    ErrorItemOmnichannel,

    /**
     * The ErrorItemPhonebook model constructor.
     * @property {module:model/ErrorItemPhonebook}
     */
    ErrorItemPhonebook,

    /**
     * The ErrorItemStatistics model constructor.
     * @property {module:model/ErrorItemStatistics}
     */
    ErrorItemStatistics,

    /**
     * The ErrorNumberLookup model constructor.
     * @property {module:model/ErrorNumberLookup}
     */
    ErrorNumberLookup,

    /**
     * The ErrorOmnichannel model constructor.
     * @property {module:model/ErrorOmnichannel}
     */
    ErrorOmnichannel,

    /**
     * The ErrorPhonebook model constructor.
     * @property {module:model/ErrorPhonebook}
     */
    ErrorPhonebook,

    /**
     * The ErrorStatistics model constructor.
     * @property {module:model/ErrorStatistics}
     */
    ErrorStatistics,

    /**
     * The ErrorTitleOmnichannel model constructor.
     * @property {module:model/ErrorTitleOmnichannel}
     */
    ErrorTitleOmnichannel,

    /**
     * The ErrorTitlePhonebook model constructor.
     * @property {module:model/ErrorTitlePhonebook}
     */
    ErrorTitlePhonebook,

    /**
     * The FetchBlacklistSuccess model constructor.
     * @property {module:model/FetchBlacklistSuccess}
     */
    FetchBlacklistSuccess,

    /**
     * The GroupEnvelope model constructor.
     * @property {module:model/GroupEnvelope}
     */
    GroupEnvelope,

    /**
     * The GroupListEnvelope model constructor.
     * @property {module:model/GroupListEnvelope}
     */
    GroupListEnvelope,

    /**
     * The GroupName model constructor.
     * @property {module:model/GroupName}
     */
    GroupName,

    /**
     * The GroupResponseFields model constructor.
     * @property {module:model/GroupResponseFields}
     */
    GroupResponseFields,

    /**
     * The MessageResult model constructor.
     * @property {module:model/MessageResult}
     */
    MessageResult,

    /**
     * The MobileNetwork model constructor.
     * @property {module:model/MobileNetwork}
     */
    MobileNetwork,

    /**
     * The NumberToBlacklist model constructor.
     * @property {module:model/NumberToBlacklist}
     */
    NumberToBlacklist,

    /**
     * The NumbersToInvestigate model constructor.
     * @property {module:model/NumbersToInvestigate}
     */
    NumbersToInvestigate,

    /**
     * The OmniMessageCreateSuccessResponse model constructor.
     * @property {module:model/OmniMessageCreateSuccessResponse}
     */
    OmniMessageCreateSuccessResponse,

    /**
     * The Omnimessage model constructor.
     * @property {module:model/Omnimessage}
     */
    Omnimessage,

    /**
     * The OmnimessageMessagesInner model constructor.
     * @property {module:model/OmnimessageMessagesInner}
     */
    OmnimessageMessagesInner,

    /**
     * The Priority model constructor.
     * @property {module:model/Priority}
     */
    Priority,

    /**
     * The SMS model constructor.
     * @property {module:model/SMS}
     */
    SMS,

    /**
     * The StatisticsReport model constructor.
     * @property {module:model/StatisticsReport}
     */
    StatisticsReport,

    /**
     * The StatisticsReportSettings model constructor.
     * @property {module:model/StatisticsReportSettings}
     */
    StatisticsReportSettings,

    /**
     * The StatisticsReportSuccess model constructor.
     * @property {module:model/StatisticsReportSuccess}
     */
    StatisticsReportSuccess,

    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status,

    /**
     * The SyncNumberLookupResult model constructor.
     * @property {module:model/SyncNumberLookupResult}
     */
    SyncNumberLookupResult,

    /**
     * The SyncNumberLookupSuccess model constructor.
     * @property {module:model/SyncNumberLookupSuccess}
     */
    SyncNumberLookupSuccess,

    /**
     * The Telegram model constructor.
     * @property {module:model/Telegram}
     */
    Telegram,

    /**
     * The TextStore model constructor.
     * @property {module:model/TextStore}
     */
    TextStore,

    /**
     * The Viber model constructor.
     * @property {module:model/Viber}
     */
    Viber,

    /**
     * The WhatsApp model constructor.
     * @property {module:model/WhatsApp}
     */
    WhatsApp,

    /**
     * The WhatsAppComponent model constructor.
     * @property {module:model/WhatsAppComponent}
     */
    WhatsAppComponent,

    /**
     * The WhatsAppCurrency model constructor.
     * @property {module:model/WhatsAppCurrency}
     */
    WhatsAppCurrency,

    /**
     * The WhatsAppDatetime model constructor.
     * @property {module:model/WhatsAppDatetime}
     */
    WhatsAppDatetime,

    /**
     * The WhatsAppLanguage model constructor.
     * @property {module:model/WhatsAppLanguage}
     */
    WhatsAppLanguage,

    /**
     * The WhatsAppMedia model constructor.
     * @property {module:model/WhatsAppMedia}
     */
    WhatsAppMedia,

    /**
     * The WhatsAppParameter model constructor.
     * @property {module:model/WhatsAppParameter}
     */
    WhatsAppParameter,

    /**
     * The WhatsAppTemplate model constructor.
     * @property {module:model/WhatsAppTemplate}
     */
    WhatsAppTemplate,

    /**
    * The BlacklistApi service constructor.
    * @property {module:api/BlacklistApi}
    */
    BlacklistApi,

    /**
    * The ContactsApi service constructor.
    * @property {module:api/ContactsApi}
    */
    ContactsApi,

    /**
    * The DeliveryReportApi service constructor.
    * @property {module:api/DeliveryReportApi}
    */
    DeliveryReportApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:api/GroupsApi}
    */
    GroupsApi,

    /**
    * The NumberLookupApi service constructor.
    * @property {module:api/NumberLookupApi}
    */
    NumberLookupApi,

    /**
    * The OmnimessageApi service constructor.
    * @property {module:api/OmnimessageApi}
    */
    OmnimessageApi,

    /**
    * The StatisticsApi service constructor.
    * @property {module:api/StatisticsApi}
    */
    StatisticsApi
};
