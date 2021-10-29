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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/StatisticsReport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatisticsReport'));
  } else {
    // Browser globals (root is window)
    if (!root.MessenteApi) {
      root.MessenteApi = {};
    }
    root.MessenteApi.StatisticsReportSuccess = factory(root.MessenteApi.ApiClient, root.MessenteApi.StatisticsReport);
  }
}(this, function(ApiClient, StatisticsReport) {
  'use strict';



  /**
   * The StatisticsReportSuccess model module.
   * @module model/StatisticsReportSuccess
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>StatisticsReportSuccess</code>.
   * A container for statistics reports
   * @alias module:model/StatisticsReportSuccess
   * @class
   * @param reports {Array.<module:model/StatisticsReport>} Array of report objects
   */
  var exports = function(reports) {
    var _this = this;

    _this['reports'] = reports;
  };

  /**
   * Constructs a <code>StatisticsReportSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticsReportSuccess} obj Optional instance to populate.
   * @return {module:model/StatisticsReportSuccess} The populated <code>StatisticsReportSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('reports')) {
        obj['reports'] = ApiClient.convertToType(data['reports'], [StatisticsReport]);
      }
    }
    return obj;
  }

  /**
   * Array of report objects
   * @member {Array.<module:model/StatisticsReport>} reports
   */
  exports.prototype['reports'] = undefined;



  return exports;
}));


