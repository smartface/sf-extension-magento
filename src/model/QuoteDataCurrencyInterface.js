/**
 * Magento Enterprise Edition 2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/QuoteDataCurrencyExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QuoteDataCurrencyExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteDataCurrencyInterface = factory(root.magento.ApiClient, root.magento.QuoteDataCurrencyExtensionInterface);
  }
}(this, function(ApiClient, QuoteDataCurrencyExtensionInterface) {
  'use strict';




  /**
   * The QuoteDataCurrencyInterface model module.
   * @module model/QuoteDataCurrencyInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>QuoteDataCurrencyInterface</code>.
   * Interface CurrencyInterface
   * @alias module:model/QuoteDataCurrencyInterface
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>QuoteDataCurrencyInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuoteDataCurrencyInterface} obj Optional instance to populate.
   * @return {module:model/QuoteDataCurrencyInterface} The populated <code>QuoteDataCurrencyInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('globalCurrencyCode')) {
        obj['globalCurrencyCode'] = ApiClient.convertToType(data['globalCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('baseCurrencyCode')) {
        obj['baseCurrencyCode'] = ApiClient.convertToType(data['baseCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('storeCurrencyCode')) {
        obj['storeCurrencyCode'] = ApiClient.convertToType(data['storeCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('quoteCurrencyCode')) {
        obj['quoteCurrencyCode'] = ApiClient.convertToType(data['quoteCurrencyCode'], 'String');
      }
      if (data.hasOwnProperty('storeToBaseRate')) {
        obj['storeToBaseRate'] = ApiClient.convertToType(data['storeToBaseRate'], 'Number');
      }
      if (data.hasOwnProperty('storeToQuoteRate')) {
        obj['storeToQuoteRate'] = ApiClient.convertToType(data['storeToQuoteRate'], 'Number');
      }
      if (data.hasOwnProperty('baseToGlobalRate')) {
        obj['baseToGlobalRate'] = ApiClient.convertToType(data['baseToGlobalRate'], 'Number');
      }
      if (data.hasOwnProperty('baseToQuoteRate')) {
        obj['baseToQuoteRate'] = ApiClient.convertToType(data['baseToQuoteRate'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = QuoteDataCurrencyExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Global currency code
   * @member {String} globalCurrencyCode
   */
  exports.prototype['globalCurrencyCode'] = undefined;
  /**
   * Base currency code
   * @member {String} baseCurrencyCode
   */
  exports.prototype['baseCurrencyCode'] = undefined;
  /**
   * Store currency code
   * @member {String} storeCurrencyCode
   */
  exports.prototype['storeCurrencyCode'] = undefined;
  /**
   * Quote currency code
   * @member {String} quoteCurrencyCode
   */
  exports.prototype['quoteCurrencyCode'] = undefined;
  /**
   * Store currency to base currency rate
   * @member {Number} storeToBaseRate
   */
  exports.prototype['storeToBaseRate'] = undefined;
  /**
   * Store currency to quote currency rate
   * @member {Number} storeToQuoteRate
   */
  exports.prototype['storeToQuoteRate'] = undefined;
  /**
   * Base currency to global currency rate
   * @member {Number} baseToGlobalRate
   */
  exports.prototype['baseToGlobalRate'] = undefined;
  /**
   * Base currency to quote currency rate
   * @member {Number} baseToQuoteRate
   */
  exports.prototype['baseToQuoteRate'] = undefined;
  /**
   * @member {module:model/QuoteDataCurrencyExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


