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
    define(['ApiClient', 'model/CatalogDataProductInterface', 'model/FrameworkSearchCriteriaInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogDataProductInterface'), require('./FrameworkSearchCriteriaInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogDataProductSearchResultsInterface = factory(root.magento.ApiClient, root.magento.CatalogDataProductInterface, root.magento.FrameworkSearchCriteriaInterface);
  }
}(this, function(ApiClient, CatalogDataProductInterface, FrameworkSearchCriteriaInterface) {
  'use strict';




  /**
   * The CatalogDataProductSearchResultsInterface model module.
   * @module model/CatalogDataProductSearchResultsInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>CatalogDataProductSearchResultsInterface</code>.
   * 
   * @alias module:model/CatalogDataProductSearchResultsInterface
   * @class
   * @param items {Array.<module:model/CatalogDataProductInterface>} Attributes list.
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
   * Constructs a <code>CatalogDataProductSearchResultsInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogDataProductSearchResultsInterface} obj Optional instance to populate.
   * @return {module:model/CatalogDataProductSearchResultsInterface} The populated <code>CatalogDataProductSearchResultsInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CatalogDataProductInterface]);
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
   * Attributes list.
   * @member {Array.<module:model/CatalogDataProductInterface>} items
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


