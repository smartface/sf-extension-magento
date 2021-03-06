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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogDataProductWebsiteLinkInterface = factory(root.magento.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CatalogDataProductWebsiteLinkInterface model module.
   * @module model/CatalogDataProductWebsiteLinkInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>CatalogDataProductWebsiteLinkInterface</code>.
   * 
   * @alias module:model/CatalogDataProductWebsiteLinkInterface
   * @class
   * @param sku {String} 
   * @param websiteId {Number} Website ids
   */
  var exports = function(sku, websiteId) {
    var _this = this;

    _this['sku'] = sku;
    _this['websiteId'] = websiteId;
  };

  /**
   * Constructs a <code>CatalogDataProductWebsiteLinkInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogDataProductWebsiteLinkInterface} obj Optional instance to populate.
   * @return {module:model/CatalogDataProductWebsiteLinkInterface} The populated <code>CatalogDataProductWebsiteLinkInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('websiteId')) {
        obj['websiteId'] = ApiClient.convertToType(data['websiteId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Website ids
   * @member {Number} websiteId
   */
  exports.prototype['websiteId'] = undefined;



  return exports;
}));


