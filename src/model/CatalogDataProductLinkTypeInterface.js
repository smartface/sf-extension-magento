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
    define(['ApiClient', 'model/CatalogDataProductLinkTypeExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogDataProductLinkTypeExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogDataProductLinkTypeInterface = factory(root.magento.ApiClient, root.magento.CatalogDataProductLinkTypeExtensionInterface);
  }
}(this, function(ApiClient, CatalogDataProductLinkTypeExtensionInterface) {
  'use strict';




  /**
   * The CatalogDataProductLinkTypeInterface model module.
   * @module model/CatalogDataProductLinkTypeInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>CatalogDataProductLinkTypeInterface</code>.
   * 
   * @alias module:model/CatalogDataProductLinkTypeInterface
   * @class
   * @param code {Number} Link type code
   * @param name {String} Link type name
   */
  var exports = function(code, name) {
    var _this = this;

    _this['code'] = code;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>CatalogDataProductLinkTypeInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogDataProductLinkTypeInterface} obj Optional instance to populate.
   * @return {module:model/CatalogDataProductLinkTypeInterface} The populated <code>CatalogDataProductLinkTypeInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = CatalogDataProductLinkTypeExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Link type code
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Link type name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/CatalogDataProductLinkTypeExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


