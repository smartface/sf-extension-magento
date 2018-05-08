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
    define(['ApiClient', 'model/FrameworkSearchCriteriaInterface', 'model/TaxDataTaxRuleInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FrameworkSearchCriteriaInterface'), require('./TaxDataTaxRuleInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.TaxDataTaxRuleSearchResultsInterface = factory(root.magento.ApiClient, root.magento.FrameworkSearchCriteriaInterface, root.magento.TaxDataTaxRuleInterface);
  }
}(this, function(ApiClient, FrameworkSearchCriteriaInterface, TaxDataTaxRuleInterface) {
  'use strict';




  /**
   * The TaxDataTaxRuleSearchResultsInterface model module.
   * @module model/TaxDataTaxRuleSearchResultsInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>TaxDataTaxRuleSearchResultsInterface</code>.
   * Interface for tax rule search results.
   * @alias module:model/TaxDataTaxRuleSearchResultsInterface
   * @class
   * @param items {Array.<module:model/TaxDataTaxRuleInterface>} Items
   * @param searchCriteria {module:model/FrameworkSearchCriteriaInterface} 
   * @param totalCount {Number} Total count.
   */
  var exports = function(items, searchCriteria, totalCount) {
    var _this = this;

    _this['items'] = items;
    _this['searchCriteria'] = searchCriteria;
    _this['totalCount'] = totalCount;
  };

  /**
   * Constructs a <code>TaxDataTaxRuleSearchResultsInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxDataTaxRuleSearchResultsInterface} obj Optional instance to populate.
   * @return {module:model/TaxDataTaxRuleSearchResultsInterface} The populated <code>TaxDataTaxRuleSearchResultsInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [TaxDataTaxRuleInterface]);
      }
      if (data.hasOwnProperty('searchCriteria')) {
        obj['searchCriteria'] = FrameworkSearchCriteriaInterface.constructFromObject(data['searchCriteria']);
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Items
   * @member {Array.<module:model/TaxDataTaxRuleInterface>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:model/FrameworkSearchCriteriaInterface} searchCriteria
   */
  exports.prototype['searchCriteria'] = undefined;
  /**
   * Total count.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;



  return exports;
}));


