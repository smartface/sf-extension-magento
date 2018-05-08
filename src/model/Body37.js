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
    define(['ApiClient', 'model/CatalogDataCategoryProductLinkInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogDataCategoryProductLinkInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body37 = factory(root.magento.ApiClient, root.magento.CatalogDataCategoryProductLinkInterface);
  }
}(this, function(ApiClient, CatalogDataCategoryProductLinkInterface) {
  'use strict';




  /**
   * The Body37 model module.
   * @module model/Body37
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body37</code>.
   * @alias module:model/Body37
   * @class
   * @param productLink {module:model/CatalogDataCategoryProductLinkInterface} 
   */
  var exports = function(productLink) {
    var _this = this;

    _this['productLink'] = productLink;
  };

  /**
   * Constructs a <code>Body37</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body37} obj Optional instance to populate.
   * @return {module:model/Body37} The populated <code>Body37</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('productLink')) {
        obj['productLink'] = CatalogDataCategoryProductLinkInterface.constructFromObject(data['productLink']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CatalogDataCategoryProductLinkInterface} productLink
   */
  exports.prototype['productLink'] = undefined;



  return exports;
}));


