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
    define(['ApiClient', 'model/CatalogDataCategoryInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogDataCategoryInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body31 = factory(root.magento.ApiClient, root.magento.CatalogDataCategoryInterface);
  }
}(this, function(ApiClient, CatalogDataCategoryInterface) {
  'use strict';




  /**
   * The Body31 model module.
   * @module model/Body31
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body31</code>.
   * @alias module:model/Body31
   * @class
   * @param category {module:model/CatalogDataCategoryInterface} 
   */
  var exports = function(category) {
    var _this = this;

    _this['category'] = category;
  };

  /**
   * Constructs a <code>Body31</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body31} obj Optional instance to populate.
   * @return {module:model/Body31} The populated <code>Body31</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = CatalogDataCategoryInterface.constructFromObject(data['category']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CatalogDataCategoryInterface} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));


